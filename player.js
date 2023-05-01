class Jugador { 
    constructor(){
        this.posicion ={
            x: 100,
            y:100
        }

        this.ancho=100
        this.alto=100
        this.lados = {
            inferior: this.posicion.y + this.alto, 
        }

        this.gravedad = 1
        this.velocidad = {
            x:0,
            y:0,
        }
    }

    dibujar(){
        c.fillStyle='red'
        c.fillRect(this.posicion.x,this.posicion.y,this.ancho,this.alto)
    }

    actualizar(){
        this.posicion.y+=this.velocidad.y
        this.lados.inferior = this.posicion.y + this.alto
        if(this.lados.inferior + this.velocidad.y < canvas.height){
            this.velocidad.y+=1
        }
        else{
            this.velocidad.y=0
        }
    }
}
