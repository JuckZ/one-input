# Rime configuration

## Installation

## Config

windows: `C:\Users\%username%\AppData\Roaming\Rime`
mac: `~/Library/Rime`

需要关注如下文件：
default.custom.yaml
weasel.custom.yaml

如下文件可能是安装生成的

## 默认文件

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----          2024/1/4      9:02                build
-a----          2024/1/4      9:01              0 default.custom.yaml
-a----          2024/1/4      9:02            214 installation.yaml
-a----          2024/1/4      9:04            140 user.yaml
-a----          2024/1/4      9:01              0 weasel.custom.yaml

## 同步

同步需要注意，不要同步install.yaml和user.yaml，这两个文件是本地的配置文件，不同的电脑可能不一样，同步会导致配置文件冲突。
也不需要同步build文件夹，这个文件夹是编译生成的，不同的电脑可能不一样，同步会导致配置文件冲突。配置小鹤音形的时候，需要同步编译好的码表.bin文件到build目录

db是否需要同步？是否会有冲突？
- [ ] https://github.com/rime/plum 自动部署和更新

## 再次定制可以参考

https://github.com/ssnhd/rime/compare/master...Hug125:rime:master
https://github.com/ssnhd/rime/compare/master...KrabsWong:rime:master


## Vim支持

https://github.com/rime/weasel/pull/1047

## TODO

- [x] [如何在Windows/Linux下的Rime使用Vim模式 - 知乎](https://zhuanlan.zhihu.com/p/654489636)
- [!] 键盘双拼映射图
- [ ] linux尝试配置 iOS 配置 对比fcitx和ibus
- [ ] 配置个人词库（AI、程序员、前后端） 个人密码读取 跨端输入 AI支持，英文纠错

## [小鹤音形配置](https://itx.ink/2018/11/21/SHARE_MY_RIME/)

请到[小鹤双拼官方论坛](http://www.flypy.com/bbs/forum.php)的“小鹤音形 · 挂接版块”找到“[rime 平台解决方案](http://www.flypy.com/bbs/forum.php?mod=viewthread&tid=184&extra=page%3D1)”在该贴中的链接下载rime的配置文件。

[其他小鹤码表](https://github.com/brglng/rime-xhup)

## 其他可参考配置

https://github.com/ssnhd/rime

https://github.com/LufsX/rime

https://github.com/qujihan/Rime