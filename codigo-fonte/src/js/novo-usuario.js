function Cadastrar(event) {
  // previne o comportamento padrão do botão (que pode ser submit dentro de div)
  if(event) event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

  const usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
  const jaCadastrado = usuarios.some(usuario => usuario.email === email);

  if (!nome && !email && !senha && !confirmarSenha) {
    alert('Preencha todos os campos!');
    return;
  }
  if (!nome) {
    alert('Nome vazio! Informe seu nome');
    return;
  }
  if (!email) {
    alert('E-mail vazio! Informe seu e-mail');
    return;
  }
  if (!senha) {
    alert('Senha vazia! Informe uma senha');
    return;
  }
  if (!confirmarSenha) {
    alert('Confirmação de senha vazia! Confirme sua senha');
    return;
  }
  if (senha !== confirmarSenha) {
    alert('As senhas não conferem! Corrija a confirmação de senha');
    return;
  }
  if (jaCadastrado) {
    alert('E-mail já cadastrado! Tente outro e-mail');
    return;
  }

  const novoUsuario = {
    id: Date.now(),
    nome,
    email,
    senha,
  };

  usuarios.push(novoUsuario);
  localStorage.setItem("usuariosCadastrados", JSON.stringify(usuarios));

  // Limpa manualmente os campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("confirmarSenha").value = "";

  alert('Usuário cadastrado com sucesso! Você já pode fazer login.');
  
}
