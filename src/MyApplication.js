import Application from "../core/frame/app/Application";
import AliWebPlayer from "@src/util/AliWebPlayer";

export default class MyApplication extends Application {
    onLaunch(urlParam) {
        console.log("onLaunch，地址栏参数：", urlParam);
        var firstPage = null;
        var param = urlParam;
        switch (urlParam.pageKey) {
            case "home":
                firstPage = "HomePage";
                break;
            case "detail":
                firstPage = "DetailPage";
                break;
            case "list":
                firstPage = "ListPage";
                break;
            case "search":
                firstPage = "SearchPage";
                break;
        }
        return {firstPage, param};
    }

    onCreate(page, param) {
        console.log("onCreate，param：", param,"page",page);
        // console.log("MyApplication onCreate");
    }

    onStop() {
        // console.log("MyApplication onStop")
    }

    onDestroy() {
        // console.log("MyApplication onDestroy")
        // 如果是app+epg，在这里（或exitUrl()）调用退出app的方法
        if(this.player){
            this.player.destroy();
        }

    }

    exitUrl() {
        var url = "";
        if (false) {
            url = "http://www.baidu.com";
        } else {
            url = "";
        }
        return url;
    }

    getPlayerInstance() {
        // var player = {};
        // try{
        //     player = new IptvPlayer(this.keyboard);
        // }catch (e){
        //     player = new AliWebPlayer();
        // }
        return new AliWebPlayer();
    }
}
