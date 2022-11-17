class PageController extends Controller{
    constructor(regex,model,view) {
        super(model,view);
        this._regex= regex;
    }
    get regex(){return this._regex}
    
    router(url){
        let result;
        if(result = !!url.match(this.regex)) //Doble negacion para asegurarme de que devuelve un null
        {
            this.view.refresh();
            return result;
        }
    }
}