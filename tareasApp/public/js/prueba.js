

describe("Pruebas agregar", function () {
    it("Agregar tarea completa", function () {
        let tareasApp = new TareasApp();
        let titulo = "Tarea 1";
        let descripcion = "Tarea 1 para probar la funcionalidad del modelo";
        tareasApp.agregarTarea(titulo, descripcion);
        assert.equal(tareasApp.tareas.length, 1);
        assert.equal(tareasApp.tareas[0]._titulo, 'Tarea 1');
        assert.equal(tareasApp.tareas[0]._descripcion, 'Tarea 1 para probar la funcionalidad del modelo');
        assert.equal(tareasApp.tareas[0]._id, 0);
    });
    it("Modificar una tarea", function () {
        let tareasApp = new TareasApp();
        let titulo = "Tarea 1";
        let descripcion = "Tarea 1 para probar la funcionalidad del modelo";
        tareasApp.agregarTarea(titulo, descripcion);
        tareasApp.modificarTarea(0,"titulo modificado", "descripcion modificada");
        assert.equal(tareasApp.tareas.length, 1);
        assert.equal(tareasApp.tareas[0]._titulo, 'titulo modificado');
        assert.equal(tareasApp.tareas[0]._descripcion, 'descripcion modificada');
    });
    it("Ver una tarea", function () {
        let tareasApp = new TareasApp();
        let titulo = "Tarea 1";
        let descripcion = "Tarea 1 para probar la funcionalidad del modelo";
        tareasApp.agregarTarea(titulo, descripcion);
        result = tareasApp.verTarea(0);
        assert.equal(tareasApp.tareas.length, 1);
        assert.equal(tareasApp.tareas[0]._titulo, result._titulo);
        assert.equal(tareasApp.tareas[0]._descripcion, result._descripcion);
        assert.equal(tareasApp.tareas[0]._id, result._id);
    });
    it("Eliminar una tarea", function () {
        let tareasApp = new TareasApp();
        let titulo = "Tarea 1";
        let descripcion = "Tarea 1 para probar la funcionalidad del modelo";
        tareasApp.agregarTarea(titulo, descripcion);
        tareasApp.eliminarTarea(0);
        assert.equal(tareasApp.tareas.length, 0);
    });
});

describe("Pruebas ", function () {
    it("New", function () {
        let tarea = new Tarea(0, "Titulo 1","Descripcion 1");
        assert.equal(tarea._id, 0);
        assert.equal(tarea._titulo, 'Titulo 1');
        assert.equal(tarea._descripcion, 'Descripcion 1');
    });

    it("Get Titulo", function () {
        let tarea = new Tarea(0, "Titulo 2","Descripcion 2");
        assert.equal(tarea.titulo, 'Titulo 2');
    });

    it("Set Titulo", function () {
        let tarea = new Tarea(0, "Titulo 3","Descripcion 2");
        tarea.titulo = "Hola";
        assert.equal(tarea.titulo, 'Hola');
    });

    it("Get Descripcion", function () {
       let tarea = new Tarea(0, "Titulo 4","Descripcion 4");
        assert.equal(tarea.descripcion, 'Descripcion 4');
    });

    it("Set Descripcion", function () {
        let tarea = new Tarea(0, "Titulo 2","Descripcion 2");
        tarea.descripcion = "Mundo";
        assert.equal(tarea.descripcion, 'Mundo');
    });
});

