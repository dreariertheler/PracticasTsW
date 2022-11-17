let model,
  agregarTareaPageView,
  listarTareaPageView,
  verTareaPageView,
  agregarTareaPageController,
  listarTareaPageController,
  verTareaPageController;

function init() {
  model = new TareasApp();
  agregarTareaPageView = new AgregarTareaPageView(model);
  listarTareaPageView = new ListarTareaPageView(model);
  verTareaPageView = new VerTareaPageView(model);

  agregarTareaPageController = new AgregarTareaPageController(/\/tareasApp\/agregar/ig, model, agregarTareaPageView);     
  listarTareaPageController = new ListarTareaPageController(/\/tareasApp\/listar/ig, model, listarTareaPageView);
  verTareaPageController = new VerTareaPageController(/\/tareasApp\/ver*/ig, model, verTareaPageView);


  router = new Router();
  router.addPageController(agregarTareaPageController);
  router.addPageController(listarTareaPageController);
  router.addPageController(verTareaPageController);
  router.route();
}
