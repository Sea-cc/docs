<template><div><h1 id="📖-nginx" tabindex="-1"><a class="header-anchor" href="#📖-nginx" aria-hidden="true">#</a> 📖 Nginx</h1>
<p>查看网卡配置 <code v-pre>ip addr</code></p>
<p><img src="/img/image-20220917124443279.png" alt="image-20220917124443279" loading="lazy"></p>
<p>上图看到虚拟机的网卡是有，但是没有 <strong>ip 地址</strong>，接下来进行网卡配置 IP 地址等...</p>
<h3 id="动态的网络配置" tabindex="-1"><a class="header-anchor" href="#动态的网络配置" aria-hidden="true">#</a> 动态的网络配置</h3>
<p><strong>在 Linux 中，一切配置通过文件去修改</strong></p>
<p><code v-pre>vi /etc/sysconfig/network-scripts/</code>【<strong>双击两下 tab 键即可查看当前路径目录下的详情文件 🔥</strong>】</p>
<p><img src="/img/image-20220917125346919.png" alt="image-20220917125346919" loading="lazy"></p>
<p>虚拟机网络配置文件 <code v-pre>vi /etc/sysconfig/network-scripts/ifcfg-ens33</code></p>
<p><img src="/img/image-20220917125649572.png" alt="image-20220917125649572" loading="lazy"></p>
<p>修改完配置文件<strong>重启网络服务</strong> <code v-pre>systemctl restart network</code></p>
<blockquote>
<p>出现重启网络服务失败，查看 vm 的网络适配器配置是否正确</p>
</blockquote>
<blockquote>
<p>注意：当前的网络配置为动态自动 dhcp 配置(自动分配)</p>
</blockquote>
<hr>
<p>网络服务正常启动后，使用 <strong>Xshell</strong> 连接虚拟机(Xshell 相比 Linux 自带的命令行工具更好用，可以复制粘贴)</p>
<p><strong>1、查看虚拟机 ip 地址</strong></p>
<p>输入 <code v-pre>ip addr</code>，查看虚拟机的网卡配置，me：192.168.254.128</p>
<p>尝试本地电脑 ping 192.168.254.128</p>
<p><strong>2、使用 Xshell 连接 Linux 虚拟机</strong></p>
<p><img src="/img/image-20220917132853438.png" alt="image-20220917132853438" style="zoom:50%;" /><img src="/img/image-20220917133003040.png" alt="image-20220917133003040" style="zoom: 65%;" /></p>
<h3 id="配置静态的网络配置" tabindex="-1"><a class="header-anchor" href="#配置静态的网络配置" aria-hidden="true">#</a> 配置静态的网络配置</h3>
<blockquote>
<p>在上面动态的网络配置时，使用 DHCP 自动分配 IP，在电脑重启后 IP 可能被改变，这时比如 Xshell 又要重新查看 虚拟机的 IP 重新连接</p>
</blockquote>
<p>配置静态的网络配置：</p>
<p><strong>1、修改网络配置文件</strong> <code v-pre>vi /etc/sysconfig/network-scripts/ifcfg-ens33</code></p>
<p>注意：区分大小写，<code v-pre>=</code>左边以为大写字母</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">修改分配类型</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">BOOTPROTO=dhcp 改为 static 静态</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">BOOTPROTO=static</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">在配置文件下新增</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">IPADDR=192.168.31.88 静态的 IP 地址</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">NETMASK=255.255.255.0 子网掩码</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">GATEWAY=192.168.31.1 网关，网关依据 Vmware 虚拟网络编辑器的配置🔥，并不是 cmd 下的信息</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">DNS1=8.8.8.8 DNS 服务器(可以配置更多的NDS,统一以1、2、3结尾)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/img/image-20220917134509957.png" alt="image-20220917134509957" loading="lazy"></p>
<p><img src="/img/image-20220917134542296.png" alt="image-20220917134542296" loading="lazy"></p>
<p><strong>2、保存配置文件 esc :wq，cqi</strong></p>
<p><strong>3、重启网络服务 <code v-pre>systemctl restart network</code></strong></p>
<p>重启之后虚拟机 IP 已经变了，Xshell 处于停顿状态，需要重新连接</p>
<p><img src="/img/image-20220917134759862.png" alt="image-20220917134759862" loading="lazy"></p>
<blockquote>
<p>注意：在学习阶段可以随意修改网络配置文件 ip。但是在生产阶段，可能会造成网络 ip 冲突网络联网状态</p>
</blockquote>
<h3 id="排查虚拟机不能上网" tabindex="-1"><a class="header-anchor" href="#排查虚拟机不能上网" aria-hidden="true">#</a> 排查虚拟机不能上网</h3>
<blockquote>
<p>修改静态的 ip 后导致网络联网</p>
</blockquote>
<p><strong>1、在本地 cmd ping 虚拟机 DNS 服务</strong></p>
<p><code v-pre>ping 8.8.8.8</code></p>
<p>正常情况下是能 ping 虚拟机的 DNS 服务的</p>
<p><strong>2、在虚拟机 ping DNS 服务</strong></p>
<p><code v-pre>ping 8.8.8.8</code></p>
<p><strong>3、查看网络配置文件</strong></p>
<p><code v-pre>vi /etc/sysconfig/network-scripts/ifcfg-ens33</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">IPADDR=192.168.31.88</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">NETMASK=255.255.255.0</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">GATEWAY=192.168.31.1  网关依据 Vmware 虚拟网络编辑器的配置</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">DNS1=8.8.8.8</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4、打开 Vmware 虚拟网络编辑器的配置，查看网关</strong></p>
<p>更改设置 - 选择 NAT 模式类型 - NAT 设置</p>
<p><img src="/img/image-20220917140835380.png" alt="image-20220917140835380" loading="lazy"></p>
<blockquote>
<p>发现是网关配置错误</p>
</blockquote>
<p><strong>5、重新修改网络配置文件 or 修改 NAT 设置配置</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">IPADDR=192.168.254.88</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">NETMASK=255.255.255.0</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">GATEWAY=192.168.254.2  网关依据 Vmware 虚拟网络编辑器的配置</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">DNS1=8.8.8.8</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6、重启网络服务</strong> <code v-pre>systemctl restart network</code></p>
<p>7、测试连接网络是否成功 <code v-pre>ping qq.com</code></p>
<blockquote>
<p>另外，可以在本地网络配置中查看，电脑给 Vmware 分配的网络网关信息</p>
<p>控制面板 - 网络 - Vmware8 - 详细信息 - IPv4 WINS 服务器</p>
</blockquote>
<p><img src="/img/image-20220917141636140.png" alt="image-20220917141636140" loading="lazy"></p>
<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2>
<p>Nginx 开源版 <a href="http://nginx.org/" target="_blank" rel="noopener noreferrer">http://nginx.org/<ExternalLinkIcon/></a> 安装</p>
<p>在安装之前先进行虚拟机的<code v-pre>备份</code></p>
<p><strong>1、打开 Xshell 的文件传输工具 Xftp，对 Nginx 安装包进行传输到 虚拟机上</strong></p>
<p><img src="/img/image-20220917143234589.png" alt="image-20220917143234589" loading="lazy"></p>
<p><strong>2、解压缩</strong></p>
<p>压缩包为 tar ，使用 tar 解压 <code v-pre>tar zxvf nginx-1.22.0.tar.gz</code></p>
<p><strong>3、使用 nginx 提供的脚本 configure 进行安装</strong></p>
<p>进入 nginx 解压目录下</p>
<p><img src="/img/image-20220917143529771.png" alt="image-20220917143529771" loading="lazy"></p>
<p>在安装前需要安装一些依赖，如 GCC，执行 <code v-pre>./configure</code> 查看看安装需要的依赖</p>
<p><code v-pre>./configure: error: C compiler cc is not found</code></p>
<p><img src="/img/image-20220917143748121.png" alt="image-20220917143748121" loading="lazy"></p>
<p>安装依赖 gcc <code v-pre>yum install -y gcc</code></p>
<p>-y：处理提示是否语句，yes</p>
<p><strong>4、安装 Nginx</strong></p>
<p><strong><code v-pre>./configure --prefix=/usr/local/nginx</code></strong></p>
<blockquote>
<p>--prefix= 🍃</p>
<p>表示安装文件在哪个目录下</p>
</blockquote>
<p>发生错误</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">./configure: error: the HTTP rewrite module requires the PCRE library.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">You can either disable the module by using --without-http_rewrite_module</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">option, or install the PCRE library into the system, or build the PCRE library</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">statically from the source with nginx by using --with-pcre=&lt;path&gt; option.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺少 <strong>PCRE</strong> 库，继续安装依赖</p>
<p><code v-pre>yum install -y pcre pcre-devel</code></p>
<blockquote>
<p>-devel</p>
<p>表示开发依赖</p>
</blockquote>
<p>发生错误</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">./configure: error: the HTTP gzip module requires the zlib library.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">You can either disable the module by using --without-http_gzip_module</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">option, or install the zlib library into the system, or build the zlib library</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">statically from the source with nginx by using --with-zlib=&lt;path&gt; option.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺少 <strong>zlib</strong> 库，继续安装依赖</p>
<p><code v-pre>yum install -y zlib zlib-devel</code></p>
<p><strong>5、继续安装，成功！！</strong>！</p>
<p>接下来执行</p>
<p><code v-pre>make</code></p>
<p><code v-pre>make install</code></p>
<h3 id="启动-nginx" tabindex="-1"><a class="header-anchor" href="#启动-nginx" aria-hidden="true">#</a> 启动 Nginx</h3>
<p>进入 Nginx 安装目录 <code v-pre>cd /usr/local/nginx/</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">[root@localhost nginx</span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-token-constant)">1.22</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">]# cd </span><span style="color: var(--shiki-token-keyword)">/</span><span style="color: var(--shiki-color-text)">usr</span><span style="color: var(--shiki-token-keyword)">/</span><span style="color: var(--shiki-color-text)">local</span><span style="color: var(--shiki-token-keyword)">/</span><span style="color: var(--shiki-color-text)">nginx</span><span style="color: var(--shiki-token-keyword)">/</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">[root@localhost nginx]# ls</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">conf  html  logs  sbin</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h4>
<blockquote>
<p>在没有启动脚本之前，只能手动启动 Nginx🎗️</p>
<p>cd /sbin</p>
<p>执行 ./nginx</p>
</blockquote>
<h4 id="验证启动" tabindex="-1"><a class="header-anchor" href="#验证启动" aria-hidden="true">#</a> 验证启动</h4>
<p>在本地浏览器中访问虚拟机 ip <code v-pre>ip addr</code></p>
<blockquote>
<p><strong>注意：在访问服务之前 💡</strong></p>
<p><strong>关闭防火墙</strong></p>
<p><code v-pre>systemctl stop firewalld.service</code></p>
<p><strong>禁止防火墙开机启动</strong></p>
<p><code v-pre>systemctl disable firewalld.service</code></p>
<p><strong>放行端口</strong></p>
<p><code v-pre>firewall-cmd --zone=public --add-port=80/tcp --permanent</code></p>
<p><strong>重启防火墙</strong></p>
<p><code v-pre>firewall-cmd --reload</code></p>
</blockquote>
<p>访问 <strong><a href="http://192.168.254.88/" target="_blank" rel="noopener noreferrer">http://192.168.254.88/<ExternalLinkIcon/></a></strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">Welcome to nginx!</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">If you see this page, the nginx web server is successfully installed and working. Further configuration is required.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">For online documentation and support please refer to nginx.org.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">Commercial support is available at nginx.com.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">Thank you for using nginx.Welcome to nginx!</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动命令" tabindex="-1"><a class="header-anchor" href="#启动命令" aria-hidden="true">#</a> 启动命令</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">./nginx 启动，执行可执行文件启动，同时启动【主线程 - 子线程...】</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">./nginx -s stop 快速停止</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">./nginx -s quit 优雅关闭，在退出前完成已经接受的连接请求</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">./nginx -s reload 重新加载配置，在更改完配置文件后，让服务立即生效而不用重启整个nginx服务</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>./nginx -s reload 💡</p>
<p>在重启前暂留已经接受请求的线程，其它的线程被干掉，等重启完成后干掉暂留的线程，使用新的线程去处理请求</p>
</blockquote>
<h4 id="设置环境变量启动" tabindex="-1"><a class="header-anchor" href="#设置环境变量启动" aria-hidden="true">#</a> 设置环境变量启动</h4>
<p><strong>1、打开环境变量所在的文件：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">vim /etc/profile</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2、在 profile 文件末尾，加上一行</strong></p>
<p>指向你的 nginx 的安装位置的 sbin 目录</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">PATH=$PATH:/usr/local/nginx/sbin</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3、重新加载环境，解决</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">source /etc/profile</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用脚本启动-nginx" tabindex="-1"><a class="header-anchor" href="#使用脚本启动-nginx" aria-hidden="true">#</a> 使用脚本启动 Nginx</h4>
<p>使用脚本安装成系统服务启动，在<code v-pre>/usr/lib/systemd/system</code>下创建服务脚本</p>
<p><code v-pre>vi /usr/lib/systemd/system/nginx.service</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">注意安装的文件路径</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">[Unit]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">Description=nginx - web server</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">After=network.target remote-fs.target nss-lookup.target</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">[Service]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">Type=forking</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">PIDFile=/usr/local/nginx/logs/nginx.pid</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ExecReload=/usr/local/nginx/sbin/nginx -s reload</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ExecStop=/usr/local/nginx/sbin/nginx -s stop</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ExecQuit=/usr/local/nginx/sbin/nginx -s quit</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">PrivateTmp=true</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">[Install]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>解决 Xshell 粘贴数据丢失 💡</p>
<p><strong>vi 进入文件 - 按下 a 键 进入 insert 状态粘贴</strong></p>
</blockquote>
<blockquote>
<p><strong>新增服务脚本后需要重新加载系统服务</strong></p>
<p><code v-pre>systemctl daemon-reload</code></p>
</blockquote>
<blockquote>
<p>**查看服务启动状态端口号信息...**🍃</p>
<p><code v-pre>ps -ef | grep nginx</code></p>
</blockquote>
<p>使用服务脚本启动 Nginx</p>
<p><strong><code v-pre>systemctl start nginx.service</code></strong></p>
<h4 id="开机启动" tabindex="-1"><a class="header-anchor" href="#开机启动" aria-hidden="true">#</a> 开机启动</h4>
<p><strong><code v-pre>systemctl enable nginx.service</code></strong></p>
<blockquote>
<p>重启这个 Linux 虚拟机服务命令 🍃</p>
<p><strong><code v-pre>reboot</code></strong></p>
</blockquote>
<h3 id="nginx-目录结构与基本运行原理" tabindex="-1"><a class="header-anchor" href="#nginx-目录结构与基本运行原理" aria-hidden="true">#</a> Nginx 目录结构与基本运行原理</h3>
<p>使用 Xftp 查看 Nginx 文件目录结构，在<code v-pre>/usr/local/nginx</code>目录下(NGINX 几乎一切可以配置)</p>
<h4 id="根目录" tabindex="-1"><a class="header-anchor" href="#根目录" aria-hidden="true">#</a> 根目录</h4>
<blockquote>
<p><img src="/img/image-20220917153454548.png" alt="image-20220917153454548" loading="lazy"></p>
</blockquote>
<blockquote>
<p><strong>注意 💡</strong></p>
<p>🍟 以<code v-pre>_temp</code>为后缀的文件，是 nginx 运行后才产生的文件，临时目录</p>
<p>🍕 <code v-pre>conf</code> nginx 所有配置文件的目录(config)</p>
<p>🥯 <code v-pre>html</code> nginx 默认站点目录</p>
<p>🧀 <code v-pre>log</code> nginx 日志目录</p>
<p>🍤 <code v-pre>sbin</code> nginx 可执行文件目录(主程序)</p>
</blockquote>
<p>nginx 配置文件主要分为四个部分：</p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">main{ </span><span style="color: var(--shiki-token-comment)">#（全局设置）</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    http{ </span><span style="color: var(--shiki-token-comment)">#服务器配置</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        upstream{} </span><span style="color: var(--shiki-token-comment)">#（负载均衡服务器设置）</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        server{ </span><span style="color: var(--shiki-token-comment)">#（主机设置：主要用于指定主机和端口）</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            location{} </span><span style="color: var(--shiki-token-comment)">#（URL匹配的设置）</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="conf" tabindex="-1"><a class="header-anchor" href="#conf" aria-hidden="true">#</a> conf</h4>
<blockquote>
<p>主配置文件 <code v-pre>nginx.conf</code></p>
<p><img src="/img/image-20220917154613175.png" alt="image-20220917154613175" loading="lazy"></p>
</blockquote>
<blockquote>
<p><code v-pre>nginx.conf</code></p>
<p>nginx.conf 会引用 conf 目录下其它的一些配置文件，后期文件配置较多也可以将配置文件分开管理 🙆‍</p>
</blockquote>
<h4 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h4>
<blockquote>
<p>nginx 默认站点目录(默认只能存放<strong>一个站点</strong>)</p>
<p>🛹 <code v-pre>50x.html</code> 错误页面优雅替代显示文件，例如出现 502 错误时会调用此页面</p>
<p>🛴 <code v-pre>index.html</code> 默认的首页文件</p>
<p>🏍️ 文件以 <code v-pre>.htm</code> 后缀作用为兼容旧版本</p>
</blockquote>
<h4 id="log" tabindex="-1"><a class="header-anchor" href="#log" aria-hidden="true">#</a> log</h4>
<blockquote>
<p>nginx 日志目录</p>
<p>🎨 <code v-pre>access.log</code> 访问日志文件，记录用户访问的信息(<strong>此文件可能比较大，可以限制大小，占满磁盘容量可能造成莫名其妙的问题</strong>)</p>
<p>🧵 <code v-pre>error.log</code> 错误日志文件</p>
<p>🧶 <code v-pre>nginx.pid</code> pid 文件，nginx 进程启动后，会把所有进程的 ID 号写到此文件(可以查看进程号干掉进程)</p>
</blockquote>
<h4 id="nginx-运行原理" tabindex="-1"><a class="header-anchor" href="#nginx-运行原理" aria-hidden="true">#</a> Nginx 运行原理</h4>
<blockquote>
<p><img src="/img/nginx运行原理.png" alt="" loading="lazy"></p>
</blockquote>
<blockquote>
<p><strong>Nginx 分为两种进程 Master、Worker</strong>，通过 ps 进程查看命令可以看到详情(由多个进程完成用户的请求)</p>
<p>Master：主进程不处理请求业务，负责协调子进程，校验配置文件</p>
<p>Worker：处理用户请求，读取文件响应请求，将收到的请求转发的到后端服务端，worker 进程的个数<strong>可以在 nginx.conf 文件中进行配置</strong></p>
<p>主进程与子进程(业务进程)全部启动完成后，接下来等待用户请求，用户请求进来，由子进程(Worker)响应并解析返回</p>
<p>当用户请求进来，子进程会解析用户请求，然后读取<code v-pre>/conf/nginx.conf</code>配置，读取用户访问的资源地址，解析读取文件响应回给用户</p>
</blockquote>
<h4 id="nginx-配置与应用场景" tabindex="-1"><a class="header-anchor" href="#nginx-配置与应用场景" aria-hidden="true">#</a> Nginx 配置与应用场景</h4>
<h3 id="最小配置" tabindex="-1"><a class="header-anchor" href="#最小配置" aria-hidden="true">#</a> 最小配置</h3>
<h6 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h6>
<blockquote>
<p>🎮 <strong>worker_processes</strong></p>
<p><code v-pre>worker_processes 1;</code> 默认为 1，表示开启一个业务进程 (Worker)</p>
<p><code v-pre>/proc/cpuinfo | wc -l</code>查看 CPU 核数</p>
<p>启动后 worker 进程的个数（worker 进程个数，一般是 CPU 的核数，或者 CPU 核数的两倍）,一个 CPU 开启多个进程反而效率更低</p>
<p>据官方说法，一般开一个就够了，多开几个，可以减少机器 io 带来的影响。据实践表明，nginx 的这个参数在一般情况下开 4 个或 8 个就可以了，再往上开的话优化不太大。</p>
</blockquote>
<h6 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> events</h6>
<blockquote>
<p>🪔 <strong>worker_connections</strong></p>
<p><code v-pre>worker_connections 1024;</code> 单个业务进程(Worker)可接受连接数</p>
</blockquote>
<h6 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> http</h6>
<blockquote>
<p>📡 <strong>include mime.types</strong></p>
<p><code v-pre>include mime.types;</code> 引入 http mime 类型</p>
<p><code v-pre>mime.types</code> 负责响应文件的类型，添加到请求头，告知客户端文件的类型(传输以二进制数据传输，无法知道文件类型)</p>
<p><strong>返回的数据在客户端将如何处理(下载||展示)，由 mime.types 决定(并不是由后缀决定)</strong> <code v-pre>Content-Type: text/css</code></p>
<p><strong>include 表示将另外的配置文件引入到当前的配置文件中，用于将复杂的配置分开管理</strong></p>
</blockquote>
<blockquote>
<p>🗿 <strong>default_type application/octet-stream</strong></p>
<p><code v-pre>default_type application/octet-stream;</code> 如果 mime 类型没匹配上，默认使用二进制流的方式传输。</p>
</blockquote>
<blockquote>
<p>🏹 <strong>sendfile on</strong></p>
<p><code v-pre>sendfile on;</code> 使用 linux 的 sendfile(socket, file, len) 高效网络传输，也就是<strong>数据 0 拷贝</strong>。 未开启 sendfile</p>
<p>开启时：nginx 找到文件后不需要读取拷贝一份资源再转发给系统网络服务接口返回给客户端，直接让系统网络服务接口读取返回给客户端</p>
<p>关闭时：nginx 找到文件后需要读取拷贝一份资源再转发给系统网络服务接口然后再返回给客户端</p>
</blockquote>
<blockquote>
<p><strong>🔭 keepalive_timeout</strong></p>
<p><code v-pre>keepalive_timeout 65;</code>保持连接超时的时间</p>
</blockquote>
<h6 id="http-server" tabindex="-1"><a class="header-anchor" href="#http-server" aria-hidden="true">#</a> http - server</h6>
<blockquote>
<p><strong><code v-pre>server</code></strong> 虚拟主机 vhost</p>
<p><strong>表示一个主机，一个 server 代表一个主机(nginx 可以运行多个主机，主机之间互相不干扰)，通过端口号区分不同的主机</strong></p>
</blockquote>
<blockquote>
<p><strong>🗜️listen</strong></p>
<p><code v-pre>listen 80;</code>监听的端口号，当前服务器的端口号</p>
</blockquote>
<blockquote>
<p><strong>💉 server_name</strong></p>
<p><code v-pre>server_name localhost;</code>域名 or 主机名</p>
<p>一个 server 中，可以配置多个【主机域名】<code v-pre>server_name</code></p>
</blockquote>
<blockquote>
<p><strong>🛢️ location</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">location </span><span style="color: var(--shiki-token-keyword)">/</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         root   html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         index  </span><span style="color: var(--shiki-token-constant)">index</span><span style="color: var(--shiki-color-text)">.html </span><span style="color: var(--shiki-token-constant)">index</span><span style="color: var(--shiki-color-text)">.htm;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">     }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配域名**<code v-pre>uri</code>**,如，<a href="http://location/index.html" target="_blank" rel="noopener noreferrer">http://location/index.html<ExternalLinkIcon/></a></p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">location</span><span style="color: var(--shiki-color-text)"> [=|~|~*|^~] /uri/ {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>url:<a href="http://location/index.html" target="_blank" rel="noopener noreferrer">http://location/index.html<ExternalLinkIcon/></a></p>
<p>uri:<code v-pre>/index.html</code></p>
<p>匹配正确：(进入)</p>
<p><code v-pre>root 路径;</code>，location 的 root 目录，路径相对于 nginx 根目录下(相对路径)</p>
<p><code v-pre>index index.html index.htm;</code>默认页，匹配的 location 的默认资源</p>
</blockquote>
<blockquote>
<p><strong>⚖️ error_pag</strong> 错误页面</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)"> error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        location = /50x.html {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            root   html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h6 id="详细配置" tabindex="-1"><a class="header-anchor" href="#详细配置" aria-hidden="true">#</a> 详细配置</h6>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">server {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    listen       80;  //监听端口为80，可以自定义其他端口，也可以加上IP地址，如，listen 127.0.0.1:8080;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    server_name  localhost; //定义网站域名，可以写多个，用空格分隔。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #charset koi8-r; //定义网站的字符集，一般不设置，而是在网页代码中设置。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #access_log  logs/host.access.log  main; //定义访问日志，可以针对每一个server（即每一个站点）设置它们自己的访问日志。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ##在server{}里有很多location配置段</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    location / {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        root   html;  //定义网站根目录，目录可以是相对路径也可以是绝对路径。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        index  index.html index.htm; //定义站点的默认页。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #error_page  404              /404.html;  //定义404页面</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    error_page   500 502 503 504  /50x.html;  //当状态码为500、502、503、504时，则访问50x.html</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    location = /50x.html {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        root   html;  //定义50x.html所在路径</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #定义访问php脚本时，将会执行本location{}部分指令</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #location ~ \.php$ {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #    proxy_pass   http://127.0.0.1;  //proxy_pass后面指定要访问的url链接，用proxy_pass实现代理。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #location ~ \.php$ {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #    root           html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #    fastcgi_pass   127.0.0.1:9000;  //定义FastCGI服务器监听端口与地址，支持两种形式，1 IP:Port， 2 unix:/path/to/sockt</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;  //定义SCRIPT_FILENAME变量，后面的路径/scripts为上面的root指定的目录</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #    include        fastcgi_params; //引用prefix/conf/fastcgi_params文件，该文件定义了fastcgi相关的变量</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    # concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #location ~ /\.ht {   //访问的url中，以/.ht开头的，如，www.example.com/.htaccess，会被拒绝，返回403状态码。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #    deny  all;  //这里的all指的是所有的请求。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    #}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#server {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    listen       8000;  //监听8000端口</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    listen       somename:8080;  //指定ip:port</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    server_name  somename  alias  another.alias;  //指定多个server_name</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    location / {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#        root   html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"># HTTPS server</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#server {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    listen       443 ssl;  //监听443端口，即ssl</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    server_name  localhost;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">### 以下为ssl相关配置</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    ssl_certificate      cert.pem;    //指定pem文件路径</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    ssl_certificate_key  cert.key;  //指定key文件路径</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    ssl_session_cache    shared:SSL:1m;  //指定session cache大小</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    ssl_session_timeout  5m;  //指定session超时时间</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;   //指定ssl协议</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    ssl_ciphers  HIGH:!aNULL:!MD5;  //指定ssl算法</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    ssl_prefer_server_ciphers  on;  //优先采取服务器算法</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    location / {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#        root   html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="域名解析" tabindex="-1"><a class="header-anchor" href="#域名解析" aria-hidden="true">#</a> 域名解析</h2>
<p>使用 host 文件解析域名(本地域名解析)，在<code v-pre>C:\Windows\System32\drivers\etc</code>目录下，备份一份 hosts 文件，示例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)"># localhost name resolution is handled within DNS itself.</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#	127.0.0.1       localhost</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">#	::1             localhost</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">127.0.0.1       activate.navicat.com</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>#</code> 127.0.0.1(ip 地址) localhost(主机名 or 域名)</p>
<p><strong>配置虚拟机的域名</strong></p>
<p><strong>1、修改 hosts 文件的操作权限</strong></p>
<blockquote>
<p>右键 hosts 文件属性，常规取消勾选只读，赋予 users 权限,进行修改</p>
<p>修改完成后需要还原默认权限，防止第三方软件更改此文件</p>
<p>修改 hosts 后需要刷新 DNS 缓存使之生效,在 cmd 命令行中执行命令：ipconfig/flushdns</p>
<p>测试 cmd ping 域名</p>
</blockquote>
<blockquote>
<p><strong>本地 host 文件和 nginx 映射的关系</strong></p>
<p>首先，客户端通过域名请求服务，如果你在本地的 hosts 文件中配置了该域名与 ip 的映射关系，那么，请求就会直接发送到 hosts 文件中对应的 ip，不会通过 dns 解析（如果本地 hosts 文件中没有配置，就会通过 dns 解析域名）。
这时，请求到达了服务端，服务端的 nginx 拦截了该请求，然后在本地<strong>通过域名匹配 server_name，然后，根据 proxy_pass 返回相应的服务给客户端。</strong></p>
</blockquote>
<h2 id="nginx-虚拟主机域名配置" tabindex="-1"><a class="header-anchor" href="#nginx-虚拟主机域名配置" aria-hidden="true">#</a> Nginx 虚拟主机域名配置</h2>
<p><strong>1、在根目录下创建 <code v-pre>www</code> 目录存放站点资源</strong></p>
<p><code v-pre>cd /</code> <code v-pre>mkdir www</code> <code v-pre>cd /www/</code></p>
<p>2、分别创建站点目录，区分管理站点</p>
<p><code v-pre>mkdir www</code> 主站点</p>
<p><code v-pre>mkdir video</code> 视频站点</p>
<p><strong>3、在站点上创建主页面(默认页 index.html)</strong></p>
<p><code v-pre>cd www</code> - <code v-pre>vi index.html</code> - <code v-pre>编辑数据</code></p>
<p><code v-pre>... ...</code></p>
<p><strong>4、在 nginx 配置 nginx.conf 下进行配置修改</strong></p>
<p>配置单独的虚拟主机站点(www、video),<code v-pre>在 http 模块下</code>，配置完成，<strong>reload</strong> 下</p>
<p><code v-pre>systemctl reload nginx</code></p>
<p><code v-pre>systemctl status nginx</code>(查看状态是否重启)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)"> # www主机站点 ------ ⚖️如果其它站点没有匹配上，会找到第一个站点 ------</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"> server {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"> 		# 80端口</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        listen       80;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        #server_name  localhost;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        server_name  www.web-u.top;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        location / {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	 	   root   /www/www;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">           index  index.html index.htm;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        location = /50x.html {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            root   html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)"> # video主机站点</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"> server {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"> 		# 88端口</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        #listen       88;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        listen       80;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        #server_name  localhost;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        server_name  video.web-u.top;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        location / {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	 	   root   /www/video;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">           index  index.html index.htm;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        location = /50x.html {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            root   html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>在端口号相同情况下，通过主机域名区分主机站点 server_name</strong>(<strong><code v-pre>主机名与端口号组合需要全局唯一</code></strong>)</p>
<p>修改 server_name <code v-pre>server_name www.web-u.top</code> <code v-pre>server_name video.web-u.top</code></p>
</blockquote>
<h2 id="server-name-匹配规则" tabindex="-1"><a class="header-anchor" href="#server-name-匹配规则" aria-hidden="true">#</a> server_name 匹配规则</h2>
<blockquote>
<p><strong><code v-pre>🪕 解决【Nginx 虚拟主机域名配置】中，多个不同资源需要配置多个不同 server 虚拟主机站点的缺点</code></strong></p>
<p>🛢️ 一个 server 中，可以配置多个【主机域名】<code v-pre>server_name</code></p>
<p>🔭 当最上层的虚拟主机被匹配正确时，<strong>后面的则不再匹配</strong></p>
<p>⚖️ 支持<strong>通配符</strong>匹配 <code v-pre> server_name *.web-u.top;</code> or <code v-pre>server_name www.web-u.*;</code></p>
<p>🏹 正则匹配(适用于二级域名匹配)，二级域名.web-u.top:数字开头 <code v-pre>~^[0-9]+\.web-u\.com$;</code></p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">server {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        listen       80;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        #server_name  localhost;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        #一个虚拟主机站点配置多个域名主机名(注意之间的空格)🪔</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        server_name  www.web-u.top ng.web-u.top;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        #charset koi8-r;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        #access_log  logs/host.access.log  main;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        location / {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	 		root   /www/www;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            index  index.html index.htm;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正向代理与反向代理" tabindex="-1"><a class="header-anchor" href="#正向代理与反向代理" aria-hidden="true">#</a> 正向代理与反向代理</h2>
<h3 id="正向" tabindex="-1"><a class="header-anchor" href="#正向" aria-hidden="true">#</a> 正向</h3>
<blockquote>
<p><strong>💻 当用户访问外网，如谷歌商城，用户是无法直接访问到外网的谷歌的，<code v-pre>此时用户需要借助一个代理服务器(正向)</code>，将请求代理给外网，外网返回资源给代理服务器，再将资源返回用户，这就是正向代理</strong></p>
<p>这个代理服务<strong>代理的是客户端</strong>的，是客户端需要请求的，客户端则需要起一个代理服务器，去请求数据【客户端与代理服务器是一体】，<strong><code v-pre>客户端自己主动提供一个代理</code></strong></p>
<p><img src="/img/image-20220918130055899.png" alt="image-20220918130055899" loading="lazy"></p>
</blockquote>
<h3 id="反向" tabindex="-1"><a class="header-anchor" href="#反向" aria-hidden="true">#</a> 反向</h3>
<blockquote>
<p><strong>🌏 当用户需要访问后台服务资源时，用户是【无法直接访问】的到，后台服务'无法直接被用户访问'，<code v-pre>此时后台需要借助一个代理服务器(反向)</code>，帮助用户可以访问到它，反方向起一个代理，【代理对象为后台服务】,代理服务获取用户请求再将请求给到后台(代理服务与后台是可以访问的)，后台再将资源响应给代理，再响应回给用户(代理与用户也是可以访问到的)</strong></p>
<p>后台服务器与代理是一体，<strong><code v-pre>后台服务器主动反向提供一个代理给客户端访问</code></strong></p>
<p><img src="/img/image-20220918131838848.png" alt="image-20220918131838848" loading="lazy"></p>
<p>隧道式代理：一进一出都经过 nginx 处理响应</p>
<p>lvs(DR)式代理：由 nginx 进，直接由后台服务响应数据返回客户端</p>
</blockquote>
<h2 id="反向代理配置" tabindex="-1"><a class="header-anchor" href="#反向代理配置" aria-hidden="true">#</a> 反向代理配置</h2>
<p>1、端口转发</p>
<blockquote>
<p><code v-pre>proxy_pass</code></p>
<p>两种配置格式：</p>
<p><strong>1、一台具体的主机 or 网址</strong></p>
<p>配置为网址时，<code v-pre>协议格式必须书写完整</code>，<code v-pre>proxy_pass http://juejin.cn/;</code></p>
<p><strong>不支持反向代理转发到 <code v-pre>https</code> 的网站服务</strong>,需要与证书配置对应正确</p>
<p>协议书写方式不正确：<code v-pre>http://</code>缺少 www，则为一个重定向请求(301、302)</p>
<p><code v-pre>http://www</code>，则为一个正确的请求转发(200)</p>
<p>真正转发成功时，可以看到浏览器的地址里面为请求给 nginx 的地址<code v-pre>web-u.top</code>，而不是转发后的地址<code v-pre>juejin.cn</code>转发后的每个请求都会经过 nginx，反之为重定向的话，nginx 不会再捕获到重定向后的请求信息</p>
<p><strong><code v-pre>root 与 proxy_pass只能二选一</code></strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">location / {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	#proxy_pass   http://juejin.cn/;不支持 后面也会跳转到https上</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	proxy_pass   http://www.atguigu.com;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	#root   html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          index  index.html index.htm;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、一组服务器`</strong></p>
</blockquote>
<blockquote>
<p><strong>在 nginx 中配置 proxy_pass 代理转发时，如果在 proxy_pass 后面的 url 加/，表示绝对根路径；<code v-pre>如果没有/，表示相对路径，把匹配的路径部分也给代理走</code></strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">假设下面四种情况分别用 http://192.168.1.1/proxy/test.html 进行访问。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">第一种：</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">location /proxy/ {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">proxy_pass http://127.0.0.1/;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">代理到URL：http://127.0.0.1/test.html</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">第二种（相对于第一种，最后少一个 / ）</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">location /proxy/ {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">proxy_pass http://127.0.0.1;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">代理到URL：http://127.0.0.1/proxy/test.html</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">第三种：</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">location /proxy/ {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">proxy_pass http://127.0.0.1/aaa/;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">代理到URL：http://127.0.0.1/aaa/test.html</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">第四种（相对于第三种，最后少一个 / ）</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">location /proxy/ {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">proxy_pass http://127.0.0.1/aaa;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">代理到URL：http://127.0.0.1/aaatest.html</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2>
<blockquote>
<p>🌏 配置两个虚拟主机 <code v-pre>192.168.254.8</code>nginx_1 <code v-pre>192.168.254.18</code>nginx_2</p>
<p>负载均衡：nginx 虚拟服务器<code v-pre>192.168.254.88</code>(负载均衡器)将上面两台配置的虚拟主机反代理，之后**<code v-pre>进行负载均衡，一会访问到 nginx_1,一会访问到 nginx_2</code>**</p>
</blockquote>
<p><strong>1、配置代理转发(转发为一组集群服务器)</strong></p>
<p>集群：一群每一个功能一样相似的服务器</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)"> location / {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"> 	# 表示将所有请求转发到 httpds 服务器集群组中配置的某一台服务器上💻💻💻</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	proxy_pass   http://httpds;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	#root   html;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    index  index.html index.htm;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、配置 upstream 模块(与 server 同级)</strong></p>
<p><code v-pre>upstream 代理转发集群别名(httpds)</code></p>
<p><strong>3、配置服务器主机集群</strong></p>
<p><strong><code v-pre>此方法为轮询策列(默认) 🧫</code></strong>，对于每个服务器配置均等情况下比较好的策列(配置不一，配置低与配置高获得相同的处理次数)</p>
<p>端口可选，不配置默认使用 80 端口</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">upstream httpds {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	# nginx_1</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	server 192.168.254.8:</span><span style="color: var(--shiki-token-constant)">80</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	# nginx_2</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	server 192.168.254.18:</span><span style="color: var(--shiki-token-constant)">80</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="负载均衡策略规则" tabindex="-1"><a class="header-anchor" href="#负载均衡策略规则" aria-hidden="true">#</a> 负载均衡策略规则</h3>
<p><strong>权重(越高分配越多)</strong></p>
<p>通过上面的配置，Nginx 默认将请求依次分配给 100，101，102 来处理，可以通过修改下面这些参数来改变默认的分配策略：
weight 默认为 1，将请求平均分配给每台 server</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">upstream tomcats {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"> server 192.168.0.100:</span><span style="color: var(--shiki-token-constant)">8080</span><span style="color: var(--shiki-color-text)"> weight</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-color-text)">;  # </span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-token-keyword)">/</span><span style="color: var(--shiki-token-constant)">6</span><span style="color: var(--shiki-color-text)">次</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"> server 192.168.0.101:</span><span style="color: var(--shiki-token-constant)">8080</span><span style="color: var(--shiki-color-text)"> weight</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">3</span><span style="color: var(--shiki-color-text)">;  # </span><span style="color: var(--shiki-token-constant)">3</span><span style="color: var(--shiki-token-keyword)">/</span><span style="color: var(--shiki-token-constant)">6</span><span style="color: var(--shiki-color-text)">次</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"> server 192.168.0.102:</span><span style="color: var(--shiki-token-constant)">8080</span><span style="color: var(--shiki-color-text)"> weight</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)">;  # </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-keyword)">/</span><span style="color: var(--shiki-token-constant)">6</span><span style="color: var(--shiki-color-text)">次</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"># 更多配置  max_fails</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">3</span><span style="color: var(--shiki-color-text)"> fail_timeout</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">15</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>backup 备份机</strong></p>
<p>所有服务器挂了之后才会生效</p>
<p><code v-pre>server 192.168.0.100:8080 backup;</code></p>
<hr>
<p><strong>不常用的：</strong></p>
<p><strong>1、down 标识某一台 server 不可用，不参与负载均衡(休息)</strong></p>
<p><code v-pre>server 192.168.0.100:8080 down;</code></p>
<p>生产环境不常用：</p>
<p><strong>2、ip_hash</strong></p>
<p>难以保证 ip 地址相同不变(比如移动端手机)</p>
<h6 id="登录验证场景" tabindex="-1"><a class="header-anchor" href="#登录验证场景" aria-hidden="true">#</a> <strong>登录验证场景</strong></h6>
<blockquote>
<p>在用户请求后台服务登录时，轮询服务器集群，登录验证成功后信息存在处理当前请求的那台服务器，下次访问其它的集群服务器怎么办，怎么保持与用户的会话？</p>
<p>**<code v-pre>1、用 token 存储于客户端可以解决(JWT)</code>**🌏🌏🌏🌏🌏🌏</p>
<p><strong><code v-pre>2、ip_hash</code></strong>，<strong>根据客户端的地址，让其保持与同一台服务器会话(成功验证后的服务器)</strong></p>
<p>3、无状态的 会话 session(SpringSession)</p>
</blockquote>
<blockquote>
<p><strong>token 存储于客户端解决原理</strong>🌏🌏🌏🌏🌏🌏</p>
<p>用户第一次请求到 nginx 服务器，nginx 服务器会找到一台<strong>专门用于权限校验的服务器</strong>，返回 token 客户端储存(token 为两方加密的一种身份验证令牌)，客户端再次请求时带上 token ，服务器解开验证(token 被篡改之后 token 是解不开的)</p>
</blockquote>
<p><strong>3、least_conn 最少连接数</strong></p>
<p>(不合理)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)"># 定义转发分配规则</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">upstream httpds {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	least_conn; # 把请求分派给连接数最少的服务器</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	server srv1.com;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	server srv2.com:8088;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	server 192.168.0.100:8088;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4、fair 第三方负载策略</strong></p>
<p>根据服务器的响应时间来分配请求，响应时间短的优先分配，即负载压力小的优先会分配(不合理：容易造成流量倾斜)</p>
<p><strong>5、url_hash 第三方</strong></p>
<p>定向流量转发(适用于访问固定资源，不太同一服务器的资源)</p>
<h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2>
<h3 id="net-tools" tabindex="-1"><a class="header-anchor" href="#net-tools" aria-hidden="true">#</a> net-tools</h3>
<p>安装 net-tools 来查看端口使用情况：<code v-pre>yum -y install net-tools</code></p>
<p>net-tools 工具箱包括<a href="https://so.csdn.net/so/search?q=arp&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">arpopen in new window<ExternalLinkIcon/></a>, hostname, ifconfig, netstat, rarp, route, plipconfig, slattach, mii-tool and iptunnel and ipmaddr 等命令。</p>
<p>查看端口使用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">netstat -nplt</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
