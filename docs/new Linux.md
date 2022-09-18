# Linux

查看网卡配置 `ip addr`

![image-20220917124443279](/img/image-20220917124443279.png)

上图看到虚拟机的网卡是有，但是没有 **ip 地址**，接下来进行网卡配置 IP 地址等...

### 动态的网络配置

**在 Linux 中，一切配置通过文件去修改**

`vi /etc/sysconfig/network-scripts/`【**双击两下 tab 键即可查看当前路径目录下的详情文件 🔥**】

![image-20220917125346919](/img/image-20220917125346919.png)

虚拟机网络配置文件 `vi /etc/sysconfig/network-scripts/ifcfg-ens33`

![image-20220917125649572](/img/image-20220917125649572.png)

修改完配置文件**重启网络服务** `systemctl restart network`

> 出现重启网络服务失败，查看 vm 的网络适配器配置是否正确

> 注意：当前的网络配置为动态自动 dhcp 配置(自动分配)

---

网络服务正常启动后，使用 **Xshell** 连接虚拟机(Xshell 相比 Linux 自带的命令行工具更好用，可以复制粘贴)

**1、查看虚拟机 ip 地址**

输入 `ip addr`，查看虚拟机的网卡配置，me：192.168.254.128

尝试本地电脑 ping 192.168.254.128

**2、使用 Xshell 连接 Linux 虚拟机**

<img src="/img/image-20220917132853438.png" alt="image-20220917132853438" style="zoom:50%;" /><img src="/img/image-20220917133003040.png" alt="image-20220917133003040" style="zoom: 65%;" />

### 配置静态的网络配置

> 在上面动态的网络配置时，使用 DHCP 自动分配 IP，在电脑重启后 IP 可能被改变，这时比如 Xshell 又要重新查看 虚拟机的 IP 重新连接

配置静态的网络配置：

**1、修改网络配置文件** `vi /etc/sysconfig/network-scripts/ifcfg-ens33`

注意：区分大小写，`=`左边以为大写字母

```shell
修改分配类型
BOOTPROTO=dhcp 改为 static 静态
BOOTPROTO=static

在配置文件下新增
IPADDR=192.168.31.88 静态的 IP 地址
NETMASK=255.255.255.0 子网掩码
GATEWAY=192.168.31.1 网关，网关依据 Vmware 虚拟网络编辑器的配置🔥，并不是 cmd 下的信息
DNS1=8.8.8.8 DNS 服务器(可以配置更多的NDS,统一以1、2、3结尾)
```

![image-20220917134509957](/img/image-20220917134509957.png)

![image-20220917134542296](/img/image-20220917134542296.png)

**2、保存配置文件 esc :wq，cqi**

**3、重启网络服务 `systemctl restart network`**

重启之后虚拟机 IP 已经变了，Xshell 处于停顿状态，需要重新连接

![image-20220917134759862](/img/image-20220917134759862.png)

> 注意：在学习阶段可以随意修改网络配置文件 ip。但是在生产阶段，可能会造成网络 ip 冲突网络联网状态

### 排查虚拟机不能上网

> 修改静态的 ip 后导致网络联网

**1、在本地 cmd ping 虚拟机 DNS 服务**

`ping 8.8.8.8`

正常情况下是能 ping 虚拟机的 DNS 服务的

**2、在虚拟机 ping DNS 服务**

`ping 8.8.8.8`

**3、查看网络配置文件**

`vi /etc/sysconfig/network-scripts/ifcfg-ens33`

```shell
IPADDR=192.168.31.88
NETMASK=255.255.255.0
GATEWAY=192.168.31.1  网关依据 Vmware 虚拟网络编辑器的配置
DNS1=8.8.8.8
```

**4、打开 Vmware 虚拟网络编辑器的配置，查看网关**

更改设置 - 选择 NAT 模式类型 - NAT 设置

![image-20220917140835380](/img/image-20220917140835380.png)

> 发现是网关配置错误

**5、重新修改网络配置文件 or 修改 NAT 设置配置**

```shell
IPADDR=192.168.254.88
NETMASK=255.255.255.0
GATEWAY=192.168.254.2  网关依据 Vmware 虚拟网络编辑器的配置
DNS1=8.8.8.8
```

