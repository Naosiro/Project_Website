const url = 'http://localhost:3000/the-mandalorian/';

function consultarUser(numCapitulo) {
    fetch(`${url}${numCapitulo}`)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          renderizar(data.titulo,data.descripcion,data.titulo_nombre,data.imagen_url);
      });    
}
 
function renderizar(titulo, descripcion, nombre, imagen) {
    const listado = document.getElementById('listado');
    listado.innerHTML = `
    <img id="imgCap" src="${imagen}" alt="Imagen del Capitulo">
    <h2>${titulo}: ${nombre}</h2>
    <p id="descripcion">${descripcion}</p>
    `
}

function buscar() {
    const buscado = document.getElementById('buscado').value;
    return buscado;
}

const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', function () {
    consultarUser(buscar());
})

const serie = {
    titulo: "The Mandalorian",
    anio: "2019-2020",
    temporadas: 2,
    paisOrigen: "EEUU",
    creador: "Jon Favreau",
    genero: "Ciencia ficción, Acción y Aventura",
    sinopsis:"Tras la caída del Imperio Galáctico, la anarquía se ha esparcido en la Galaxia. Un pistolero solitario se abre paso por los bordes exteriores, ganándose su lugar como cazarrecompensas. Algunas secuencias o patrones de luces intermitentes pueden afectar a espectadores fotosensibles."
  };

const contenido = document.getElementById('contenido');

contenido.innerHTML = `
    <section id="resumen">
        <ul>
            <p id="datos">${serie.anio} - ${serie.temporadas} temporadas - ${serie.genero}</p>
            <p id="creador">Creador:</p>
            <p id="datos">${serie.creador}</p>
        </ul>
        <h4 id="sinopsis">Sinopsis:</h4>
        <p id="sinopsis-serie">${serie.sinopsis}</p>
    </section>
`;