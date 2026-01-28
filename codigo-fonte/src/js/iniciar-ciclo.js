document.addEventListener("DOMContentLoaded", function () {

  const configIcon = document.getElementById('config-icon');
  const dropdown = document.getElementById('dropdown');

  configIcon.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdown.classList.toggle('show');
  });


  window.addEventListener('click', function () {
    dropdown.classList.remove('show');
  });
  })


const tarefas = JSON.parse(localStorage.getItem("tarefasCadastradas")) || [];
const ciclo = JSON.parse(localStorage.getItem("ciclo")) || {};
const tarefasDoCiclo = ciclo.tarefasDoCiclo || [];
document.addEventListener("DOMContentLoaded", function () {

  const tabela = document.querySelector(".tabela-tarefas");
  const container = tabela.parentElement;

  if (tarefas.length === 0 && tarefasDoCiclo.length === 0) {
    tabela.style.display = "none";

    const divVazia = document.createElement("div");
    divVazia.classList.add("no-tasks");

    const texto = document.createElement("p");
    texto.textContent = "Nenhuma tarefa adicionada!";

    const img = document.createElement("img");
    img.src = "../assets/imgs/noData.png";
    img.alt = "Nenhuma tarefa adicionada";

    divVazia.appendChild(texto);
    divVazia.appendChild(img);
    container.appendChild(divVazia);
    return;
  }

  const tabelaBody = document.querySelector(".tabela-tarefas tbody");
  tabelaBody.innerHTML = "";

  tarefas.forEach((tarefa) => {
    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = tarefa.nome;


    const tdPeso = document.createElement("td");
    tdPeso.textContent = tarefa.peso === "1" ? "Leve" : tarefa.peso === "2" ? "Médio" : "Pesado";


    const tdAcoes = document.createElement("td");
    const btnExcluir = document.createElement("button");
    btnExcluir.classList.add("btn-excluir");
    btnExcluir.textContent = "🗑️";
    btnExcluir.addEventListener("click", () => {
      excluirTarefa(tarefa.id);
    });
    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdNome);
    tr.appendChild(tdPeso);
    tr.appendChild(tdAcoes);

    tabelaBody.appendChild(tr);
  });

  const botaoSalvar = document.createElement("button");
  botaoSalvar.classList.add("btn-salvar");
  botaoSalvar.textContent = "Iniciar Ciclo";
  botaoSalvar.addEventListener("click", () => {
    const ciclo = JSON.parse(localStorage.getItem("ciclo")) || [];

    const usuariosDisponiveis = ciclo.pessoasDoCiclo || [];
    let dataInicio = this.getElementById("data-inicio-ciclo").value;
    let dataFim = this.getElementById("data-fim-ciclo").value;

    if (usuariosDisponiveis.length === 1) {
      alert("Selecione mais de um usuário para iniciar o ciclo.");
      return;
    }

    if (!dataInicio) {
      alert("Selecione uma data de início para o ciclo.");
      return;
    }

    if (!dataFim) {
      alert("Selecione uma data de fim para o ciclo.");
      return;
    }

    debugger
    if(dataFim < dataInicio){
      alert("A data inicial deve ser menor ou igual a data final.");
      return;
    }

    if (tarefas.length === 0) {
      alert("Selecione pelo menos uma tarefa para iniciar o ciclo.");
      return;
    }


    const controlePeso = usuariosDisponiveis.map(usuario => ({
      id: usuario.id,
      nome: usuario.nome,
      pesoTotal: 0
    }));

    tarefas.sort((a, b) => Number(b.peso) - Number(a.peso));

    for (const tarefa of tarefas) {
      controlePeso.sort((a, b) => a.pesoTotal - b.pesoTotal);
      const usuarioAlvo = controlePeso[0];
      tarefa.responsavelId = usuarioAlvo.id;
      tarefa.responsavelNome = usuarioAlvo.nome;
      tarefa.status = "Em andamento";
      usuarioAlvo.pesoTotal += Number(tarefa.peso);
    }

    const tarefasDoCiclo = ciclo.tarefasDoCiclo || [];
    tarefasDoCiclo.push(...tarefas);
    ciclo.tarefasDoCiclo = tarefasDoCiclo;
    ciclo.dataInicio = dataInicio;
    ciclo.dataFim = dataFim;
    ciclo.pessoasDoCiclo = usuariosDisponiveis;
    ciclo.status = "Em andamento";
    localStorage.setItem("ciclo", JSON.stringify(ciclo));
    window.location.href = "./ciclo-ativo.html";
  });


  const botaoCancelar = document.createElement("button");
  botaoCancelar.classList.add("btn-cancelar");
  botaoCancelar.textContent = "Cancelar";
  botaoCancelar.addEventListener("click", () => {
    localStorage.removeItem("tarefasCadastradas");
      location.reload();
  });

  const botoesContainer = document.createElement("div");
  botoesContainer.classList.add("botoes");
  botoesContainer.appendChild(botaoCancelar);
  botoesContainer.appendChild(botaoSalvar);
  container.appendChild(botoesContainer);



  function excluirTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    localStorage.setItem("tarefasCadastradas", JSON.stringify(novaLista));
    location.reload();
  }
});
