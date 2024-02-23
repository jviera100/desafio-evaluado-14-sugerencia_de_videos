// IIFE para el Patrón Módulo
var moduloVideo = (function() {
    function mostrarVideo(url, id) {
        var iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }

    return {
        insertarVideo: function(url, id) {
            mostrarVideo(url, id);
        }
    };
})();

// Clase padre Multimedia
export class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase hija Reproductor
export class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        moduloVideo.insertarVideo(this.getUrl(), this.id);
    }

    setInicio(tiempo = 0) {
        let urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
        moduloVideo.insertarVideo(urlConTiempo, this.id);
    }
}

// Instancias de la clase Reproductor
var musica = new Reproductor('https://www.youtube.com/embed/zEqb6xbeuCo', 'musica');
var pelicula = new Reproductor('https://www.youtube.com/embed/8ugaeA-nMTc', 'pelicula');
var serie = new Reproductor('https://www.youtube.com/embed/IJ_AZCvCacw', 'serie');

// Invocar al método playMultimedia para cada instancia
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Utilizar el método setInicio para modificar el tiempo de inicio en alguna de las instancias
musica.setInicio(10); // Inicia el video de música en el segundo 10
