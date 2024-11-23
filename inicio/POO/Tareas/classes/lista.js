"use strict";

class Lista {
    constructor(limite) {
        this.limite = limite;
        this.toDo = [];
        this.toDoPrior = [];
    }

    anado(tarea) {
        if (this.toDo.length < this.limite) {
            const posicion = Math.floor(Math.random() * (this.toDo.length + 1));
            this.toDo.splice(posicion, 0, tarea);
            return `"${tarea}" se ha añadido a la lista de tareas.`;
        } else {
            return "Empieza a completar tus tareas.";
        }
    }

    elimino() {
        if (this.toDo.length > 0) {
            const posicion = Math.floor(Math.random() * this.toDo.length);
            const tarea = this.toDo.splice(posicion, 1);
            return `"${tarea}" se ha eliminado de la lista de tareas.`;
        } else {
            return "No quedan tareas.";
        }
    }

    anadoPrior(tarea, prioridad) {
        if (this.toDoPrior.length < this.limite) {
            this.toDoPrior.push({ tarea, prioridad });
            this.toDoPrior.sort((a, b) => a.prioridad - b.prioridad);
            return `"${tarea}" con prioridad ${prioridad} se ha añadido a la lista de tareas con prioridad.`;
        } else {
            return "Empieza a completar tus tareas.";
        }
    }

    eliminoPrior() {
        if (this.toDoPrior.length > 0) {
            const tarea = this.toDoPrior.shift();
            return `"${tarea.tarea}" con prioridad ${tarea.prioridad} se ha eliminado de la lista de tareas con prioridad.`;
        } else {
            return "No quedan tareas.";
        }
    }

    mostrarToDo() {
        return this.toDo;
    }

    mostrarToDoPrior() {
        return this.toDoPrior;
    }
}

export { Lista };