//Mapeo de los controles WASD
window.addEventListener('keydown', (event) => {
    console.log(event)
    switch(event.key){
        case 'w':  if(jugador.velocidad.y===0) jugador.velocidad.y= -15
            break
        case 'a': teclas.a.presionada=true
            break
        case 'd': teclas.d.presionada=true
            break
        case 's': jugador.velocidad.y = 15
            break
        case 'W':  if(jugador.velocidad.y===0) jugador.velocidad.y= -15
            break
        case 'A': teclas.a.presionada=true
            break
        case 'D': teclas.d.presionada=true
            break
        case 'S': jugador.velocidad.y = 15
            break
    }
    
})

//Solucion al problema de dejar la tecla presionada
window.addEventListener('keyup', (event) => {
    console.log(event)
    switch(event.key){
        case 'a': teclas.a.presionada=false
            break
        case 'd': teclas.d.presionada=false
            break
        case 'A': teclas.a.presionada=false
            break
        case 'D': teclas.d.presionada=false
            break
    }
    
})
