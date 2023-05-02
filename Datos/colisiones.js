const colisionesNivel1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 8459, 8459, 8459, 8459, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    8459, 8459, 8459, 8459, 8459, 8459, 8459, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 8459, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8459, 8459, 0, 0, 0,
    0, 0, 0, 0, 8459, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 8459, 8459, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 8459, 8459, 8459, 8459, 8459, 8459, 8459, 8459, 8459, 8459, 8459, 8459, 8459,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    Array.prototype.reacomodar2D = function(){
        const filas = []
        for (let i = 0; i<this.length; i+=18){
            filas.push(this.slice(i,i+18))
        }
        return filas
}

const bloquesDeColisiones = []
const colisionesReacomodadas = colisionesNivel1.reacomodar2D()
colisionesReacomodadas.forEach((filas, y) => {
    filas.forEach((valor, x) => {
        if(valor===8459){
            //crear un nuevo bloque de colision
            bloquesDeColisiones.push(
                new BloqueDeColision({
                    posicion:{
                        x:x * 32,
                        y:y * 32,
                    },
                })
            )
        }
    })
});