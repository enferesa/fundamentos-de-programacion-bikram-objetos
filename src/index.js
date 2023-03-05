const Coche = {
    marca: "toyota",
    modelo: "corolla",
    matricula: "5050HLF",
};

const Casa = {
    codPostal: "24002",
    calle: "Sant Emidgi",
    portal: "12",
    piso: "1º"
};

const FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
};

const Perro = {
    nombre: "coco", 
    raza: "mestizo", 
    color: "blanco", 
    edad: "12", 
    ladrar: function(){
        console.log("un ladrido");
    },
    popo: function(){
        const x = Math.random() * 3;
        return x; 
    },
};

const Portatil =  {
    marca: "marca",
    modelo: "PS5",
};

const marcaPortatil = Portatil.marca;

const marcaPortatil2 = Portatil.marca;

const Concierto = {
    grupos: [],
    cartelera: [],
    fecha: "",
};

const grupos = Concierto.grupos;

const Led = {
    rojo: "1",
    verde: "2",
    azul: "3",
    encendido: true,
};

const RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo = "P345";

Concierto.cartelera.push ("Queen", "Guns N' Roses");

Concierto.fecha = new Date();

const Impresora = {
    tinta: {
        rojo: "",
        verde: "",
        azul: "",
    },
    imprimiendo: "",
};

Impresora.imprimiendo = {
    nombreArchivo: "",
    copias: "",
    numPaginas: "",
};

const Noticia = {
    titular: "",
    cuerpo: "",
};

const Persona = {
    nombre: "",
    apellidos: "",
    edad: "",
};

const Avion = {
    numPasajeros: "",
    despegar: function(){console.log("despegando")},
    volar: function(){console.log("llegando al destino")},
    aterrizar: function(){console.log("aterrizando")},
};

const Paquete = {
    contenido: [],
};

const Pais = {
    numHabitantes: "",
    continente: "",
    gentilicio: "",
};

const O_Error = {
    codigo: "",
};

const codError = O_Error.codigo;

const Grupo = {
    integrantes: [],
    numIntegrantes: "",
};

const integrantes = Grupo.integrantes;

const nivelesTinta = Impresora.tinta;

const Pantalla = {
    pixeles: [],
    dimensiones: "",
};

const pixeles = Pantalla.pixeles;

const Movil = {
    especificaciones: ["especificaciones"],
    temperatura: "",
};

const especificaciones = Movil.especificaciones;

Grupo.numIntegrantes = 5;

Pantalla.dimensiones = "1920x1080";

const powered = !Led.encendido;

Movil.temperatura = "20º";