**6、重启网络服务** `systemctl restart network`

7、测试连接网络是否成功 `ping qq.com`

> 另外，可以在本地网络配置中查看，电脑给 Vmware 分配的网络网关信息
>
> 控制面板 - 网络 - Vmware8 - 详细信息 - IPv4 WINS 服务器

![image-20220917141636140](/img/image-20220917141636140.png)

## Nginx

Nginx 开源版 http://nginx.org/ 安装

在安装之前先进行虚拟机的`备份`

**1、打开 Xshell 的文件传输工具 Xftp，对 Nginx 安装包进行传输到 虚拟机上**

![image-20220917143234589](/img/image-20220917143234589.png)

**2、解压缩**

压缩包为 tar ，使用 tar 解压 `tar zxvf nginx-1.22.0.tar.gz`

**3、使用 nginx 提供的脚本 configure 进行安装**

进入 nginx 解压目录下

![image-20220917143529771](/img/image-20220917143529771.png)

在安装前需要安装一些依赖，如 GCC，执行 `./configure` 查看看安装需要的依赖

`./configure: error: C compiler cc is not found`

![image-20220917143748121](/img/image-20220917143748121.png)

安装依赖 gcc `yum install -y gcc`

-y：处理提示是否语句，yes

**4、安装 Nginx**

**`./configure --prefix=/usr/local/nginx`**

> --prefix= 🍃
>
> 表示安装文件在哪个目录下

发生错误

```
./configure: error: the HTTP rewrite module requires the PCRE library.
You can either disable the module by using --without-http_rewrite_module
option, or install the PCRE library into the system, or build the PCRE library
statically from the source with nginx by using --with-pcre=<path> option.
```

缺少 **PCRE** 库，继续安装依赖

`yum install -y pcre pcre-devel`

> -devel
>
> 表示开发依赖

发生错误

```
./configure: error: the HTTP gzip module requires the zlib library.
You can either disable the module by using --without-http_gzip_module
option, or install the zlib library into the system, or build the zlib library
statically from the source with nginx by using --with-zlib=<path> option.
```

缺少 **zlib** 库，继续安装依赖

`yum install -y zlib zlib-devel`

**5、继续安装，成功！！**！

接下来执行

`make`

`make install`

### 启动 Nginx

进入 Nginx 安装目录 `cd /usr/local/nginx/`

```js
[root@localhost nginx-1.22.0]# cd /usr/local/nginx/
[root@localhost nginx]# ls
conf  html  logs  sbin
```

#### 启动服务

> 在没有启动脚本之前，只能手动启动 Nginx🎗️
>
> cd /sbin
>
> 执行 ./nginx

#### 验证启动

在本地浏览器中访问虚拟机 ip `ip addr`

> **注意：在访问服务之前 💡**
>
> **关闭防火墙**
>
> `systemctl stop firewalld.service`
>
> **禁止防火墙开机启动**
>
> `systemctl disable firewalld.service`
>
> **放行端口**
>
> `firewall-cmd --zone=public --add-port=80/tcp --permanent`
>
> **重启防火墙**
>
> `firewall-cmd --reload`

访问 **http://192.168.254.88/**

```
Welcome to nginx!
If you see this page, the nginx web server is successfully installed and working. Further configuration is required.

For online documentation and support please refer to nginx.org.
Commercial support is available at nginx.com.

Thank you for using nginx.Welcome to nginx!
```

#### 启动命令

```
./nginx 启动，执行可执行文件启动，同时启动【主线程 - 子线程...】
./nginx -s stop 快速停止
./nginx -s quit 优雅关闭，在退出前完成已经接受的连接请求
./nginx -s reload 重新加载配置，在更改完配置文件后，让服务立即生效而不用重启整个nginx服务
```

> ./nginx -s reload 💡
>
> 在重启前暂留已经接受请求的线程，其它的线程被干掉，等重启完成后干掉暂留的线程，使用新的线程去处理请求

#### 设置环境变量启动

**1、打开环境变量所在的文件：**

```
vim /etc/profile
```

**2、在 profile 文件末尾，加上一行**

指向你的 nginx 的安装位置的 sbin 目录

