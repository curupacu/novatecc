// contato.js - salva formulário no localStorage como demonstração
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const tipo = document.getElementById('tipo').value;
    const mensagem = document.getElementById('mensagem').value.trim();
    const mensagens = JSON.parse(localStorage.getItem('novatec_msgs')||'[]');
    mensagens.push({nome, email, tipo, mensagem, data: new Date().toISOString()});
    localStorage.setItem('novatec_msgs', JSON.stringify(mensagens));
    alert('Mensagem enviada com sucesso (armazenada localmente).');
    form.reset();
  });
});
