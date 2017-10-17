# cssrem

一个px值转rem 的VSCode插件， 可以自动补全  12px 为 px2rem(12); 或者 .6rem; 的形式

![效果图](screenshots/cssrem.gif)

# Install

```bash
ext install cssrem
```

# How To Use

+ Auto snippet
+ Shortcuts: `ctrl+p ctrl+r`
+ CLI: Press `F1`, enter `cssrem`

# Support Language

html vue css less scss sass stylus

# Configuration

+ `cssrem.rootFontSize` root font-size (unit: px), default: 16
+ `cssrem.fixedDigits` px转rem小数点最大长度，默认：6。
+ `cssrem.autoRemovePrefixZero` 自动移除0开头的前缀，默认：true
+ `cssrem.sassFuncFirst` 将sass函数的选项提前到 rem转换的前面， 默认: true

Restart vscode **[!Important]**