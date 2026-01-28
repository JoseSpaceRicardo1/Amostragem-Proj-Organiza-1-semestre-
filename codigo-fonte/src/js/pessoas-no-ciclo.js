
document.addEventListener('DOMContentLoaded', function() {
  const cicloData = JSON.parse(localStorage.getItem("ciclo")) || {};
  const container = document.getElementById('tabela-pessoas-container');
  const pessoasDoCiclo = cicloData.pessoasDoCiclo || [];

  if (pessoasDoCiclo.length > 0) {
      document.querySelector('.pessoas-encontradas-text').textContent += `: ${pessoasDoCiclo.length}`;
      const tabelaHTML = `
          <div class="tabela-pessoas">
              <div class="cabecalho-tabela">
                  <div class="coluna-nome">Nome</div>
                  <div class="coluna-email">E-mail</div>
              </div>
              ${pessoasDoCiclo.map(pessoa => `
                  <div class="linha-pessoa">
                      <div class="coluna-nome">${pessoa.nome || 'Não informado'}</div>
                      <div class="coluna-email">${pessoa.email || 'Não informado'}</div>
                  </div>
              `).join('')}
          </div>
      `;

      container.innerHTML = tabelaHTML;
  } else {
      container.innerHTML = '<p class="mensagem-vazio">Nenhuma pessoa encontrada no ciclo</p>';
  }

  const voltarBtn = document.querySelector(".voltar");
  voltarBtn.addEventListener("click", () => {
    if (cicloData.tarefasDoCiclo.length > 0) {
      window.location.href = "ciclo-ativo.html";
    } else {
      window.location.href = "iniciar-ciclo.html";
    }
  });
});