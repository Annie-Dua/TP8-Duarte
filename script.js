const conduN = document.getElementById("nombreC");
const conduE = document.getElementById("edadC");
const conduCar = document.getElementById("carnetC");
const conduSeg = document.getElementById("seguroC");

const vehiMar = document.getElementById("marcaV");
const vehiMod = document.getElementById("modeloV");
const vehiPat = document.getElementById("patenteV");
const vehiTip = document.getElementById("tipoV");

const div_resultado_personas = document.getElementById("listaConductores");
const div_resultado_autos = document.getElementById("listaVehiculos");

let lista_conduc = [];
let lista_autos = [];


function guardarConductor() {
    let conductor = {
        nombre: conduN.value,
        edad: conduE.value,
        tipo_carnet: conduCar.value,
        seguro: conduSeg.value
    };

    lista_conduc.push(conductor);

    mostrarConductores();

    conduN.value = "";
    conduE.value = "";
}


function guardarVehiculo() {
    let autos = {
        marca: vehiMar.value,
        modelo: vehiMod.value,
        patente: vehiPat.value,
        tipo: vehiTip.value
    };

    lista_autos.push(autos);

    mostrarVehiculos();

    vehiMar.value = "";
    vehiMod.value = "";
    vehiPat.value = "";
}


function mostrarConductores() {
    div_resultado_personas.innerHTML = "";

    if (lista_conduc.length == 0) {
        div_resultado_personas.innerHTML = "<h2>No hay personas</h2>";
    }

    for (var i = 0; i < lista_conduc.length; i++) {
        let persona = lista_conduc[i];

        div_resultado_personas.innerHTML += "<h2>Nombre: " + persona["nombre"] + "</h2>";
        div_resultado_personas.innerHTML += "<h2>Edad: " + persona["edad"] + "</h2>";
        div_resultado_personas.innerHTML += "<p>Tipo de carnet: " + persona["tipo_carnet"] + "</p>";
        div_resultado_personas.innerHTML += "<p>Seguro: " + persona["seguro"] + "</p>";
        div_resultado_personas.innerHTML += "<hr>";
    }
}


function mostrarVehiculos() {
    div_resultado_autos.innerHTML = "";

    if (lista_autos.length == 0) {
        div_resultado_autos.innerHTML = "<h2>No hay vehículos</h2>";
    }

    for (var i = 0; i < lista_autos.length; i++) {
        let autos = lista_autos[i];

        div_resultado_autos.innerHTML += "<h2>Marca: " + autos["marca"] + "</h2>";
        div_resultado_autos.innerHTML += "<h2>Modelo: " + autos["modelo"] + "</h2>";
        div_resultado_autos.innerHTML += "<p>Patente: " + autos["patente"] + "</p>";
        div_resultado_autos.innerHTML += "<p>Tipo: " + autos["tipo"] + "</p>";
        div_resultado_autos.innerHTML += "<hr>";
    }
}


function filtrar_A1() {
    if (lista_conduc.length == 0) {
        div_resultado_personas.innerHTML = "<h2>No hay personas</h2>";
    } else {
        div_resultado_personas.innerHTML = "";
    }

    for (var i = 0; i < lista_conduc.length; i++) {
        let persona = lista_conduc[i];

        if (persona["tipo_carnet"] === "A1") {
            div_resultado_personas.innerHTML += "<h2>Nombre: " + persona["nombre"] + "</h2>";
            div_resultado_personas.innerHTML += "<h2>Edad: " + persona["edad"] + "</h2>";
            div_resultado_personas.innerHTML += "<p>Tipo de carnet: " + persona["tipo_carnet"] + "</p>";
            div_resultado_personas.innerHTML += "<p>Seguro: " + persona["seguro"] + "</p>";
        }
    }

    if (lista_autos.length == 0) {
        div_resultado_autos.innerHTML = "<h2>No hay vehículos</h2>";
    } else {
        div_resultado_autos.innerHTML = "";
    }

    for (var i = 0; i < lista_autos.length; i++) {
        let autos = lista_autos[i];

        if (autos["tipo"] === "A1") {
            div_resultado_autos.innerHTML += "<h2>Marca: " + autos["marca"] + "</h2>";
            div_resultado_autos.innerHTML += "<h2>Modelo: " + autos["modelo"] + "</h2>";
            div_resultado_autos.innerHTML += "<p>Patente: " + autos["patente"] + "</p>";
            div_resultado_autos.innerHTML += "<p>Tipo: " + autos["tipo"] + "</p>";
        }
    }
}


