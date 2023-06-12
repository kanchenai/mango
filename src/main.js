import '@css'
import "@images-js"
require('./global_style.css')

import MyApplication from "./MyApplication";
import Application from "@core/frame/app/Application";
import {KeyboardViewBuilder} from "@src/custom-view/keyborad/KeyboardView";
import {CountdownViewBuilder} from "@src/custom-view/countdown/CountdownView";
import {PosterWhiteViewBuilder} from "@src/custom-view/poster-white/PosterWhiteView";
import {ButtonBuilder} from "@src/custom-view/button/Button";
import {PosterViewBuilder} from "@src/custom-view/poster/PosterView";
import {PosterShadowViewBuilder} from "@src/custom-view/poster-shadow/PosterShadowView";
import {CarouselViewBuilder} from "@src/custom-view/carousel/CarouselView";
import {DrawerViewBuilder} from "@src/custom-view/drawer/DrawerView";
import {ProgressViewBuilder} from "@src/custom-view/progress/ProgressView";

var start = new Date().getTime();
window.onload = function () {
    //添加扩展控件的创建工具
    Application.addCustomViewBuilder([
        KeyboardViewBuilder, CountdownViewBuilder, PosterWhiteViewBuilder,
        ButtonBuilder, PosterViewBuilder, PosterShadowViewBuilder,
        CarouselViewBuilder, DrawerViewBuilder, ProgressViewBuilder
    ]);

    //需要在css加载完之后才能启动app
    window.application = new MyApplication("app");
    window.application.launch();

    console.log(new Date().getTime() - start)
}

