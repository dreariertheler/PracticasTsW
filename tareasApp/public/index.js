let model,
  agregarTareaPageView,
  listarTareaPageView,
  verTareaPageView,
  modificarTareaPageView,
  borrarTareaPageView,
  agregarTareaPageController,
  listarTareaPageController,
  verTareaPageController,
  modificarTareaPageController,
  borrarTareaPageController;

function init() {
  model = new TareasApp();
  agregarTareaPageView = new AgregarTareaPageView(model);
  listarTareaPageView = new ListarTareaPageView(model);
  verTareaPageView = new VerTareaPageView(model);
  modificarTareaPageView = new ModificarTareaPageView(model);
  borrarTareaPageView = new BorrarTareaPageView(model);

  agregarTareaPageController = new AgregarTareaPageController(/\/tareasApp\/agregar/ig, model, agregarTareaPageView);     
  listarTareaPageController = new ListarTareaPageController(/\/tareasApp\/listar/ig, model, listarTareaPageView);
  verTareaPageController = new VerTareaPageController(/\/tareasApp\/ver*/ig, model, verTareaPageView);
  modificarTareaPageController = new ModificarTareaPageController(/\/tareasApp\/modificar*/ig, model, modificarTareaPageView);
  borrarTareaPageController = new BorrarTareaPageController(/\/tareasApp\/borrar*/ig, model, borrarTareaPageView);


  router = new Router();
  router.addPageController(agregarTareaPageController);
  router.addPageController(listarTareaPageController);
  router.addPageController(verTareaPageController);
  router.addPageController(modificarTareaPageController);
  router.addPageController(borrarTareaPageController);
  router.route();
}
