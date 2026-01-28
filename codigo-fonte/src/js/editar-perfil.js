document.addEventListener("DOMContentLoaded", function () {
  const ciclo = JSON.parse(localStorage.getItem("ciclo"));
  const voltarBtn = document.querySelector(".voltar");

  voltarBtn.addEventListener("click", () => {
    if (ciclo.tarefasDoCiclo?.length > 0) {
      window.location.href = "ciclo-ativo.html";
    } else {
      window.location.href = "iniciar-ciclo.html";
    }
  });

  const inputNome = document.getElementById("nome");
  const inputEmail = document.getElementById("email");
  const inputSenha = document.getElementById("password");
  const inputConfirmarSenha = document.getElementById("conf-password");
  const btnSalvar = document.getElementById("btn-salvar");
  const btnExcluir = document.getElementById("btn-delet");

  const pessoasDoCiclo = ciclo.pessoasDoCiclo || [];
  const id = new URLSearchParams(window.location.search).get("id");
  const pessoa = pessoasDoCiclo.find((p) => Number(p.id) === Number(id));

  if (!pessoa) {
    alert("Usuário não encontrado");
    window.location.href = "ciclo-ativo.html";
    return;
  }

  inputNome.value = pessoa.nome || "";
  inputEmail.value = pessoa.email || "";
  inputSenha.value = pessoa.senha || "";
  inputConfirmarSenha.value = pessoa.senha || "";

  btnSalvar.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();
    const confirmarSenha = inputConfirmarSenha.value.trim();

    if (!nome || !email || !senha) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não conferem! Tente novamente.");
      return;
    }

    pessoa.nome = nome;
    pessoa.email = email;
    pessoa.senha = senha;

    const index = pessoasDoCiclo.findIndex((t) => Number(t.id) === Number(id));
    if (index !== -1) {
      pessoasDoCiclo[index] = pessoa;
      localStorage.setItem("ciclo", JSON.stringify({ ...ciclo, pessoasDoCiclo }));
      window.location.href = "ciclo-ativo.html";
    } else {
      alert("Erro ao salvar: usuário não encontrado");
    }
  });

  btnExcluir.addEventListener("click", () => {
    // verifica se tem ciclo ativo se tiver nao pode excluir
    if (ciclo.tarefasDoCiclo?.length > 0) {
      alert("Não é possível excluir o usuário enquanto houver tarefas ativas no ciclo.");
      return;
    }
    if (pessoasDoCiclo.length === 1) {
      alert("Não é possível excluir o único usuário do ciclo.");
      return;
    }

    const confirmacao = confirm("Tem certeza que deseja excluir este usuário?");
    if (confirmacao) {
      const index = pessoasDoCiclo.findIndex((t) => Number(t.id) === Number(id));
      // tem que remover do usuarios cadastrados também
      const usuariosCadastrados = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
      const usuarioIndex = usuariosCadastrados.findIndex((u) => u.id === pessoa.id);
      if (index !== -1 && usuarioIndex !== -1) {
        pessoasDoCiclo.splice(index, 1);
        usuariosCadastrados.splice(usuarioIndex, 1);
        localStorage.setItem("ciclo", JSON.stringify({ ...ciclo, pessoasDoCiclo }));
        localStorage.setItem("usuariosCadastrados", JSON.stringify(usuariosCadastrados));
        alert("Usuário excluído com sucesso!");
        window.location.href = "../index.html";
      } else {
        alert("Erro ao excluir: usuário não encontrado");
      }
    }
  });
});