```
PATH=$PATH:/usr/local/nginx/sbin
```

**3、重新加载环境，解决**

```
source /etc/profile
```

#### 使用脚本启动 Nginx

使用脚本安装成系统服务启动，在`/usr/lib/systemd/system`下创建服务脚本

`vi /usr/lib/systemd/system/nginx.service`

```
注意安装的文件路径
[Unit]
Description=nginx - web server
After=network.target remote-fs.target nss-lookup.target
[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true
[Install]
WantedBy=multi-user.target
```

> 解决 Xshell 粘贴数据丢失 💡
>
> **vi 进入文件 - 按下 a 键 进入 insert 状态粘贴**

> **新增服务脚本后需要重新加载系统服务**
>
> `systemctl daemon-reload`

> **查看服务启动状态端口号信息...**🍃
>
> `ps -ef | grep nginx`

使用服务脚本启动 Nginx

**`systemctl start nginx.service`**

#### 开机启动

**`systemctl enable nginx.service`**

> 重启这个 Linux 虚拟机服务命令 🍃
>
> **`reboot`**

### Nginx 目录结构与基本运行原理

使用 Xftp 查看 Nginx 文件目录结构，在`/usr/local/nginx`目录下(NGINX 几乎一切可以配置)

#### 根目录

> ![image-20220917153454548](/img/image-20220917153454548.png)

> **注意 💡**
>
> 🍟 以`_temp`为后缀的文件，是 nginx 运行后才产生的文件，临时目录
>
> 🍕 `conf` nginx 所有配置文件的目录(config)
>
> 🥯 `html` nginx 默认站点目录
>
> 🧀 `log` nginx 日志目录
>
> 🍤 `sbin` nginx 可执行文件目录(主程序)

nginx 配置文件主要分为四个部分：

```nginx
main{ #（全局设置）
    http{ #服务器配置
        upstream{} #（负载均衡服务器设置）
        server{ #（主机设置：主要用于指定主机和端口）
            location{} #（URL匹配的设置）
        }
    }
}
```

#### conf

> 主配置文件 `nginx.conf`
>
> ![image-20220917154613175](/img/image-20220917154613175.png)

> `nginx.conf`
>
> nginx.conf 会引用 conf 目录下其它的一些配置文件，后期文件配置较多也可以将配置文件分开管理 🙆‍

#### html

> nginx 默认站点目录(默认只能存放**一个站点**)
>
> 🛹 `50x.html` 错误页面优雅替代显示文件，例如出现 502 错误时会调用此页面
>
> 🛴 `index.html` 默认的首页文件
>
> 🏍️ 文件以 `.htm` 后缀作用为兼容旧版本

#### log

> nginx 日志目录
>
> 🎨 `access.log` 访问日志文件，记录用户访问的信息(**此文件可能比较大，可以限制大小，占满磁盘容量可能造成莫名其妙的问题**)
>
> 🧵 `error.log` 错误日志文件
>
> 🧶 `nginx.pid` pid 文件，nginx 进程启动后，会把所有进程的 ID 号写到此文件(可以查看进程号干掉进程)

#### Nginx 运行原理

> ![](/img/nginx运行原理.png)

> **Nginx 分为两种进程 Master、Worker**，通过 ps 进程查看命令可以看到详情(由多个进程完成用户的请求)
>
> Master：主进程不处理请求业务，负责协调子进程，校验配置文件
>
> Worker：处理用户请求，读取文件响应请求，将收到的请求转发的到后端服务端，worker 进程的个数**可以在 nginx.conf 文件中进行配置**
>
> 主进程与子进程(业务进程)全部启动完成后，接下来等待用户请求，用户请求进来，由子进程(Worker)响应并解析返回
>
> 当用户请求进来，子进程会解析用户请求，然后读取`/conf/nginx.conf`配置，读取用户访问的资源地址，解析读取文件响应回给用户

#### Nginx 配置与应用场景

### 最小配置

######

