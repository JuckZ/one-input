# Rime configuration

## Installation

## Config

windows: `C:\Users\%username%\AppData\Roaming\Rime`
mac: `~/Library/Rime`

需要关注如下文件：
default.custom.yaml
weasel.custom.yaml

如下文件可能是安装生成的

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----          2024/1/4      9:02                build
-a----          2024/1/4      9:01              0 default.custom.yaml
-a----          2024/1/4      9:02            214 installation.yaml
-a----          2024/1/4      9:04            140 user.yaml
-a----          2024/1/4      9:01              0 weasel.custom.yaml

### Vim支持

> [feat: vim_mode in app_options by fxliang · Pull Request #1047 · rime/weasel](https://github.com/rime/weasel/pull/1047) 已经解决了这个问题，只需要在配置文件中配置对应app的vim_mode选项值为true即可
> 旧版可以参考 [如何在Windows/Linux下的Rime使用Vim模式 - 知乎](https://zhuanlan.zhihu.com/p/654489636)

## 同步

> 同步需要注意，不要同步install.yaml和user.yaml，这两个文件是本地的配置文件，不同的电脑可能不一样，同步会导致配置文件冲突。
> build文件夹也不需要同步，这个文件夹是编译生成的，如果需要加入闭源的编译后的bin，则需要同步，如配置小鹤音形时。

- [ ] db是否需要同步？是否会有冲突？
- [ ] https://github.com/rime/plum 自动部署和更新

### 参考

- [iCloud同步教程](https://github.com/wzxmer/rime-txjx/blob/main/iCloud%E5%90%8C%E6%AD%A5%E6%95%99%E7%A8%8B.md)

## TODO

- [-] 键盘双拼映射图，可以xx参考obs的[input-overlay](https://github.com/univrsal/input-overlay)或者参考打字练习部分所涉及的软件
- [-] 配置个人的小鹤音形和小鹤双拼
- [ ] linux尝试配置 iOS 配置 对比fcitx和ibus
- [ ] 密码管理工具
- [ ] 跨端输入，可以参考微信输入法
- [ ] AI（自托管）
  - [ ] 英文语法纠错
  - [ ] 自动补全支持
- [ ] 清理冗余文件、对当前文件以及其功能进行注释
  - [ ] 整理文件夹结构 区分系统 common等
  - [ ] 取消rime.lua
- [ ] 研究bin文件的生成
- [ ] [方案介绍：字海两分](https://xkinput.github.io/xxxk-help/#/schema-zhlf)结合
- [!] 研究星空键道6的安装流程是如何的，以及 weasel-expansion 是什么，体验原版的键道6，然后再自定义和升级星猫键道


## 键道6配置生成

```sh
git clone https://github.com/xkinput/Rime_JD
# 复制 rime 文件夹
# 复制 Tools\SystemTools\rime\Windows "Windows" 替换成目标系统的路径
# 复制 Tools\SystemTools\WindowsTools\用户数据 "WindowsTools" 替换成目标系统的路径，如果文件夹中是脚本，则阅读和执行
# 删除default.yam（暂时不删除）
```

## 方案

### 星猫键道

> 当前方案

### 星空键道6

### one配置

整合了如下内容

https://github.com/ssnhd/rime

https://github.com/LufsX/rime

https://github.com/qujihan/Rime

### 小鹤音形

> 由于后期不再开源因此放弃该方案

- [小鹤音形配置](https://itx.ink/2018/11/21/SHARE_MY_RIME/)
- [入门 - 小鹤音形](https://suo.im/xh)
- [词库开源的小鹤音形 Rime 配方](https://github.com/amorphobia/openfly)

#### 配置参考

https://github.com/brglng/rime-xhup

#### 配置方法

下载官方[macOS版小鹤音形](http://ys-n.ysepan.com/116124318/319108762/j7427663656LGLTgUHjF81/%E5%B0%8F%E9%B9%A4%E9%9F%B3%E5%BD%A2%E2%80%9C%E9%BC%A0%E9%A1%BB%E7%AE%A1%E2%80%9Dfor%20macOS.zip?lx=xz)，解压后放到Rime的用户文件夹下，如果目录变更，则直接访问其[永硕网盘](http://flypy.ysepan.com/)下载。

## 打字练习

- [键魂](https://github.com/isPoto/KeySoul)
- [我爱打字网](https://www.52dazi.cn/home)
- [双拼练习 @ BlueSky](https://api.ihint.me/shuang/) 或者 手机<需复制到微信>：#小程序://双拼练习/S4NNm8kAAuu0L4C
- [😼打字规则 <新手项目>](https://hu0w1jn4xq.feishu.cn/docx/ZgQ8deGPlozhWCxOyeucBvHJnPe#doxcnBpagQmyH6jooxcqEGZgW8c)

## 词库管理

- [ ] 找到所有需要使用和维护的词库源地址
- [ ] 配置个人词库（AI、程序员、前后端）
  - [ ] 词库验证
  - [ ] 搜狗词库下载
  - [ ] 词库更新脚本
- [ ] 学习词库转码
  - [转码词库小工具](https://hu0w1jn4xq.feishu.cn/docx/ZgQ8deGPlozhWCxOyeucBvHJnPe#SqSideqego8YOKxozpZctNrmnrh)

下载并更新即可
https://github.com/iDvel/rime-ice/raw/main/opencc/emoji.txt
https://github.com/iDvel/rime-ice/raw/main/cn_dicts/8105.dict.yaml

两分词库，下载并解压http://cheonhyeong.com/File/ZHLF_rime_5.0.7z

## 更多脚本扩展

https://github.com/tswwe/my-rime-lua

## 学习资料

- [x] [星空输入法——键道6、一笔、两笔](https://xkinput.github.io/)
- [x] [研习键道 - Rime键道输入法](https://pingshunhuangalex.gitbook.io/rime-xkjd/learn-xkjd)
- [x] [小小星空](https://xkinput.github.io/xxxk-help/#/schema-xkjd6)
- [x] [简述全拼转小鹤转键道- 兼谈键道输入法的入门及优化包](https://zhuanlan.zhihu.com/p/607785939)
- [x] [键道 630](https://hu0w1jn4xq.feishu.cn/docx/doxcnjFlDmWbCPvBMkVQHJHRhOh)
- [x] [‌⁢​‍​​🐈「 星空键道 - 星猫版 」📋笔记 - 飞书云文档](https://hu0w1jn4xq.feishu.cn/docx/ZgQ8deGPlozhWCxOyeucBvHJnPe)
- [ ] [宇浩输入法](https://zhuyuhao.com/yuhao/)
- [ ] [86版极点五笔](https://github.com/KyleBing/rime-wubi86-jidian)
- [ ] [🍀四叶草输入法](https://www.fkxxyz.com/d/cloverpinyin/)
- [-] [小鹤音形编码查询](http://react.xhup.club/search)
- [x] [顶功与上屏方式 - 知乎](https://zhuanlan.zhihu.com/p/291029476)
- [x] [https://zhuanlan.zhihu.com/p/292605889](https://zhuanlan.zhihu.com/p/292605889)
- [ ] [其他资源](https://xkinput.github.io/xxxk-help/#/res)

- https://github.com/LibreService/my_rime
- https://github.com/rime/rppi
- https://github.com/rime/plum