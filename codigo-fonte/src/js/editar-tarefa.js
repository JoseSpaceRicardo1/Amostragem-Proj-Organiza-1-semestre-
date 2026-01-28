
  document.addEventListener("DOMContentLoaded", function () {
    const inputNome = document.getElementById("nome");
    const inputPeso = document.getElementById("peso");
    const inputDescricao = document.getElementById("descricao");
    const btnSalvar = document.getElementById("btnSalvar");

    const findTarefa = () => {
      const id = new URLSearchParams(window.location.search).get("id");

      const ciclo = JSON.parse(localStorage.getItem("ciclo")) || {};
      const tarefasDoCiclo = ciclo.tarefasDoCiclo || [];

      const tarefa = tarefasDoCiclo.find((t) => String(t.id) === String(id));

      if (!tarefa) {
        alert("Tarefa não encontrada");
        window.location.href = "ciclo-ativo.html";
        return;
      }

      inputNome.value = tarefa.nome || "";
      inputPeso.value = tarefa.peso || "";
      inputDescricao.value = tarefa.descricao || "";

      btnSalvar.addEventListener("click", () => {
        tarefa.nome = inputNome.value.trim();
        tarefa.peso = inputPeso.value;
        tarefa.descricao = inputDescricao.value;

        if (!tarefa.nome && !tarefa.peso) {
          alert('Informe uma tarefa e selecione um peso');
          return;
        } else if (!tarefa.nome && tarefa.peso) {
          alert('Tarefa vazia! Informe uma tarefa');
          return;
        } else if (tarefa.nome && !tarefa.peso) {
          alert('Selecione um peso!');
          return;
        }

        const index = tarefasDoCiclo.findIndex((t) => Number(t.id) === Number(id));
        if (index !== -1) {
          tarefasDoCiclo[index] = tarefa;
          localStorage.setItem("ciclo", JSON.stringify({ ...ciclo, tarefasDoCiclo }));
          window.location.href = "ciclo-ativo.html";
        } else {
          alert("Erro ao salvar: tarefa não encontrada");
        }
      });
    };

    findTarefa();
  });
