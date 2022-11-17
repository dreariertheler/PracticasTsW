class ListarTareaPageController extends PageController {
	constructor(regex, model, view) {
        super(regex, model, view);
        this.listarTareaController = new ListarTareaController(model,view);
	}
}