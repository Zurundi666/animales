const staticAniBonitos = "ani-bonitos-site-v1"
const assets = [
"/",
"/index.html",
"/css/style.css",
"/js/app.js",
"pollitos.jpg",
"gato.jpg",
"oveja.jpg",
"vaca.jpg",
"conejo.jpg",
"caballo.jpg",
"mariposa.jpg",
"panda.jpg",
]

self.addEventListener("install", installEvent => {
installEvent.waitUntil(
caches.open(staticDevCoffee).then(cache => {
cache.addAll(assets)
})
)
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
    
    caches.match(fetchEvent.request).then(res => {
    return res || fetch(fetchEvent.request)
    })
    )
    })