function filtrar_A2() {
    if (lista_conduc.length == 0) {
        div_resultado_personas.innerHTML = "<h2>No hay personas</h2>";
    } else {
        div_resultado_personas.innerHTML = "";
    }

    for (var i = 0; i < lista_conduc.length; i++) {
        let persona = lista_conduc[i];

        if (persona["tipo_carnet"] === "A2") {
            div_resultado_personas.innerHTML += "<h2>Nombre: " + persona["nombre"] + "</h2>";
            div_resultado_personas.innerHTML += "<h2>Edad: " + persona["edad"] + "</h2>";
            div_resultado_personas.innerHTML += "<p>Tipo de carnet: " + persona["tipo_carnet"] + "</p>";
            div_resultado_personas.innerHTML += "<p>Seguro: " + persona["seguro"] + "</p>";
        }
    }

    if (lista_autos.length == 0) {
        div_resultado_autos.innerHTML = "<h2>No hay vehículos</h2>";
    } else {
        div_resultado_autos.innerHTML = "";
    }

    for (var i = 0; i < lista_autos.length; i++) {
        let autos = lista_autos[i];

        if (autos["tipo"] === "A2") {
            div_resultado_autos.innerHTML += "<h2>Marca: " + autos["marca"] + "</h2>";
            div_resultado_autos.innerHTML += "<h2>Modelo: " + autos["modelo"] + "</h2>";
            div_resultado_autos.innerHTML += "<p>Patente: " + autos["patente"] + "</p>";
            div_resultado_autos.innerHTML += "<p>Tipo: " + autos["tipo"] + "</p>";
        }
    }
}


function filtrar_A3() {
    if (lista_conduc.length == 0) {
        div_resultado_personas.innerHTML = "<h2>No hay personas</h2>";
    } else {
        div_resultado_personas.innerHTML = "";
    }

    for (var i = 0; i < lista_conduc.length; i++) {
        let persona = lista_conduc[i];

        if (persona["tipo_carnet"] === "A3") {
            div_resultado_personas.innerHTML += "<h2>Nombre: " + persona["nombre"] + "</h2>";
            div_resultado_personas.innerHTML += "<h2>Edad: " + persona["edad"] + "</h2>";
            div_resultado_personas.innerHTML += "<p>Tipo de carnet: " + persona["tipo_carnet"] + "</p>";
            div_resultado_personas.innerHTML += "<p>Seguro: " + persona["seguro"] + "</p>";
        }
    }

    if (lista_autos.length == 0) {
        div_resultado_autos.innerHTML = "<h2>No hay vehículos</h2>";
    } else {
        div_resultado_autos.innerHTML = "";
    }

    for (var i = 0; i < lista_autos.length; i++) {
        let autos = lista_autos[i];

        if (autos["tipo"] === "A3") {
            div_resultado_autos.innerHTML += "<h2>Marca: " + autos["marca"] + "</h2>";
            div_resultado_autos.innerHTML += "<h2>Modelo: " + autos["modelo"] + "</h2>";
            div_resultado_autos.innerHTML += "<p>Patente: " + autos["patente"] + "</p>";
            div_resultado_autos.innerHTML += "<p>Tipo: " + autos["tipo"] + "</p>";
        }
    }
}


function filtrar_seguro_si() {
    if (lista_conduc.length == 0) {
        div_resultado_personas.innerHTML = "<h2>No hay personas</h2>";
    } else {
        div_resultado_personas.innerHTML = "";
    }

    for (var i = 0; i < lista_conduc.length; i++) {
        let persona = lista_conduc[i];

        if (persona["seguro"] === "SI") {
            div_resultado_personas.innerHTML += "<h2>Nombre: " + persona["nombre"] + "</h2>";
            div_resultado_personas.innerHTML += "<h2>Edad: " + persona["edad"] + "</h2>";
            div_resultado_personas.innerHTML += "<p>Tipo de carnet: " + persona["tipo_carnet"] + "</p>";
            div_resultado_personas.innerHTML += "<p>Seguro: " + persona["seguro"] + "</p>";
        }
    }
}


function filtrar_seguro_no() {
    if (lista_conduc.length == 0) {
        div_resultado_personas.innerHTML = "<h2>No hay personas</h2>";
    } else {
        div_resultado_personas.innerHTML = "";
    }

    for (var i = 0; i < lista_conduc.length; i++) {
        let persona = lista_conduc[i];

        if (persona["seguro"] === "NO") {
            div_resultado_personas.innerHTML += "<h2>Nombre: " + persona["nombre"] + "</h2>";
            div_resultado_personas.innerHTML += "<h2>Edad: " + persona["edad"] + "</h2>";
            div_resultado_personas.innerHTML += "<p>Tipo de carnet: " + persona["tipo_carnet"] + "</p>";
            div_resultado_personas.innerHTML += "<p>Seguro: " + persona["seguro"] + "</p>";
        }
    }
}


function filtrar_marca() {
    let marca = prompt("Ingrese la marca que desea buscar:");

    if (marca == null || marca.trim() == "") {
        div_resultado_autos.innerHTML = "<h2>Ingrese una marca válida</h2>";
    } else {
        div_resultado_autos.innerHTML = "";

        for (var i = 0; i < lista_autos.length; i++) {
            let autos = lista_autos[i];

            if (autos["marca"].toLowerCase() === marca.trim().toLowerCase()) {
                div_resultado_autos.innerHTML += "<h2>Marca: " + autos["marca"] + "</h2>";
                div_resultado_autos.innerHTML += "<h2>Modelo: " + autos["modelo"] + "</h2>";
                div_resultado_autos.innerHTML += "<p>Patente: " + autos["patente"] + "</p>";
                div_resultado_autos.innerHTML += "<p>Tipo: " + autos["tipo"] + "</p>";
            }
        }
    }
}
