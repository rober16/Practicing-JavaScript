/*
Se define una función constructora llamada Emitter. 
Esta función se utilizará para crear instancias de un objeto emisor de eventos. 
Dentro de la función constructora, se inicializa una propiedad llamada events como un objeto vacío. 
Esta propiedad se utilizará para almacenar los diferentes tipos de eventos y sus respectivos listeners.
*/
function Emitter(){
    this.events = {};
}

//Se agrega un método llamado on al prototipo del objeto Emitter. 
//Este método se utilizará para registrar (o suscribir) listeners a un determinado tipo de evento.
//El método on toma dos parámetros:

//type: El tipo de evento al cual se quiere suscribir un listener.
//listener: La función que se ejecutará cuando el evento ocurra.
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

//Este método se utilizará para emitir (o disparar) un evento de un tipo específico.
//permite activar todos los listeners registrados para un tipo específico de evento. 
//Si no hay listeners registrados para ese tipo de evento, no se realiza ninguna acción. 
//Esto es una parte clave del sistema de emisión y escucha de eventos

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(listener => listener());
    }
}

module.exports = Emitter;