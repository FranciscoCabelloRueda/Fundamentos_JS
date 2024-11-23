"use strict";

class Pila {
    constructor(limite) {
        this.limite = limite;
        this.pila = [];
    }

    introduzco(prenda) {
        if (this.pila.length < this.limite) {
            this.pila.push(prenda);
            return `Se ha añadido a la cesta ${prenda.nombre}.`;
        } else {
            return "Empieza a lavar la ropa.";
        }
    }

    obtengo() {
        if (this.pila.length > 0) {
            const prenda = this.pila.pop();
            return `Se ha lavado la prenda ${prenda.nombre}.`;
        } else {
            return "No hay mas ropa sucia.";
        }
    }

    mostrarPila() {
        return this.pila;
    }
}

export { Pila };