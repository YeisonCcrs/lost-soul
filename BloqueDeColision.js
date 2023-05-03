class BloqueDeColision{
    constructor({posicion}){
        this.posicion=posicion
        this.ancho=32
        this.alto=32        
    }

    dibujar() {
        c.fillStyle='rgba(255,0,0,0.5)'
        c.fillRect(this.posicion.x, this.posicion.y, this.ancho, this.alto)
    }
}