> 🎮 **worker_processes**
>
> `worker_processes 1;` 默认为 1，表示开启一个业务进程 (Worker)
>
> `/proc/cpuinfo | wc -l`查看 CPU 核数
>
> 启动后 worker 进程的个数（worker 进程个数，一般是 CPU 的核数，或者 CPU 核数的两倍）,一个 CPU 开启多个进程反而效率更低
>
> 据官方说法，一般开一个就够了，多开几个，可以减少机器 io 带来的影响。据实践表明，nginx 的这个参数在一般情况下开 4 个或 8 个就可以了，再往上开的话优化不太大。

###### events

> 🪔 **worker_connections**
>
> `worker_connections 1024;` 单个业务进程(Worker)可接受连接数

###### http

> 📡 **include mime.types**
>
> `include mime.types;` 引入 http mime 类型
>
> `mime.types` 负责响应文件的类型，添加到请求头，告知客户端文件的类型(传输以二进制数据传输，无法知道文件类型)
>
> **返回的数据在客户端将如何处理(下载||展示)，由 mime.types 决定(并不是由后缀决定)** `Content-Type: text/css`
>
> **include 表示将另外的配置文件引入到当前的配置文件中，用于将复杂的配置分开管理**

> 🗿 **default_type application/octet-stream**
>
> `default_type application/octet-stream;` 如果 mime 类型没匹配上，默认使用二进制流的方式传输。

> 🏹 **sendfile on**
>
> `sendfile on;` 使用 linux 的 sendfile(socket, file, len) 高效网络传输，也就是**数据 0 拷贝**。 未开启 sendfile
>
> 开启时：nginx 找到文件后不需要读取拷贝一份资源再转发给系统网络服务接口返回给客户端，直接让系统网络服务接口读取返回给客户端
>
> 关闭时：nginx 找到文件后需要读取拷贝一份资源再转发给系统网络服务接口然后再返回给客户端

> **🔭 keepalive_timeout**
>
> `keepalive_timeout 65;`保持连接超时的时间

###### http - server

> **`server`** 虚拟主机 vhost
>
> **表示一个主机，一个 server 代表一个主机(nginx 可以运行多个主机，主机之间互相不干扰)，通过端口号区分不同的主机**

> **🗜️listen**
>
> `listen 80;`监听的端口号，当前服务器的端口号

> **💉 server_name**
>
> `server_name localhost;`域名 or 主机名
>
> 一个 server 中，可以配置多个【主机域名】`server_name`

> **🛢️ location**
>
> ```js
> location / {
>          root   html;
>          index  index.html index.htm;
>      }
> ```
>
> 匹配域名**`uri`**,如，http://location/index.html
>
> ```nginx
> location [=|~|~*|^~] /uri/ {}
> ```
>
> url:http://location/index.html
>
> uri:`/index.html`
>
> 匹配正确：(进入)
>
> `root 路径;`，location 的 root 目录，路径相对于 nginx 根目录下(相对路径)
>
> `index index.html index.htm;`默认页，匹配的 location 的默认资源

> **⚖️ error_pag** 错误页面
>
> ```
>  error_page   500 502 503 504  /50x.html;
>         location = /50x.html {
>             root   html;
>         }
> ```

###### 详细配置

