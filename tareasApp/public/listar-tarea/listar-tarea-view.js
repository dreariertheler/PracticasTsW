class ListarTareaView extends View {
  constructor(model, parentId) {
    super(model, parentId);
  }
  getValor() {
    return document.getElementById(this.parentId).value;
  }

  listar(){
		let tareas = this.model._tareas;
		let content='';
		for (let i=0; i<tareas.length; i++){
			content = content + `<tr><td><p>${tareas[i]._titulo}</p></td><td><a href="${"\/tareasApp\/ver?id="+tareas[i]._id}"
			 onclick="router.route('${"\/tareasApp\/ver?id="+tareas[i]._id}')"><img src="../images/descarga.png"></a></td><td><a href="${"\/tareasApp\/borrar?id="+tareas[i]._id}"
			 onclick="router.route('${"\/tareasApp\/borrar?id="+tareas[i]._id}')"><img src="../images/x.png"></a></td></tr>`
        }
		document.getElementById('tareas').innerHTML=`${content}`;
	}
}