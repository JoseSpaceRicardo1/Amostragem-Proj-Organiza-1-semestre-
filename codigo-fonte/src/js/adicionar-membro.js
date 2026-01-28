
let usuarioSelecionado = null;

function encontrarMembro(e) {
  e.preventDefault();
  const usuariosCadastrados = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
  const cicloData = JSON.parse(localStorage.getItem("ciclo")) || {};
  const usuariosDoCiclo = cicloData.pessoasDoCiclo || [];

  let email = document.getElementById("email").value.trim();
  if (!email) {
    alert('E-mail vazio! Informe o e-mail do membro');
    return;
  }

  // Verifica se o e-mail já está cadastrado no ciclo
  const emailJaCadastrado = usuariosDoCiclo.some(usuario => usuario.email === email);
  if (emailJaCadastrado) {
    alert('E-mail já cadastrado no ciclo! Verifique o e-mail do membro');
    document.getElementById("email").value = "";
    document.getElementById("email").focus();
    return;
  }
  // Verifica se o e-mail já está cadastrado no sistema

  const usuarioEncontrado = usuariosCadastrados.find(usuario => usuario.email === email);

  if (usuarioEncontrado) {
    usuarioSelecionado = usuarioEncontrado;

    const container = document.querySelector('.pessoas-encontradas-container');
    container.innerHTML = `
      <p class="pessoas-encontradas-text">Pessoas encontradas</p>
      <div class="pessoas-encontradas-table">
        <div class="column-name">
          <p class="pessoas-encontradas-name-header">Nome</p>
          <p class="pessoas-encontradas-name">${usuarioEncontrado.nome}</p>
        </div>
        <div class="column-email">
          <p class="pessoas-encontradas-email-header">E-mail</p>
          <p class="pessoas-encontradas-email">${usuarioEncontrado.email}</p>
        </div>
      </div>
    `;
    container.style.display = 'block';
    document.getElementById("email").value = "";
    document.getElementById("email").focus();
  } else {
    alert('E-mail não encontrado! Verifique o e-mail do membro');
    usuarioSelecionado = null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-adicionar").addEventListener("click", function (e) {
    e.preventDefault();
    if (!usuarioSelecionado) {
      alert("Nenhum membro selecionado para adicionar.");
      return;
    }
    const cicloData = JSON.parse(localStorage.getItem("ciclo")) || {};
    console.log(cicloData);
    const pessoasCiclo = cicloData.pessoasDoCiclo || [];
    const membro = {
      nome: usuarioSelecionado.nome,
      email: usuarioSelecionado.email,
      id: usuarioSelecionado.id,
      senha: usuarioSelecionado.senha,
    };

    pessoasCiclo.push(membro);
    localStorage.setItem("ciclo", JSON.stringify({ ...cicloData, pessoasDoCiclo: pessoasCiclo }));
    alert("Membro adicionado com sucesso!");

    // Limpar visualização
    document.querySelector('.pessoas-encontradas-container').innerHTML = "";
    usuarioSelecionado = null;
  });
});
