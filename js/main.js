// main.js - scripts gerais
// PWA install prompt handling (simple)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// small helper to show alerts (bootstrap)
function showToast(msg){
  alert(msg); // simples — você pode trocar por toasts depois
}

// highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(l => {
    if (l.href === location.href || location.pathname.endsWith(l.getAttribute('href'))) {
      l.classList.add('active');
    }
  });
});
