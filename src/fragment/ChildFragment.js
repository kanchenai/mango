import Fragment from "@core/frame/view/group/Fragment";

export default class ChildFragment extends Fragment{

    onCreate() {
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.setStyle("background","blue");

    }

    setView() {

    }

    initUtils() {

    }
}