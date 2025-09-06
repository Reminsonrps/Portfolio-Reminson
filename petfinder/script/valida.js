document.getElementById('action-btn').addEventListener('click', () => {
  const usuarioLogado = sessionStorage.getItem('usuarioLogado');

  if (!usuarioLogado) {
    window.location.href = 'criar-conta.html'; // Página para criar usuário e senha
  } else {
    window.location.href = 'publicar.html'; // Página de cadastro do pet
  }
});

