function logar(event) {
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let senha = document.getElementById("senha").value.trim();
  let msgErrorElement = document.getElementById("msgError");

  // Limpar mensagens de erro anteriores
  if (msgErrorElement) {
    msgErrorElement.innerText = "";
  }

  // Validação dos campos
  if (!email && !senha) {
    alert("Preencha todos os campos!");
    return;
  }
  if (!email) {
    alert("E-mail vazio! Informe seu e-mail");
    return;
  }
  if (!senha) {
    alert("Senha vazia! Informe uma senha");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
  let usuarioValido = usuarios.find(
    (usuario) => usuario.email === email && usuario.senha === senha
  );

  if (!usuarioValido) {
    const errorMsg = "E-mail ou senha inválidos!";
    if (msgErrorElement) {
      msgErrorElement.innerText = errorMsg;
    } else {
      alert(errorMsg);
    }
    return;
  }

  // Preparar usuário logado
  const usuarioLogado = {
    id: usuarioValido.id,
    nome: usuarioValido.nome,
    email: usuarioValido.email,
    senha: usuarioValido.senha,
    logado: true,
  };

  // Verificar ciclo existente
  let ciclo = JSON.parse(localStorage.getItem("ciclo"));

  if (!ciclo || Array.isArray(ciclo)) {
    // Se não existir ou for array (legado), criar novo
    ciclo = {
      pessoasDoCiclo: [usuarioLogado],
      status: "Não iniciado",
      tarefasDoCiclo: [],
      dataInicio: "",
      dataFim: "",
    };
    localStorage.setItem("ciclo", JSON.stringify(ciclo));
    alert("Login realizado com sucesso!");
    window.location.href = "./html/iniciar-ciclo.html";
    return;
  }

  // Ciclo existe e é objeto válido
  if (ciclo.status === "Em andamento") {
    const usuarioNoCiclo = ciclo.pessoasDoCiclo.find(
      (usuario) => usuario.id === usuarioLogado.id
    );

    if (usuarioNoCiclo) {
      usuarioNoCiclo.logado = true;
    } else {
      ciclo.pessoasDoCiclo.push(usuarioLogado);
    }

    localStorage.setItem("ciclo", JSON.stringify(ciclo));
    alert("Login realizado com sucesso!");
    window.location.href = "./html/ciclo-ativo.html";
  } else {
    // Ciclo existe mas não está em andamento
    ciclo.pessoasDoCiclo = [usuarioLogado];
    ciclo.status = "Não iniciado";
    localStorage.setItem("ciclo", JSON.stringify(ciclo));
    alert("Login realizado com sucesso!");
    window.location.href = "./html/iniciar-ciclo.html";
  }
}