function mostrarMensaje() {
    var nombre = document.getElementById("nombre").value.trim();
    var mensaje = document.getElementById("mensaje");
    var titulo = document.getElementById("titulo");
    var subtitulo = document.getElementById("subtitulo");
  
    if (nombre === "") {
      mensaje.style.display = "block";
      titulo.innerText = "No puedes entrar sin nombre.";
      subtitulo.innerText = "Este lugar solo abre sus puertas a los que se atreven a SER ENCERRADOS";
    } else {
      mensaje.style.display = "block";
      titulo.innerText = "Acceso concedido, " + nombre + ".";
      subtitulo.innerText = "Has llegado al lugar donde las ideas se vuelven realidad.";
    }
  }