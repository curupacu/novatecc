// Nome e versão do cache
const CACHE_NAME = "novatec-cache-v1";

// Arquivos a serem armazenados
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./empresa.html",
  "./contato.html",
  "./reclamacoes.html",
  "./login.html",
  "./cadastro.html",
  "./css/style.css",
  "./assets/img/logo.png",
  "./assets/img/equipe.webp",
  "./assets/img/ods8.png",
  "./assets/img/ods17.png"
];

// Instala o SW e adiciona arquivos ao cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  console.log("✅ Service Worker instalado!");
});

// Ativa o SW e limpa caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  console.log("🔥 Service Worker ativo!");
});

// Intercepta requisições e responde com cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retorna do cache ou busca na rede
      return response || fetch(event.request);
    })
  );
});
