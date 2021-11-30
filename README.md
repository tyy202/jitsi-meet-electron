# jitsi-meet-electron
基于jitsi-meet的服务器，官方的PC版本不支持jwt设置，修改了一下，为了支持jwt
配置中的，头像URL是在视频使用中的头像；应用ID(AppId)和Token密钥（AppSecert）为Jitsi服务器中配置的参数；视频服务器域表示安装Jitsi服务器时候使用的主机名
项目源地址是：https://github.com/jitsi/jitsi-meet-electron
项目也是看了一个半明白不明白，添加了设置，可以支持带JWT验证的服务器
JWT使用的是jsonwebtoken包，需要npm install jsonwebtoken
