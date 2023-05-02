class Sprite{
    constructor({posicion, fondoSrc}){
        this.posicion=posicion
        this.fondo = new Image()
        this.fondo.onload = () => {
            this.imgCargada = false
        }
        this.fondo.src = fondoSrc
        this.imgCargada = false
        
    }

    dibujar(){
        if(!this.imgCargada){
            return c.drawImage(this.fondo, this.posicion.x, this.posicion.y)
        }
    }
}