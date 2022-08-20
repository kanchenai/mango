import Page from "@core/frame/page/Page";
import html from "@html/list.html"

export default class ListPage extends Page{

    constructor() {
        super();
        this.pageName = "ListPage";
    }

    onCreate(param){
        this.html = html;
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView(){}
    setView(){}
    initUtils(){}

}