import HomePage from "@page/HomePage";
import ListPage from "@page/ListPage";
import DetailPage from "@page/DetailPage";
import SearchPage from "@page/SearchPage";

/**
 * 定义PageName对应的Page，舍去在Page子类中赋值pageName步骤
 */
export var PageConfig = {
    "HomePage": HomePage,
    "ListPage": ListPage,
    "DetailPage": DetailPage,
    "SearchPage": SearchPage
}

/**
 * 默认的page
 * 当未获取到第一个页面时，会使用该页面
 * @type {string}
 */
export var LaunchPage = "HomePage";