```
server {
    listen       80;  //监听端口为80，可以自定义其他端口，也可以加上IP地址，如，listen 127.0.0.1:8080;
    server_name  localhost; //定义网站域名，可以写多个，用空格分隔。
    #charset koi8-r; //定义网站的字符集，一般不设置，而是在网页代码中设置。
    #access_log  logs/host.access.log  main; //定义访问日志，可以针对每一个server（即每一个站点）设置它们自己的访问日志。
    ##在server{}里有很多location配置段
    location / {
        root   html;  //定义网站根目录，目录可以是相对路径也可以是绝对路径。
        index  index.html index.htm; //定义站点的默认页。
    }
    #error_page  404              /404.html;  //定义404页面
    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;  //当状态码为500、502、503、504时，则访问50x.html
    location = /50x.html {
        root   html;  //定义50x.html所在路径
    }
    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #定义访问php脚本时，将会执行本location{}部分指令
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;  //proxy_pass后面指定要访问的url链接，用proxy_pass实现代理。
    #}
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;  //定义FastCGI服务器监听端口与地址，支持两种形式，1 IP:Port， 2 unix:/path/to/sockt
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;  //定义SCRIPT_FILENAME变量，后面的路径/scripts为上面的root指定的目录
    #    include        fastcgi_params; //引用prefix/conf/fastcgi_params文件，该文件定义了fastcgi相关的变量
    #}
    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {   //访问的url中，以/.ht开头的，如，www.example.com/.htaccess，会被拒绝，返回403状态码。
    #    deny  all;  //这里的all指的是所有的请求。
    #}
}
# another virtual host using mix of IP-, name-, and port-based configuration
#
#server {
#    listen       8000;  //监听8000端口
#    listen       somename:8080;  //指定ip:port
#    server_name  somename  alias  another.alias;  //指定多个server_name
#    location / {
#        root   html;
#        index  index.html index.htm;
#    }
#}
# HTTPS server
#
#server {
#    listen       443 ssl;  //监听443端口，即ssl
#    server_name  localhost;
### 以下为ssl相关配置
#    ssl_certificate      cert.pem;    //指定pem文件路径
#    ssl_certificate_key  cert.key;  //指定key文件路径
#    ssl_session_cache    shared:SSL:1m;  //指定session cache大小
#    ssl_session_timeout  5m;  //指定session超时时间
#    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;   //指定ssl协议
#    ssl_ciphers  HIGH:!aNULL:!MD5;  //指定ssl算法
#    ssl_prefer_server_ciphers  on;  //优先采取服务器算法
#    location / {
#        root   html;
#        index  index.html index.htm;
#    }
#}
```

## 域名解析

使用 host 文件解析域名(本地域名解析)，在`C:\Windows\System32\drivers\etc`目录下，备份一份 hosts 文件，示例：

```
# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
127.0.0.1       activate.navicat.com
```

`#` 127.0.0.1(ip 地址) localhost(主机名 or 域名)

**配置虚拟机的域名**

**1、修改 hosts 文件的操作权限**

> 右键 hosts 文件属性，常规取消勾选只读，赋予 users 权限,进行修改
>
> 修改完成后需要还原默认权限，防止第三方软件更改此文件
>
> 修改 hosts 后需要刷新 DNS 缓存使之生效,在 cmd 命令行中执行命令：ipconfig/flushdns
>
> 测试 cmd ping 域名

> **本地 host 文件和 nginx 映射的关系**
>
> 首先，客户端通过域名请求服务，如果你在本地的 hosts 文件中配置了该域名与 ip 的映射关系，那么，请求就会直接发送到 hosts 文件中对应的 ip，不会通过 dns 解析（如果本地 hosts 文件中没有配置，就会通过 dns 解析域名）。
> 这时，请求到达了服务端，服务端的 nginx 拦截了该请求，然后在本地**通过域名匹配 server_name，然后，根据 proxy_pass 返回相应的服务给客户端。**

## Nginx 虚拟主机域名配置

**1、在根目录下创建 `www` 目录存放站点资源**

`cd /` `mkdir www` `cd /www/`

2、分别创建站点目录，区分管理站点

`mkdir www` 主站点

`mkdir video` 视频站点

**3、在站点上创建主页面(默认页 index.html)**

`cd www` - `vi index.html` - `编辑数据`

`... ...`

**4、在 nginx 配置 nginx.conf 下进行配置修改**

配置单独的虚拟主机站点(www、video),`在 http 模块下`，配置完成，**reload** 下

`systemctl reload nginx`

`systemctl status nginx`(查看状态是否重启)

