Array.prototype.reacomodar2D = function(){
    const filas = []
    for (let i = 0; i<this.length; i+=18){
        filas.push(this.slice(i,i+18))
    }
    return filas
}

