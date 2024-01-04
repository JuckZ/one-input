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
- [!] 键盘双拼映射图 可以参考obs的[input-overlay](https://github.com/univrsal/input-overlay)
- [ ] linux尝试配置 iOS 配置 对比fcitx和ibus
- [ ] 配置个人的小鹤音形和小鹤双拼
- [ ] 配置个人词库（AI、程序员、前后端） 个人密码管理（快捷输入） 跨端输入
  - [ ] AI补全支持（自托管）
  - [ ] 英文语法纠错
  - [ ] 词库验证
  - [ ] 搜狗词库下载
  - [ ] 词库更新脚本
- [ ] 清理冗余文件、对当前文件以及其功能进行注释

## [小鹤音形配置](https://itx.ink/2018/11/21/SHARE_MY_RIME/)


https://suo.im/xh
https://github.com/amorphobia/openfly

下载官方[macOS版小鹤音形](http://ys-n.ysepan.com/116124318/319108762/j7427663656LGLTgUHjF81/%E5%B0%8F%E9%B9%A4%E9%9F%B3%E5%BD%A2%E2%80%9C%E9%BC%A0%E9%A1%BB%E7%AE%A1%E2%80%9Dfor%20macOS.zip?lx=xz)，解压后放到Rime的用户文件夹下，如果目录变更，则直接访问其[永硕网盘](http://flypy.ysepan.com/)下载。



## 如何更新词库

下载并更新即可
https://github.com/iDvel/rime-ice/raw/main/opencc/emoji.txt
https://github.com/iDvel/rime-ice/raw/main/cn_dicts/8105.dict.yaml


## 其他可参考配置

https://github.com/ssnhd/rime

https://github.com/LufsX/rime

https://github.com/qujihan/Rime

https://github.com/brglng/rime-xhup