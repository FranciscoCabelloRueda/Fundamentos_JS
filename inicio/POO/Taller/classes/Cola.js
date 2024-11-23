"use strict";

class Cola {
    constructor(limite) {
        this.limite = limite;
        this.cola = [];
    }

    llega(coche) {
        if (this.cola.length < this.limite) {
            this.cola.push(coche);
            return `Se ha añadido a la lista de espera un ${coche.nombre}.`;
        } else {
            return "Empieza a reparar los coches.";
        }
    }

    atiendo() {
        if (this.cola.length > 0) {
            const coche = this.cola.shift();
            return `Se ha reparado un ${coche.nombre}.`;
        } else {
            return "No quedan coches por reparar.";
        }
    }

    mostrarCola() {
        return this.cola;
    }
}

export { Cola };