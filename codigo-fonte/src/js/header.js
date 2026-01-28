class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Carrega CSS externo
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = '../css/header.css';

    // HTML do componente
    this.shadowRoot.appendChild(styleLink);
    this.shadowRoot.innerHTML += `
      <header class="header">
        <a class="logo" href="#">
          <img src="../assets/imgs/logo.png" alt="Logo" />
        </a>
        <div class="perfil-container">
          <svg class="perfil-avatar" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path fill="none" d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0M20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5" />
            <path fill="#fcb653" d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.9 13.9 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3q.418.457.87.87q.14.124.28.242q.48.415.99.782c.044.03.084.069.128.1v-.012a13.9 13.9 0 0 0 16 0v.012c.044-.031.083-.07.128-.1q.51-.368.99-.782q.14-.119.28-.242q.451-.413.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0" />
          </svg>
          <h4 class="perfil-nome">Carregando...</h4>

          <div class="perfil-configuracao" id="config-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zm1.225-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5" />
            </svg>

            <div class="dropdown-menu" id="dropdown">
              <ul>
                <li class="dropdown-item" id="perfil-btn">Perfil</li>
                <li class="dropdown-item" id="pessoas-ciclo-btn">Pessoas no ciclo</li>
                <li class="dropdown-item" id="logout-btn">Sair</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  connectedCallback() {
    this.updateProfileName();
    this.setupEventListeners();
    window.addEventListener('storage', () => this.updateProfileName());
  }

  updateProfileName() {
    try {
      const cicloData = JSON.parse(localStorage.getItem('ciclo'));
      const nomeElement = this.shadowRoot.querySelector('.perfil-nome');

      if (!cicloData || !cicloData.pessoasDoCiclo) {
        nomeElement.textContent = 'Visitante';
        return;
      }

      const pessoaLogada = cicloData.pessoasDoCiclo.find(pessoa => pessoa.logado);
      nomeElement.textContent = pessoaLogada?.nome || 'Visitante';
    } catch (error) {
      console.error('Erro ao atualizar nome:', error);
      this.shadowRoot.querySelector('.perfil-nome').textContent = 'Erro';
    }
  }

  setupEventListeners() {
    const configIcon = this.shadowRoot.getElementById('config-icon');
    const dropdown = this.shadowRoot.getElementById('dropdown');
    const logoutBtn = this.shadowRoot.getElementById('logout-btn');
    const perfilBtn = this.shadowRoot.getElementById('perfil-btn');
    const pessoasCicloBtn = this.shadowRoot.getElementById('pessoas-ciclo-btn');

    // Toggle dropdown
    configIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    // Fechar ao clicar fora
    document.addEventListener('click', () => {
      dropdown.classList.remove('show');
    });

    // Logout
    logoutBtn.addEventListener('click', () => {
      this.handleLogout();
    });

    // Redirecionar para editar perfil
    perfilBtn.addEventListener('click', () => {
      this.handleProfileClick();
    });

    // Redirecionar para pessoas no ciclo
    pessoasCicloBtn.addEventListener('click', () => {
      window.location.href = 'pessoas-no-ciclo.html';
    });
  }

  handleProfileClick() {
    const cicloData = JSON.parse(localStorage.getItem('ciclo'));
    const pessoaLogada = cicloData?.pessoasDoCiclo.find(p => p.logado);
      const perfilId = pessoaLogada?.id;
      window.location.href = 'editar-perfil.html?id=' + perfilId;
  }

  handleLogout() {
    try {
      const cicloData = JSON.parse(localStorage.getItem('ciclo'));

      if (cicloData?.pessoasDoCiclo) {
        cicloData.pessoasDoCiclo.forEach(p => p.logado = false);
        localStorage.setItem('ciclo', JSON.stringify(cicloData));
        window.location.href = '../index.html';
      }
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  }
}

customElements.define('app-header', HeaderComponent);