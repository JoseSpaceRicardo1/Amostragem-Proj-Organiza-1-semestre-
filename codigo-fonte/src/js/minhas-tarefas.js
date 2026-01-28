document.addEventListener('DOMContentLoaded', () => {
    gerarTabelaTarefas();
});

function gerarTabelaTarefas() {
    const tabela = document.querySelector('.tabela-tarefas tbody');
    tabela.innerHTML = '';

    const ciclo = JSON.parse(localStorage.getItem('ciclo')) || {};
    const pessoas = ciclo.pessoasDoCiclo || [];
    const tarefas = ciclo.tarefasDoCiclo || [];

    const pessoaLogada = pessoas.find(p => p.logado === true);

    if (!pessoaLogada) {
        tabela.innerHTML = `
            <tr>
                <td colspan="2">Nenhum usuário logado.</td>
            </tr>
        `;
        return;
    }

    const tarefasFiltradas = tarefas.filter(t => t.responsavelId === pessoaLogada.id);

    if (tarefasFiltradas.length === 0) {
        tabela.innerHTML = `
            <tr>
                <td colspan="2">Nenhuma tarefa encontrada para o usuário logado.</td>
            </tr>
        `;
        return;
    }

    tarefasFiltradas.forEach(tarefa => {
        const estaConcluida = tarefa.status === 'Concluída'; // <-- com acento correto

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${tarefa.nome}</td>
            <td>
                <select class="status-select" data-tarefa-id="${tarefa.id}" ${estaConcluida ? 'disabled' : ''}>
                    <option value="">Selecione</option>
                    <option value="Concluída" ${tarefa.status === 'Concluído' ? 'selected' : ''}>Concluído</option>
                    <option value="Em andamento" ${tarefa.status === 'Em andamento' ? 'selected' : ''}>Em andamento</option>
                </select>
            </td>
        `;

        tabela.appendChild(tr);
    });

    adicionarListenersDeStatus();
}

function adicionarListenersDeStatus() {
    const selects = document.querySelectorAll('.status-select');

    selects.forEach(select => {
        select.addEventListener('change', (event) => {
            const tarefaId = Number(event.target.getAttribute('data-tarefa-id'));
            const novoStatus = event.target.value;

            const ciclo = JSON.parse(localStorage.getItem('ciclo')) || {};
            const tarefas = ciclo.tarefasDoCiclo || [];

            const index = tarefas.findIndex(t => t.id === tarefaId);
            if (index !== -1) {
                tarefas[index].status = novoStatus;
                ciclo.tarefasDoCiclo = tarefas;
                localStorage.setItem('ciclo', JSON.stringify(ciclo));

                // Se ficou concluído, desabilita
                if (novoStatus === 'Concluída') {
                    event.target.disabled = true;
                }
            }
        });
    });
}
