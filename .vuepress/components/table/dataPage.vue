<template>
	<div>
		<el-form v-if="option.search" :model="searchModel">
			<el-row :gutter="12">
				<el-col
					v-bind="option.search.spans"
					v-for="(item, index) in option.search.items"
					:key="index"
				>
					<el-form-item v-bind="item">
						<slot
							:name="`search-form-${item.prop}`"
							:searchModel="searchModel"
							:prop="item.prop"
						>
							<el-input
								v-model="searchModel[item.prop]"
								placeholder="请输入搜索内容"
							/>
						</slot>
					</el-form-item>
					<!-- 查询表单附加插槽 -->
					<slot name="search-append"></slot>
				</el-col>
			</el-row>
		</el-form>
		<div class="data-page">
			<el-row class="table-business-btn" justify="space-between">
				<!-- 表格功能按钮 -->
				<el-col :span="14" v-if="option.search">
					<el-button
						type="primary"
						:size="option.button?.size"
						@click="handleTableData"
						>查询</el-button
					>
					<el-button
						type="info"
						:size="option.button?.size"
						@click="reset"
						>重置</el-button
					>
					<slot name="table-button">
						<template v-if="option.button">
							<el-button
								v-for="(item, index) in option.button.btns"
								:key="index"
								:icon="item.icon"
								:type="item.type"
								:size="option.button?.size"
								@click="item.event(item.type)"
								>{{ item.text }}</el-button
							>
						</template>
					</slot>
				</el-col>
				<!-- <el-col :span="10">
                    <el-button type="warning">Warning</el-button>
                    <el-button type="danger">Danger</el-button>
                </el-col> -->
			</el-row>
			<el-table
				:header-cell-style="{
					background: 'var(--el-color-primary-light-9)',
				}"
				v-bind="{ ...option.table, ...$attrs }"
				highlight-current-row
				:data="tableData"
				stripe
			>
				<slot></slot>
				<!-- 多选与序号插槽 selection、index -->
				<el-table-column
					v-if="option.table?.selection"
					type="selection"
					width="50"
				></el-table-column>
				<el-table-column
					v-if="option.table?.index"
					label="序号"
					type="index"
					width="55"
					align="center"
				>
					<template v-slot="scope">
						<p class="serialNumber">
							{{ scope.$index + 1 }}
						</p>
					</template>
				</el-table-column>
				<!-- 字段插槽 table-${item.prop} -->
				<template
					v-for="item in option.table?.columns"
					:key="item.prop"
				>
					<el-table-column v-bind="item">
						<template v-slot="scope">
							<slot :name="`table-${item.prop}`" :table="scope">
								{{ scope.row[item.prop] }}
							</slot>
						</template>
					</el-table-column>
				</template>
				<!-- 操作插槽 table-operation -->
				<el-table-column
					v-if="option.table?.operation"
					fixed="right"
					label="操作"
					type="index"
					width="150"
					align="center"
				>
					<template v-slot="scope">
						<slot name="table-operation" :table="scope"> </slot>
					</template>
				</el-table-column>
				<template #append>
					<slot name="table-append"></slot>
				</template>
				<template #empty>
					<el-empty :image-size="80" description="空空如也！" />
				</template>
			</el-table>
			<template v-if="tableData.length">
				<pagination
					:total="total"
					@size-change="handleTableData"
					@current-change="handleTableData"
					v-model:currentPage="currentPage"
					v-model:page-size="pageSize"
			/></template>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {
	reactive,
	ref,
	defineProps,
	defineEmits,
	computed,
	watch,
	provide,
	withDefaults,
} from 'vue';
import pagination from './pagination.vue';
const props = defineProps({
	pageMap: {
		type: Array,
		default: () => ['currentPage', 'pageSize'],
	},
	// option: {
	// 	type: Object,
	// 	default: () => ({}),
	// },
	// getTableData: {
	// 	type: Function,
	// 	default: () => Promise.resolve(),
	// },
});
const option = reactive({
	search: {
		spans: { xs: 12, sm: 12, md: 6, lg: 8, xl: 8 },
		items: [
			{
				prop: 'name',
				label: '姓名',
			},
			{
				prop: 'description',
				label: '描述',
			},
			{
				prop: 'address',
				label: '地址',
			},
		],
	},
	button: {
		size: 'small',
		btns: [
			{
				type: 'primary',
				text: '添加',
			},
		],
	},
	table: {
		// 开启表格操作插槽
		operation: true,
		columns: [
			{
				prop: 'name',
				label: '角色名称',
			},
			{
				prop: 'description',
				label: '描述',
			},
			{
				prop: 'menus',
				label: '菜单',
			},
			{
				prop: 'state',
				label: '状态',
			},
			{
				prop: 'createTime',
				label: '创建时间',
			},
			{
				prop: 'updateTime',
				label: '更新时间',
			},
		],
	},
});
interface ISearchModel {
	[prop: string]: any;
}
let searchModel: ISearchModel = reactive({});
// 重置
const reset = () => {
	Object.keys(searchModel).forEach((key: string) => {
		delete searchModel[key];
	});
	currentPage.value = 1;
	pageSize.value = 10;
	handleTableData();
};
// 监听查询表单变化
watch(
	() => searchModel,
	(newVal) => {
		if (Object.keys(newVal).length == 0) return;
		handleTableData();
	},
	{
		deep: true,
	}
);
// 分页逻辑
const currentPage = ref(1);
const pageSize = ref(10);
// 由开发者映射页码数字段名
const page = props.pageMap[0] as string;
const rows = props.pageMap[1] as string;
const handelQuery = () => {
	const body = {
		...searchModel,
		[page]: currentPage.value,
		[rows]: pageSize.value,
	};
	return body;
};

/* !!!!!!!!!! */
let tableData = reactive<any[]>([]);
let total = ref<number>(0);
interface ITableDataInfo {
	tabelData: any[];
	total: number;
}
// 获取表格数据方法
const handleTableData = () => {
	const body = handelQuery();
	// props.getTableData(body).then((result: ITableDataInfo) => {
	// 	// tableData.value = result.tabelData;
	// 	total.value = result.total;
	// 	console.log(tableData, 'tableData');
	// });
};
handleTableData();
</script>
<style lang="scss" scoped>
.data-page {
	background-color: #ffffff;
	border-radius: 4px;
	overflow: hidden;
	box-shadow: rgb(0 0 0 / 5%) 0px 1px 2px 0px;
	padding: 0 18px 12px;
}
.table-business-btn {
	padding: 10px 0;
	.el-col {
		flex: none;
		align-self: center;
	}
}
.el-form {
	border-radius: 4px;
	box-shadow: rgb(0 0 0 / 5%) 0px 1px 2px 0px;
	padding: 13px 18px;
	background-color: #ffffff;
	margin-bottom: 5px;
	.el-row {
		div {
			align-self: center;
		}
	}
}
.el-form-item {
	margin: 6px;
}
::v-deep.el-table {
	font-size: 13px;
	.el-table__cell {
		padding: 6px 0;
	}
	.el-table__body tr.current-row {
		position: relative;
	}
	.el-table__body tr.current-row::after {
		content: '';
		position: absolute;
		top: 0px;
		bottom: 0;
		left: 0;
		width: 3px;
		z-index: 999;
		background-color: var(--el-color-primary);
	}
	.el-table__header {
		border-radius: 4px;
		overflow: hidden;
	}
	// 序号
	.serialNumber {
		background-color: hsl(223, 10%, 90%);
		color: #606266;
		width: 22px;
		border-radius: 3px;
	}
}
</style>
