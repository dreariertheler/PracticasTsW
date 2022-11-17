class BDD {
    constructor() { }
    static serialize(o) {
        localStorage.setItem('model', JSON.stringify(o));//donde guardas en el cliente
    }
    static deserialize() {
        let model = localStorage.getItem('model');
        if (model != undefined) return JSON.parse(localStorage.getItem('model'))
        else model;
    }
}

class TareasApp {

    constructor() {
        this._tareas = BDD.deserialize()?.tareas;
        if (this._tareas == undefined) {
            this._tareas = [];
        }
    }

    get tareas() {
        this._tareas = BDD.deserialize().tareas;
        return this._tareas;
    }

    set tareas(tareas) {
        this._tareas = tareas;
        BDD.serialize({ tareas });
    }

    agregarTarea(titulo, descripcion) {

        if (titulo == null) {
            titulo = "TituloPorDefecto"
        }

        if (descripcion == null) {
            descripcion = "DescripcionPorDefecto"
        }

        let tarea = new Tarea(titulo, descripcion);

        this._tareas.push(tarea);
        BDD.serialize({ tareas: this._tareas });
        return tarea;
    }

    eliminarTarea(id) {
        let index = -1;
        for (let i = 0; i < this._tareas.length; i++) {
            if (this._tareas[i]._id == id) {
                index = i;
            }
        }
        this._tareas.splice(index, 1);
        BDD.serialize({ tareas: this._tareas });
    }

    modificarTarea(id, titulo, descripcion) {
        let tarea;
        for (let i = 0; i < this._tareas.length; i++) {
            if (this._tareas[i]._id == id) {
                this._tareas[i]._titulo = titulo;
                this._tareas[i]._descripcion = descripcion;
                tarea = this._tareas[i];
                break;
            }
        }
        BDD.serialize({ tareas: this._tareas });
        return tarea;
    }

    verTarea(id) {
        for (let i = 0; i < this._tareas.length; i++) {
            if (this._tareas[i]._id == id) {
                return this._tareas[i];
                break;
            }
        }
    }

}

class Tarea {
    _titulo;
    _descripcion;
    _id;

    constructor(titulo, descripcion) {
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._id = Date.now();
    }

    get titulo() {
        return this._titulo;
    }

    get descripcion() {
        return this._descripcion;
    }
}