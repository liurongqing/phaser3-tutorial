# hi

Powered by https://github.com/angular/material.angular.io



## 配置修改

1. angular.json 文件 

```shell
"outputPath": "docs", # 将 dist 改成 docs
"src/404.html" # 在 "src/sitemap.xml" 下添加 

assets
```

2. package.json 文件

```shell
# 新增 --base-href /phaser3-tutorial/ 参数
# 或者直接修改html:  <base href="/review/">
"prod-build": "ng build --prod --base-href=/phaser3-tutorial/"
```


3. 404.html 内容

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title></title>
  </head>
  <body>
    <script>
      window.location.replace(
        '/phaser3-tutorial?redirect=' +
          encodeURIComponent(window.location.pathname + window.location.hash)
      )
    </script>
  </body>
</html>
```

4. 修改 material-docs-app.ts

```typescript
import { Router} from '@angular/router'; //导入router服务

constructor(router: Router){
  this.redirect(router)
}
redirect(router: Router){
    const redirect = new URLSearchParams(location.search).get('redirect')
    if (redirect) {
      router.navigateByUrl(decodeURIComponent(redirect).replace('/phaser3-tutorial/', ''))
    }
  }
```


