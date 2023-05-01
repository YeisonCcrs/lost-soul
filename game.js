
const canvas = document.querySelector('canvas')
const c =canvas.getContext('2d')
const mapa = new Image()
canvas.width = 64 * 16 // 104
canvas.height = 64 * 9 // 576


const jugador = new Jugador()

function animacion(){
    window.requestAnimationFrame(animacion)
    c.fillStyle='white'
    c.fillRect(0,0,canvas.width,canvas.height)
    jugador.dibujar()
    jugador.actualizar()
}

animacion()

window.addEventListener('keydown', (event) => {
    console.log(event)
    switch(event.key){
        case 'w':  if(jugador.velocidad.y===0) jugador.velocidad.y=-15w
            break
        case 'a': 
            break
        case 'd':
            break
    }
    
})

