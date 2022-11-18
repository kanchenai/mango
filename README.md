# view-app
这是一个在原生js基础上开发的针对iptv行业的交互框架

环境
* node环境
* 使用webpack打包

初始化工程
```
    npm install
```

运行
```
    npm run server
    或
    npm run dev
```

打包
```
    npm run start
    或
    npm run build
```

参考了android的Application和activity实现整个页面的交互及生命周期


### 打包

注释webpack.config.js中的"devtool: 'source-map'"

解注释devtool: false
```javascript
    devtool: 'source-map',//打包时，注释掉这行
    // devtool: false,//打包时，解注释这行
```

将打包模式为生产模式
```javascript
    mode: "development"//运行环境：开发环境
    // mode: "production",//运行环境：生产环境
```

#### 图片注意点

* 在html直接设置的图片要放置在images文件夹，直接使用
```html
    <img src="../images/bg.jpg" alt="">
```

* 在js中使用，动态设置的图片，要放置在images-js文件夹中，用import导入再使用
```javascript
    import pic_001 from "@images-js/pic_001.png"

    var image = holder.findViewById("pic");
    image.src = pic_001;
```

#### 文字跑马灯注意点

* 会自动加上overflow:hidden;line-height:{height}
* white-space: nowrap;判定为横向跑马灯
* 其他情况为纵向跑马灯；多个单词可能为多行，或者使用<br>强制换行，当多行时可执行纵向跑马灯

#### 全局滚动开关

State.ScrollAnimation值：
true:打开
false:关闭

* 在main.js
```javascript
  window.onload = function () {
    State.ScrollAnimation = true;//控制滚动动画开关
    //需要在css加载完之后才能启动app
    window.application = new MyApplication("app");
    window.application.launch();
  }
```

#### 开发者须知

* 1.该框架的运行环境 node，使用webpack打包
* 2.当前版在适配中需要调整编译的es版本，在必要时需要舍弃某些写法，使用其他写法，故版本中的框架核心代码都是源码
* 3.开发者有任何疑问，可以留言
* 4.如果有建议，也可留言，
  * 邮箱：269570492@qq.com
  * csdn地址：https://blog.csdn.net/zz609816880
* 5.目前作者只有一人，在IPTV行业有者5年开发经验，熟悉各种盒子的适配
* 6.该框架之前有一个前置版本，但在原公司深度使用，不便公开，但适配经验在本框架中适应，并在2年时间里已落地50个左右的项目，分别在全国不同地区、不同运营商落地

