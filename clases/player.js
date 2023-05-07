class Jugador {

    //Pide como parámetro un array de los bloques de colisión, para poder hacer el efecto de choque
  constructor({ bloquesDeColision = [] }) {

    this.posicion = {
      x: 100,
      y: 100,
    };
    this.ancho = 32;
    this.alto = 32;

    //Lados aún no aplicados, (pendiente próxima actualización)
    this.lados = {
      inferior: this.posicion.y + this.alto,
      superior: this.posicion.y,
      derecho: this.posicion.x + this.ancho,
      izquierdo: this.posicion.x,
    };

    this.gravedad = 1;
    //Definida velocidad en ambos ejes [pixeles recorridos por cada pulsación de tecla]
    this.velocidad = {
      x: 0,
      y: 0,
    };

    this.bloquesDeColision = bloquesDeColision;
  }

  //Muestra el jugador en pantalla
  dibujar() {
    c.fillStyle = "red";
    c.fillRect(this.posicion.x, this.posicion.y, this.ancho, this.alto);
  }

  //Hace el efecto de movimiento
  actualizar() {
    //A la posición del jugador en pantalla, le sumo la velocidad que lleve en ese momento, para que se mueva esa distancia
    this.posicion.x += this.velocidad.x;
    this.verificarColisionesHorizontales()
    this.aplicarGravedad()
    this.verificarColisionesVerticales()

    //this.lados.inferior = this.posicion.y + this.alto; (lado inferior del jugador, por si lo necesito)
  }

  /*Para detectar las colisiones, primero se detectan las horizontales, porque de otro modo en el caso de que nuestro jugador esté, 
    por ejemplo, sobre tres bloques al mismo tiempo, habría conflictos para determinar a cuál de los tres bloques se le aplica el efecto en la 
    horizontal*/
    
    verificarColisionesHorizontales(){
      //Ciclo pra revisar si hay colisiones en el eje HORIZONTAL
    for (let i = 0; i < this.bloquesDeColision.length; i++) {
        const bloqueDeColision = this.bloquesDeColision[i];

        //Evaluamos si existe una colision
        if (
          this.posicion.x <= bloqueDeColision.posicion.x + bloqueDeColision.ancho &&
          this.posicion.x + this.ancho >= bloqueDeColision.posicion.x &&
          this.posicion.y + this.alto >= bloqueDeColision.posicion.y &&
          this.posicion.y <= bloqueDeColision.posicion.y + bloqueDeColision.alto
        ) {
          //colision por la izquierda
          if(this.velocidad.x < 0){
              this.posicion.x = bloqueDeColision.posicion.x + bloqueDeColision.ancho + 0.01
              break
          }
          //colision por la derecha
          else if(this.velocidad.x > 0){
              this.posicion.x = bloqueDeColision.posicion.x -this.ancho - 0.01
              break
          }
        }
      }
    }

  //Aplicando la gravedad
    aplicarGravedad(){
    this.velocidad.y += this.gravedad
    this.posicion.y += this.velocidad.y;
    }

    verificarColisionesVerticales(){
      //colisiones en el eje vertical
    for (let i = 0; i < this.bloquesDeColision.length; i++) {
        const bloqueDeColision = this.bloquesDeColision[i];
        //Evaluamos si existe una colision
        if (
          this.posicion.x <= bloqueDeColision.posicion.x + bloqueDeColision.ancho &&
          this.posicion.x + this.ancho >= bloqueDeColision.posicion.x &&
          this.posicion.y + this.alto >= bloqueDeColision.posicion.y &&
          this.posicion.y <= bloqueDeColision.posicion.y + bloqueDeColision.alto
        ) {
          //colision por la izquierda
          if(this.velocidad.y < 0){
            this.velocidad.y=0
              this.posicion.y = bloqueDeColision.posicion.y + bloqueDeColision.alto + 0.01
              break
          }
          //colision por la derecha
          else if(this.velocidad.y > 0){
            this.velocidad.y=0
              this.posicion.y = bloqueDeColision.posicion.y -this.alto - 0.01
              break
          }
        }
      }
    }
}
