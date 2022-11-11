class TareasApp {
    tareas = [];

    agregarTarea(titulo, descripcion){

        if(titulo == null){
            titulo = "TituloPorDefecto"
        }

        if(descripcion == null){
            descripcion = "DescripcionPorDefecto"
        }

        let tarea = new Tarea(this.tareas.length, titulo, descripcion);

        this.tareas.push(tarea);
    }

    eliminarTarea(id) {
        for (let i=0; i<=this.tareas.length; i++){
            if(this.tareas[i]._id == id){
                this.tareas.splice(i, 1);
                break;
            }
        }
    }
    
    modificarTarea(id, titulo, descripcion) {
        for (let i=0; i<this.tareas.length; i++){
            if(this.tareas[i]._id == id){
                this.tareas[i]._titulo = titulo;
                this.tareas[i]._descripcion = descripcion
                break;
            }           
        }
    }
    
    verTarea(id) {
        for (let i=0; i<=this.tareas.length; i++){
            if(this.tareas[i]._id == id){
                return this.tareas[i];
                break;
            }
        }
    }  
    
}

class Tarea {
    _titulo;
    _descripcion;
    _id;
    
    constructor(id, titulo, descripcion) {
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._id = id;
    }

    get titulo(){
        return this._titulo;
    }
    
    set titulo(titulo){
        this._titulo  = titulo;
    }

    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion  = descripcion;
    }
}