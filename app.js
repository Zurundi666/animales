const container = document.querySelector(".container")
const animales= [
{ name: "Perros", image:"./utilidades/imagenes/perrito.jpg"},
{ name: "Pollitos", image: "./utilidades/imagenes/pollitos.jpg" },
{ name: "Gatos", image: "./utilidades/imagenes/gato.jpg"},
{ name: "Ovejas", image: "./utilidades/imagenes/oveja.jpg" },
{ name: "Vacas", image: "./utilidades/imagenes/vaca.jpg" },
{ name: "Conejos", image: "./utilidades/imagenes/conejo.jpg" },
{ name: "Caballos", image: "./utilidades/imagenes/caballo.jpg" },
{ name: "Mariposas", image: "./utilidades/imagenes/mariposa.jpg" },
{ name: "Osos Pandas", image: "./utilidades/imagenes/panda.jpg" },
]

const showAnimales= () => {
    let output = ""
    animales.forEach(
    ({ name, image }) =>
    (output += `
    <div class="card">
    <img class="card--avatar" src=${image} />
    <h1 class="card--title">${name}</h1>
    </div>
    `)
    )
    container.innerHTML = output
    }
    document.addEventListener("DOMContentLoaded", showAnimales)

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
        
        navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
        })
        }
    