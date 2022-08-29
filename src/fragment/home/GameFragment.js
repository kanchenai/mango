import Fragment from "@core/frame/view/group/Fragment";
import html from "@html/fragment/home/drama_fragment.html"

export default class GameFragment extends Fragment{

    onCreate() {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.setStyle("background","#0c968e");

    }

    setView() {

    }

    initUtils() {

    }
}