```
 # www主机站点 ------ ⚖️如果其它站点没有匹配上，会找到第一个站点 ------
 server {
 		# 80端口
        listen       80;
        #server_name  localhost;
        server_name  www.web-u.top;

        location / {
	 	   root   /www/www;
           index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

```
 # video主机站点
 server {
 		# 88端口
        #listen       88;
        listen       80;
        #server_name  localhost;
        server_name  video.web-u.top;

        location / {
	 	   root   /www/video;
           index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

> **在端口号相同情况下，通过主机域名区分主机站点 server_name**(**`主机名与端口号组合需要全局唯一`**)
>
> 修改 server_name `server_name www.web-u.top` `server_name video.web-u.top`

## server_name 匹配规则

> **`🪕 解决【Nginx 虚拟主机域名配置】中，多个不同资源需要配置多个不同 server 虚拟主机站点的缺点`**
>
> 🛢️ 一个 server 中，可以配置多个【主机域名】`server_name`
>
> 🔭 当最上层的虚拟主机被匹配正确时，**后面的则不再匹配**
>
> ⚖️ 支持**通配符**匹配 ` server_name *.web-u.top;` or `server_name www.web-u.*;`
>
> 🏹 正则匹配(适用于二级域名匹配)，二级域名.web-u.top:数字开头 `~^[0-9]+\.web-u\.com$;`

```
server {
        listen       80;
        #server_name  localhost;
        #一个虚拟主机站点配置多个域名主机名(注意之间的空格)🪔
        server_name  www.web-u.top ng.web-u.top;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
	 		root   /www/www;
            index  index.html index.htm;
        }
    }
```

## 正向代理与反向代理

### 正向

> **💻 当用户访问外网，如谷歌商城，用户是无法直接访问到外网的谷歌的，`此时用户需要借助一个代理服务器(正向)`，将请求代理给外网，外网返回资源给代理服务器，再将资源返回用户，这就是正向代理**
>
> 这个代理服务**代理的是客户端**的，是客户端需要请求的，客户端则需要起一个代理服务器，去请求数据【客户端与代理服务器是一体】，**`客户端自己主动提供一个代理`**
>
> ![image-20220918130055899](/img/image-20220918130055899.png)

### 反向

> **🌏 当用户需要访问后台服务资源时，用户是【无法直接访问】的到，后台服务'无法直接被用户访问'，`此时后台需要借助一个代理服务器(反向)`，帮助用户可以访问到它，反方向起一个代理，【代理对象为后台服务】,代理服务获取用户请求再将请求给到后台(代理服务与后台是可以访问的)，后台再将资源响应给代理，再响应回给用户(代理与用户也是可以访问到的)**
>
> 后台服务器与代理是一体，**`后台服务器主动反向提供一个代理给客户端访问`**
>
> ![image-20220918131838848](/img/image-20220918131838848.png)
>
> 隧道式代理：一进一出都经过 nginx 处理响应
>
> lvs(DR)式代理：由 nginx 进，直接由后台服务响应数据返回客户端

## 反向代理配置

1、端口转发

> `proxy_pass`
>
> 两种配置格式：
>
> **1、一台具体的主机 or 网址**
>
> 配置为网址时，`协议格式必须书写完整`，`proxy_pass http://juejin.cn/;`
>
> **不支持反向代理转发到 `https` 的网站服务**,需要与证书配置对应正确
>
> 协议书写方式不正确：`http://`缺少 www，则为一个重定向请求(301、302)
>
> `http://www`，则为一个正确的请求转发(200)
>
> 真正转发成功时，可以看到浏览器的地址里面为请求给 nginx 的地址`web-u.top`，而不是转发后的地址`juejin.cn`转发后的每个请求都会经过 nginx，反之为重定向的话，nginx 不会再捕获到重定向后的请求信息
>
> **`root 与 proxy_pass只能二选一`**
>
> ```
> location / {
> 	#proxy_pass   http://juejin.cn/;不支持 后面也会跳转到https上
> 	proxy_pass   http://www.atguigu.com;
> 	#root   html;
>           index  index.html index.htm;
>     }
> ```
>
> **2、一组服务器`**

> **在 nginx 中配置 proxy_pass 代理转发时，如果在 proxy_pass 后面的 url 加/，表示绝对根路径；`如果没有/，表示相对路径，把匹配的路径部分也给代理走`**
>
> ```
> 假设下面四种情况分别用 http://192.168.1.1/proxy/test.html 进行访问。
>
> 第一种：
> location /proxy/ {
> proxy_pass http://127.0.0.1/;
> }
> 代理到URL：http://127.0.0.1/test.html
>
> 第二种（相对于第一种，最后少一个 / ）
> location /proxy/ {
> proxy_pass http://127.0.0.1;
> }
> 代理到URL：http://127.0.0.1/proxy/test.html
>
> 第三种：
> location /proxy/ {
> proxy_pass http://127.0.0.1/aaa/;
> }
> 代理到URL：http://127.0.0.1/aaa/test.html
>
> 第四种（相对于第三种，最后少一个 / ）
> location /proxy/ {
> proxy_pass http://127.0.0.1/aaa;
> }
> 代理到URL：http://127.0.0.1/aaatest.html
> ```

## 负载均衡

> 🌏 配置两个虚拟主机 `192.168.254.8`nginx_1 `192.168.254.18`nginx_2
>
> 负载均衡：nginx 虚拟服务器`192.168.254.88`(负载均衡器)将上面两台配置的虚拟主机反代理，之后**`进行负载均衡，一会访问到 nginx_1,一会访问到 nginx_2`**

**1、配置代理转发(转发为一组集群服务器)**

集群：一群每一个功能一样相似的服务器

```
 location / {
 	# 表示将所有请求转发到 httpds 服务器集群组中配置的某一台服务器上💻💻💻
	proxy_pass   http://httpds;
	#root   html;
    index  index.html index.htm;
  }
```

**2、配置 upstream 模块(与 server 同级)**

`upstream 代理转发集群别名(httpds)`

**3、配置服务器主机集群**

**`此方法为轮询策列(默认) 🧫`**，对于每个服务器配置均等情况下比较好的策列(配置不一，配置低与配置高获得相同的处理次数)

端口可选，不配置默认使用 80 端口

```c
upstream httpds {
	# nginx_1
	server 192.168.254.8:80;
	# nginx_2
	server 192.168.254.18:80;
   }
```

### 负载均衡策略规则

**权重(越高分配越多)**

通过上面的配置，Nginx 默认将请求依次分配给 100，101，102 来处理，可以通过修改下面这些参数来改变默认的分配策略：
weight 默认为 1，将请求平均分配给每台 server

```c
upstream tomcats {
 server 192.168.0.100:8080 weight=2;  # 2/6次
 server 192.168.0.101:8080 weight=3;  # 3/6次
 server 192.168.0.102:8080 weight=1;  # 1/6次
}
# 更多配置  max_fails=3 fail_timeout=15
```

**backup 备份机**

所有服务器挂了之后才会生效

`server 192.168.0.100:8080 backup;`

---

**不常用的：**

**1、down 标识某一台 server 不可用，不参与负载均衡(休息)**

`server 192.168.0.100:8080 down;`

生产环境不常用：

**2、ip_hash**

难以保证 ip 地址相同不变(比如移动端手机)

###### **登录验证场景**

> 在用户请求后台服务登录时，轮询服务器集群，登录验证成功后信息存在处理当前请求的那台服务器，下次访问其它的集群服务器怎么办，怎么保持与用户的会话？
>
> **`1、用 token 存储于客户端可以解决(JWT)`**🌏🌏🌏🌏🌏🌏
>
> **`2、ip_hash`**，**根据客户端的地址，让其保持与同一台服务器会话(成功验证后的服务器)**
>
> 3、无状态的 会话 session(SpringSession)

> **token 存储于客户端解决原理**🌏🌏🌏🌏🌏🌏
>
> 用户第一次请求到 nginx 服务器，nginx 服务器会找到一台**专门用于权限校验的服务器**，返回 token 客户端储存(token 为两方加密的一种身份验证令牌)，客户端再次请求时带上 token ，服务器解开验证(token 被篡改之后 token 是解不开的)

**3、least_conn 最少连接数**

(不合理)

```
# 定义转发分配规则
upstream httpds {
	least_conn; # 把请求分派给连接数最少的服务器
	server srv1.com;
	server srv2.com:8088;
	server 192.168.0.100:8088;
}
```

**4、fair 第三方负载策略**

根据服务器的响应时间来分配请求，响应时间短的优先分配，即负载压力小的优先会分配(不合理：容易造成流量倾斜)

**5、url_hash 第三方**

定向流量转发(适用于访问固定资源，不太同一服务器的资源)

## 其它

### net-tools

安装 net-tools 来查看端口使用情况：`yum -y install net-tools`

net-tools 工具箱包括[arpopen in new window](https://so.csdn.net/so/search?q=arp&spm=1001.2101.3001.7020), hostname, ifconfig, netstat, rarp, route, plipconfig, slattach, mii-tool and iptunnel and ipmaddr 等命令。

查看端口使用

```bash
netstat -nplt
```
