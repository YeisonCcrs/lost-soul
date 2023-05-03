window.addEventListener('keydown', (event) => {
    console.log(event)
    switch(event.key){
        case 'w':  if(jugador.velocidad.y===0) jugador.velocidad.y= -15
            break
        case 'a': teclas.a.presionada=true
            break
        case 'd': teclas.d.presionada=true
            break
    }
    
})

window.addEventListener('keyup', (event) => {
    console.log(event)
    switch(event.key){
        case 'a': teclas.a.presionada=false
            break
        case 'd': teclas.d.presionada=false
            break
    }
    
})
