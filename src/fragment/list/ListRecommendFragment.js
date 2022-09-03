import Fragment from "@core/frame/view/group/Fragment";
import html from "@html/fragment/list/list_recommend_fragment.html";
import {Adapter, HORIZONTAL, VERTICAL} from "@core/frame/view/group/RecycleView";
import carousel_0 from "@images-js/list/list_recommend_fragment/carousel_0.png";
import carousel_1 from "@images-js/list/list_recommend_fragment/carousel_1.png";
import carousel_2 from "@images-js/list/list_recommend_fragment/carousel_2.png";
import carousel_3 from "@images-js/list/list_recommend_fragment/carousel_3.png";
import carousel_4 from "@images-js/list/list_recommend_fragment/carousel_4.png";
import carousel_5 from "@images-js/list/list_recommend_fragment/carousel_5.png";
import VMargin from "@core/frame/util/VMargin";
import vip_hot_0 from "@images-js/list/list_recommend_fragment/vip_hot_0.png";
import vip_hot_1 from "@images-js/list/list_recommend_fragment/vip_hot_1.png";
import vip_hot_2 from "@images-js/list/list_recommend_fragment/vip_hot_2.png";
import vip_hot_3 from "@images-js/list/list_recommend_fragment/vip_hot_3.png";
import vip_hot_4 from "@images-js/list/list_recommend_fragment/vip_hot_4.png";
import vip_hot_5 from "@images-js/list/list_recommend_fragment/vip_hot_5.png";
import vip_hot_6 from "@images-js/list/list_recommend_fragment/vip_hot_6.png";
import vip_hot_7 from "@images-js/list/list_recommend_fragment/vip_hot_7.png";
import {ScrollCenter} from "@core/frame/view/base/ScrollView";
import DetailPage from "@page/DetailPage";

export default class ListRecommendFragment extends Fragment{
    onCreate() {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.carousel = this.findViewById("carousel");
        this.carousel.focusable = false;//在焦点判断时跳过
        this.carousel.orientation = HORIZONTAL;
        this.carousel.adapter = new CarouselAdapter();
        this.carousel.data = bigPictureList;

        this.point_list = this.findViewById("point_list");
        this.point_list.orientation = HORIZONTAL;
        this.point_list.select = true;
        this.point_list.onFocusChangeListener = onFocusChangeListenerPoint;
        this.point_list.margin = new VMargin(0, 0, 3, 3);
        this.point_list.adapter = new PointAdapter();
        this.point_list.data = bigPictureList;

        this.hot = this.findViewById("hot");
        this.hot.orientation = VERTICAL;
        this.hot.col = 4;
        this.hot.margin.right = 5;
        this.hot.adapter = new HotAdapter();
        this.hot.data = hot;

        this.back_top = this.findViewById("back_top");
    }

    setView() {

    }

    initUtils() {

    }

    onClickListener(view) {
        console.log(view);
        if (view.id == "back_top") {
            this.point_list.requestFocus();
        }else{
            let detailPage = new DetailPage();
            this.startPage(detailPage);
        }
    }
}

var bigPictureList = [
    carousel_0, carousel_1, carousel_2,
    carousel_3, carousel_4, carousel_5
];

var hot = [
    {
        pic: vip_hot_0,
        name: "花儿与少年4·会员彩蛋",
        info: "杨幂演绎傲娇孔雀狂怼韩东君"
    },
    {
        pic: vip_hot_1,
        name: "《消失的孩子》·定档0829",
        info: "魏晨颠覆出演 身藏惊天秘密"
    },
    {
        pic: vip_hot_2,
        name: "想唱·加更版",
        info: "陆虎摊辈子蝎子摆尾逗了张远"
    },
    {
        pic: vip_hot_3,
        name: "美好年华研习社·Plus版",
        info: "林墨马启越上演\"无间道\""
    },
    {
        pic: vip_hot_4,
        name: "中餐厅6·独家直拍",
        info: "陈立农开业试菜全记录！"
    },
    {
        pic: vip_hot_5,
        name: "牧野家族·Plus版",
        info: "容祖儿用玫瑰花装扮小兔窝"
    },
    {
        pic: vip_hot_6,
        name: "中餐厅6·Plus版",
        info: "迷惑行为！尹正对话车载助手"
    },
    {
        pic: vip_hot_7,
        name: "披荆斩棘2·加更",
        info: "滚烫宿舍生活开启"
    }
];

class CarouselAdapter extends Adapter {
    bindHolder(holder, data) {
        var big_picture = holder.findEleById("big_picture");//不做绝对的懒加载，但是在recycleView的回收机制下，也类似懒加载
        // var big_picture = holder.findViewById("big_picture");//绝对的懒加载,图片加载会延后
        big_picture.src = data;
    }
}

class PointAdapter extends Adapter {
    bindHolder(holder, data) {
    }
}

class HotAdapter extends Adapter {
    bindHolder(holder, data) {
        var pic = holder.findViewById("pic");//不做绝对的懒加载，但是在recycleView的回收机制下，也类似懒加载
        // var big_picture = holder.findViewById("big_picture");//绝对的懒加载,图片加载会延后
        var txt = holder.findEleById("txt");//TODO 使用TextView文字不显示
        var info = holder.findEleById("info");
        pic.src = data.pic;
        txt.innerText = data.name;
        info.innerText = data.info;

    }
}

var onFocusChangeListenerPoint = function (view, hasFocus) {
    if (hasFocus) {
        var index = view.fatherView.holder.index;
        this.carousel.scrollByIndex(index);


        var that = this;
        setTimeout(function () {
            if (that.scrollTop != 0) {
                that.scrollVerticalTo(0);
            }
        }, 0)
    }
}