// auth.js
document.addEventListener('DOMContentLoaded', () => {
  const regForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  if (regForm){
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const pass = document.getElementById('regPass').value;
      // simples: guarda usuário no localStorage (lista)
      const users = JSON.parse(localStorage.getItem('novatec_users')||'[]');
      users.push({name, email, pass});
      localStorage.setItem('novatec_users', JSON.stringify(users));
      alert('Conta criada (armazenada localmente). Agora você pode voltar ao Login.');
      window.location.href = 'login.html';
    });
  }

  if (loginForm){
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // por pedido do Gui: não conectar—mostrar que o serviço está desativado
      alert('Login desativado nesta versão (funcionalidade de servidor não disponível). Use a página de cadastro para simular uma conta local.');
      // opcional: redirect to index to make it look like login
      // window.location.href = 'index.html';
    });
  }
});
