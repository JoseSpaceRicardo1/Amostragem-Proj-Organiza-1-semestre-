document.addEventListener("DOMContentLoaded", function () {
  const instrucoes = document.getElementById("instrucoes");

  const tarefasDoCiclo = JSON.parse(localStorage.getItem("ciclo")) || {};
  const tarefas = tarefasDoCiclo.tarefasDoCiclo || [];

  const findInstrucoes = () => {
    const id = new URLSearchParams(window.location.search).get("id");

    const tarefa = tarefas.find((t) => Number(t.id) === Number(id));

    if (!tarefa) {
      alert("Tarefa não encontrada");
      window.location.href = "ciclo-ativo.html";
      return;
    }

    if (instrucoes) {
      instrucoes.value = tarefa.descricao || "";
    } else {
      console.error("Element with ID 'instrucoes' not found.");
    }
  }
  findInstrucoes();
});
