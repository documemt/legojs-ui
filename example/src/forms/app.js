import IndexView from './view/index';
import homeView from './view/home';
import formView from './view/form';

class Router {
    constructor() {
        return {
            '/forms': [this.index, this.tabs],
            '/forms/:tabs': [this.index, this.tabs]
        };
    }
    index(){
        this.viewObj = Lego.create(IndexView, {
            el: Lego.config.pageEl,
            scrollbar: {},
            currentTab: 0
        });
    }
    tabs(tabs = 0){
        this.viewObj.options.currentTab = tabs || 0;
        const appArray = [homeView, formView];
        Lego.create(appArray[tabs], { el: '#pageContent' });
    }
}
Lego.router(new Router());
