function listaDeTarefas() {

  let inputNome = document.getElementById("nome")
  let tarefa = inputNome.value.trim()

  let inputPeso = document.getElementById("peso")
  let peso = inputPeso.value

  let inputDescricao = document.getElementById("descricao")
  let descricao = inputDescricao.value

  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefasCadastradas")) || [];

    const jaCadastrado = tarefasCadastradas.some(t => t.nome === tarefa && t.peso === peso);

    if (jaCadastrado) {
        alert('Tarefa já cadastrada com esse peso!')
        return;
        }

  if (!tarefa && !peso) {
      alert('informe uma tarefa e selecione um peso')
      return;

  } else if (!tarefa && peso) {
      alert('Tarefa vazia! Informe uma tarefa')
      return;

  } else if (tarefa && !peso) {
      alert('Selecione um peso !')
      return;

  }


  let tarefaObjeto = {
      id: Date.now(),
      nome: tarefa,
      peso: peso,
      descricao: descricao
  }

    tarefasCadastradas.push(tarefaObjeto)
    localStorage.setItem("tarefasCadastradas", JSON.stringify(tarefasCadastradas))
    inputNome.value = ""
    inputPeso.value = ""
    inputDescricao.value = ""
    inputNome.focus()
    inputPeso.selectedIndex = 0
    inputDescricao.value = ""
    inputDescricao.focus()
}
const ciclo = JSON.parse(localStorage.getItem("ciclo")) || {};

const voltarBtn = document.getElementById("btn-voltar");
  voltarBtn.addEventListener("click", () => {
    if (ciclo.tarefasDoCiclo.length > 0) {
      window.location.href = "ciclo-ativo.html";
    } else {
      window.location.href = "iniciar-ciclo.html";
    }
  });
