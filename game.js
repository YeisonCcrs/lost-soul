
const canvas = document.querySelector('canvas')
const c =canvas.getContext('2d')
const mapa = new Image()
canvas.width = 586 // 1024
canvas.height = 384 // 576

const fondoNivel1 = new Sprite({
    posicion:{
        x:0,
        y:0,
    },
    fondoSrc: './images/nivel-1-inicio.png',
})
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
    fondoNivel1.dibujar()
    bloquesDeColisiones.forEach(BloqueDeColision => {
        BloqueDeColision.dibujar()
    })
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

