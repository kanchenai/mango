import Page from "@core/frame/page/Page";

export default class SearchPage extends Page{

    constructor() {
        super();
        this.pageName = "SearchPage";
    }

    onCreate(param){
        console.log(this.pageName,"param",param);
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView(){}
    setView(){}
    initUtils(){}

}