# hi

Powered by https://github.com/angular/material.angular.io



## 配置修改

1. angular.json 文件 

```shell
"outputPath": "docs", # 将 dist 改成 docs
```

2. package.json 文件

```shell
# 新增 --base-href /phaser3-tutorial/ 参数
# 或者直接修改html:  <base href="/review/">
"prod-build": "ng build --prod --base-href=/phaser3-tutorial/"
```
