
const canvas = document.querySelector('canvas')
const c =canvas.getContext('2d')
const mapa = new Image()
canvas.width = 64 * 16 // 104
canvas.height = 64 * 9 // 576

const jugador = new Jugador()
const teclas ={
    w: {
        presionada:false,
    },
    a:{
        presionada:false,
    },
    d:{
        presionada:false,
    }
}

function animacion(){
    window.requestAnimationFrame(animacion)
    c.fillStyle='white'
    c.fillRect(0,0,canvas.width,canvas.height)

    jugador.velocidad.x=0
    if(teclas.d.presionada){
        jugador.velocidad.x=3
    }
    else if(teclas.a.presionada){
        jugador.velocidad.x=-3
    }

    jugador.dibujar()
    jugador.actualizar()
}

animacion()

