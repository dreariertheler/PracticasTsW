class Router {
    constructor() {
      this._pageControllers = [];
      this.init();
    }
  
    init() {
      window.onpopstate = function () {
        router.routerControllers(document.location.pathname);
      };
    }

    addPageController(pageController) {
      this._pageControllers.push(pageController);
    }

    route(url) {
      window.event.preventDefault();
      url = url
        ? url
        : window.event.target.href
        ? window.event.target.href
        : document.location.pathname;
      window.history.pushState(window.history.state, "", url);
      console.log(window.event.target);
      this.routerControllers(url);
    }
    
    routerControllers(url) {
      let i = 0;
      let result;
      if (url == '/'){url = "/tareasApp/listar"};
      while (i < this._pageControllers.length) {
        if ((result = this._pageControllers[i].router(url))) {
          i = this._pageControllers.length;
        } else {
          i++;
        }
      }
    }

    //route(url){    
      //  let queryString = '?'+url.split('?')[1];
       // let params = new URLSearchParams(queryString);
        //console.log('ID', params.get('id'));
       // super.route(url);
    //}
  }
  

