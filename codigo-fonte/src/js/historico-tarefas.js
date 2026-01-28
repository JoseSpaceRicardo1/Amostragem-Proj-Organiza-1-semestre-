document.addEventListener("DOMContentLoaded", function () {
  const ciclo = JSON.parse(localStorage.getItem("ciclo")) || {};
  const tarefasDoCicloAtivo = ciclo.tarefasDoCiclo || [];
  const tarefasDoHistorico = JSON.parse(localStorage.getItem("historicoTarefas")) || [];

  const todasAsTarefas = [...tarefasDoCicloAtivo, ...tarefasDoHistorico];

  const container = document.querySelector(".container-historico-tarefas");

  if (todasAsTarefas.length === 0) {
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

  todasAsTarefas.forEach((tarefa) => {
    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = tarefa.nome;

    const tdResponsavel = document.createElement("td");
    tdResponsavel.textContent = tarefa.responsavelNome;

    const tdStatus = document.createElement("td");
    tdStatus.textContent = tarefa.status;
    if (tarefa.status === "Concluída") {
      tdStatus.classList.add("tarefa-concluida");
    } else if (tarefa.status === "Em andamento") {
      tdStatus.classList.add("tarefa-em-andamento");
    } else if (tarefa.status === "Interrompida") {
      tdStatus.classList.add("tarefa-interrompida");
    }

    const tdData = document.createElement("td");
    tdData.textContent = tarefa.dataFim || "🕛";

    tr.appendChild(tdNome);
    tr.appendChild(tdResponsavel);
    tr.appendChild(tdStatus);
    tr.appendChild(tdData);

    tabelaBody.appendChild(tr);
  });

  const voltarBtn = document.querySelector(".btn-voltar");
  voltarBtn.addEventListener("click", () => {
    if (ciclo.tarefasDoCiclo?.length > 0) {
      window.location.href = "ciclo-ativo.html";
    } else {
      window.location.href = "iniciar-ciclo.html";
    }
  });
});
