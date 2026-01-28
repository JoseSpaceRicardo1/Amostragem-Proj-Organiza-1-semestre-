document.addEventListener("DOMContentLoaded", function () {

  const btnVerHistorico = document.getElementById("btn-historico");
  btnVerHistorico.addEventListener("click", () => {
    window.location.href = "./historico-tarefas.html";
  });

  const btnMyTasks = document.getElementById("btn-my-tasks");
  btnMyTasks.addEventListener("click", () => {
    window.location.href = "./minhas-tarefas.html";
  });

  const tabela = document.querySelector(".tabela-tarefas");
  const container = tabela.parentElement;

  const ciclo = JSON.parse(localStorage.getItem("ciclo")) || {};
  const tarefasDoCiclo = ciclo.tarefasDoCiclo || [];

  const tabelaBody = document.querySelector(".tabela-tarefas tbody");
  tabelaBody.innerHTML = "";

  tarefasDoCiclo.forEach((tarefa) => {
    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = tarefa.nome;

    const tdPeso = document.createElement("td");
    tdPeso.textContent = tarefa.peso === "1" ? "Leve" : tarefa.peso === "2" ? "Médio" : "Pesado";
    tdPeso.classList.add(`peso-${tarefa.peso}`);

    const tdResponsavel = document.createElement("td");
    tdResponsavel.textContent = tarefa.responsavelNome;

    const tdStatus = document.createElement("td");
    tdStatus.textContent = tarefa.status;
    if (tarefa.status === "Concluída") {
      tdStatus.classList.add("tarefa-concluida");
    }
    if (tarefa.status === "Em andamento") {
      tdStatus.classList.add("tarefa-em-andamento");
    }

    const tdAcoes = document.createElement("td");

    // Botão de concluir tarefa
    const btnConcluir = document.createElement("button");
    btnConcluir.classList.add("btn-concluir");
    btnConcluir.textContent = "✅";
    if (tarefa.status === "Concluída") {
      btnConcluir.disabled = true;
      btnConcluir.classList.add("btn-concluida");
    }
    btnConcluir.addEventListener("click", () => {
      const ciclo = JSON.parse(localStorage.getItem("ciclo")) || {};
      const tarefasDoCiclo = ciclo.tarefasDoCiclo || [];
      const tarefaIndex = tarefasDoCiclo.findIndex((t) => t.id === tarefa.id);
      if (tarefaIndex !== -1) {
        tarefasDoCiclo[tarefaIndex].status = "Concluída";
        tarefasDoCiclo[tarefaIndex].dataFim = new Date().toLocaleDateString();
        localStorage.setItem("ciclo", JSON.stringify(ciclo));
        window.location.reload();
      }
    });
    tdAcoes.appendChild(btnConcluir);

    // Botão de editar tarefa
    const btnEditar = document.createElement("button");
    btnEditar.classList.add("btn-editar");
    btnEditar.textContent = "✏️";
    btnEditar.addEventListener("click", () => {
      const tarefaId = tarefa.id;
      window.location.href = `editar-tarefa.html?id=${tarefaId}`;
    });
    tdAcoes.appendChild(btnEditar);

    // Botão de informações da tarefa
    const btnInfos = document.createElement("button");
    btnInfos.classList.add("btn-infos");
    btnInfos.textContent = "ℹ️";
    btnInfos.addEventListener("click", () => {
      const tarefaId = tarefa.id;
      window.location.href = `instrucoes.html?id=${tarefaId}`;
    });
    tdAcoes.appendChild(btnInfos);

    tr.appendChild(tdNome);
    tr.appendChild(tdResponsavel);
    tr.appendChild(tdPeso);
    tr.appendChild(tdStatus);
    tr.appendChild(tdAcoes);

    tabelaBody.appendChild(tr);

  }
);

// cria botao de interromper ciclo
const btnInterromper = document.createElement("button");
btnInterromper.classList.add("btn-interromper");
btnInterromper.textContent = "❌ Interromper Ciclo";

btnInterromper.addEventListener("click", () => {
  const cicloAtual = JSON.parse(localStorage.getItem("ciclo")) || {};
  const tarefasDoCiclo = cicloAtual.tarefasDoCiclo || [];

  const tarefasParaHistorico = tarefasDoCiclo.map((tarefa) => {
    if (tarefa.status === "Em andamento") {
      tarefa.status = "Interrompida";
      tarefa.dataFim = new Date().toLocaleDateString();
    }
    return tarefa;
  }
  );

  const historico = JSON.parse(localStorage.getItem("historicoTarefas")) || [];
  localStorage.setItem("historicoTarefas",
    JSON.stringify([...historico, ...tarefasParaHistorico]));

    const ciclo = {
    ...cicloAtual,
    tarefasDoCiclo: [],
    status: "Nao iniciado",
    dataInicio: "",
    dataFim: "",
  };
  localStorage.setItem("ciclo", JSON.stringify(ciclo));
  window.location.href = "./historico-tarefas.html";
});
container.appendChild(btnInterromper);


  const dataInicio = ciclo.dataInicio;
  const dataFim = ciclo.dataFim;

  if (dataInicio && dataFim) {
    const divCicloAtivo = document.querySelector(".ciclo-ativo");

    const strong = document.createElement("strong");
    strong.textContent = `Ciclo ativo: ${formatarData(dataInicio)} até ${formatarData(dataFim)}`;

    divCicloAtivo.appendChild(strong);
  }

  function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })
      .replace(/(^\w{1})|(\s\w{1})/g, l => l.toUpperCase());
  }


});
