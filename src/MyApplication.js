import Application from "../core/frame/app/Application";
import HomePage from "./page/HomePage";
import IptvPlayer from "@core/frame/player/IptvPlayer";
import DetailPage from "@page/DetailPage";
import ListPage from "@page/ListPage";
import SearchPage from "@page/SearchPage";
import AliWebPlayer from "@src/util/AliWebPlayer";

require('./global_style.css')

export default class MyApplication extends Application {
    constructor(id) {
        super(id);
        this.pageManager.pageTypeCallback = function (pageName) {
            var page = null;
            switch (pageName) {
                case "HomePage":
                    page = new HomePage();
                    break;
                case "DetailPage":
                    page = new DetailPage();
                    break;
                case "ListPage":
                    page = new ListPage();
                    break;
                case "SearchPage":
                    page = new SearchPage();
                    break;
            }
            return page;
        }
    }

    onLaunch(urlParam) {
        console.log("onLaunch，地址栏参数：", urlParam);
        var firstPage = null;
        var param = urlParam;
        switch (urlParam.pageKey) {
            case "home":
                firstPage = new HomePage();
                break;
            case "detail":
                firstPage = new DetailPage();
                break;
            case "list":
                firstPage = new ListPage();
                break;
            case "search":
                firstPage = new SearchPage();
                break;
            default:
                firstPage = new HomePage();
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
