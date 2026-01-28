# Programação de Funcionalidades

A seguir são descritas as telas da aplicação desenvolvida com base nos requisitos. Cada uma das telas é apresentada em termos de função, componentes que a integram e requisito(s) para o(s) qual(is) atende. O objetivo é demonstrar a relação entre o planejamento e a execução, bem como para garantir que os requisitos proposto na especificação do projeto foram atendidos e que as funções previstas foram desenvolvidas adequadamente considerando as limitações e complexidade. 

### **Tela 1**: Login

![image](https://github.com/user-attachments/assets/f06847c5-41b4-4034-9cc2-03027794be4f)
<p align="center"> <b>Figura 1-</b>Tela de Login</p>

#### Requisito atendido
RF‑13: O sistema deve permitir que o usuário faça login utilizando e‑mail e senha válidos. (Alta)<br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|styleLogin-forgot.css<br>index.html<br>login.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>Insira o e-mail e a senha nos campos indicados.<br>Clique em "Entrar" para acessar o sistema.<br>Caso tenha esquecido a senha, clique em "Esqueceu sua senha?".<br>Se ainda não tiver conta, clique em "Se cadastre agora!" para criar uma.|

#### Responsável
José Ricardo Feitosa Marcelino
___________________________________________________________________________________________________________________________________________________________________
### **Tela 2**: Esqueci minha senha
![image](https://github.com/user-attachments/assets/8ec06748-ba0e-42f5-93c0-4733bdd55e66)
<p align="center"> <b>Figura 2-</b>Tela de novo Usuário</p>

#### Requisito atendido
RF‑14: O sistema deve permitir que o usuário altere a senha e em caso de esquecimento, solicite a redefinição de senha, enviando um link ou nova senha para o e‑mail cadastrado. (Alta)<br><br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|esqueci-minha-senha.css<br>esqueci-minha-senha.html<br>.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>No campo E‑mail, digite o e‑mail que está cadastrado no sistema.<br>Clique no botão “Enviar”.<br>O sistema enviará automaticamente um e‑mail com a nova senha para o endereço informado.<br>Após receber o e‑mail, utilize a nova senha para retornar à tela de login e acesse editar perfil para criar uma nova senha.|


#### Responsável
José Ricardo Feitosa Marcelino

___________________________________________________________________________________________________________________________________________________________________

### **Tela 3**: Novo Usuário
![image](https://github.com/user-attachments/assets/62e97e2d-4a58-4c04-91ea-20ffe9d66c0f)
<p align="center"> <b>Figura 3-</b>Tela de novo Usuário</p>

#### Requisito atendido
RF-06: O sistema deve permitir o cadastro de usuários.(Alta)<br><br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|novo-usuario.css<br>novo-usuario.html<br>cadastro.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>Preencha os campos:<br>Nome: digite seu nome completo; E‑mail: informe um e‑mail válido; Senha: escolha uma senha segura; Confirmar senha: digite a mesma senha para confirmação.<br>Clique no botão “Cadastrar”, caso o cadastro seja bem‑sucedido, você será redirecionado para a tela de login.<br>Para retornar sem cadastrar, clique em “← Voltar”.|

#### Responsável
Nathalia Felix Rosa Candioto e Maria Luiza Campos Pereira
___________________________________________________________________________________________________________________________________________________________________
### **Tela 4**: Iniciar Ciclo
![image](https://github.com/user-attachments/assets/5819ba37-adad-4afb-b091-bd53ecf90e7b)
<p align="center"> <b>Figura 4-</b>Tela sem tarefa adicionada</p>

![image](https://github.com/user-attachments/assets/4c6fa01e-551f-409c-a251-32b141559227)
<p align="center"> <b>Figura 4.1-</b>Tela com tarefa adicionada</p>

#### Requisito atendido
RF-02: O usuário deve poder cadastrar novas tarefas, informando nome, descrição e peso e também permitir que o usuário exclua ou edite tais tarefas.(Alta)<br>
RF-03:O sistema deve distribuir automaticamente as tarefas entre os membros.	Alta)<br>
RF-04: O sistema deve considerar o peso da tarefa na distribuição para equilibrar a carga entre os membros.	(Alta)<br>
RF‑10: O sistema deve disponibilizar um histórico de todas as tarefas realizadas e não realizadas, permitindo a consulta por tarefa e responsável. (Média)<br>
<br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|iniciar-ciclo.css<br>iniciar-ciclo.html<br>iniciar-ciclo.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>Após fazer login, você é redirecionado automaticamente para a Tela Iniciar ciclo.<br>Selecione a Data de início do ciclo e a Data de término do ciclo para o novo período de execução das tarefas cadastradas.<br>Clique em “Adicionar Membro” para cadastrar participantes no ciclo atual.<br>Clique em “Adicionar Tarefa” para abrir o formulário de criação de tarefas com nível de peso.<br>Clique em “Ver Historico” para acessas atividades em execução e atividades de ciclos passados.<br>Apos adição de atividades, clique em "Inciar", desta maneiro o aplicativo iria fazer o sorteio das atividades para os membros cadastrados.|

#### Responsável
Mariana Rocha Silva
___________________________________________________________________________________________________________________________________________________________________
### **Tela 5**: Adicionar Membro
![image](https://github.com/user-attachments/assets/beb2e543-12d6-4544-9978-556cd15056ff)
<p align="center"> <b>Figura 5-</b>Adicionar Membro</p>

#### Requisito atendido
RF‑15: O sistema deve permitir que o usuário adicione membros (usuários já cadastrados) a um ciclo de tarefas, visando compor o grupo de alocação. (Alta)<br><br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|adicionar-membro.css<br>adicionar-membro.html<br>adicionar-membro.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>No campo E‑mail, digite o e‑mail do usuário já cadastrado que deseja incluir no ciclo.<br>Clique no ícone de lupa para validar se o e‑mail corresponde a um usuário que deseja.<br>Clique em “Adicionar” para incluir o membro no ciclo atual.<br> Use “← Voltar” para retornar à Tela Iniciar Ciclo sem adicionar membro|


#### Responsável
Maria Luiza Campos Pereira
___________________________________________________________________________________________________________________________________________________________________
### **Tela 6**: Adicionar Tarefas
![image](https://github.com/user-attachments/assets/1c5aa9b2-aec2-4f76-808e-88510a3a283d)
<p align="center"> <b>Figura 6-</b>Cadastro de Tarefas</p>

#### Requisito atendido
RF-01: O sistema deve permitir que cada tarefa tenha um nível/peso de dificuldade atribuída (exemplo: fácil, médio, difícil).	(Alta)<br>
RF-02: O usuário deve poder cadastrar novas tarefas, informando nome, descrição e peso e também permitir que o usuário exclua ou edite tais tarefas.(Alta)<br><br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|adicionar-tarefa.css<br>aadicionar-tarefa.html<br>adicionar-tarefa.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>Faça login e, na Tela Home, clique em “Adicionar Tarefa”.<br>No formulário que abrirá:<br>Nome: digite o título da tarefa.<br>Descrição: informe detalhes sobre a tarefa.<br>Peso: selecione a dificuldade (Fácil, Médio ou Difícil).<br>Clique em “Salvar” para cadastrar a tarefa.<br>Após confirmar, a lista de tarefas será atualizada automaticamente.|

#### Responsável
Nathalia Felix Rosa Candioto e Mariana Rocha Silva
___________________________________________________________________________________________________________________________________________________________________
### **Tela 7**: Visualização do Histórico de Tarefas
![image](https://github.com/user-attachments/assets/d66ec5af-6f85-486a-adb3-051e2360b5ba)
<p align="center"> <b>Figura 7-</b>Histórico</p>

#### Requisito atendido
RF-10:O sistema deve disponibilizar um histórico de todas as tarefas realizadas e não realizadas, permitindo a consulta por tarefa e responsável.(Média)<br>
RF-12:O sistema deve gerar relatórios de desempenho.	(Baixa)<br><br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|historicio-tarefa.css<br>historicio-tarefa.html<br>historicio-tarefa.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>Na Tela Home, clique em “Ver Histórico”. <br>O sistema abrirá historico-tarefas.html, exibindo uma tabela com as colunas:Tarefa; Responsável; Status (Concluída / Em andamento); Data<br>Para retornar à Tela Home, clique em “← Voltar”.|

#### Responsável
Mariana Rocha Silva
___________________________________________________________________________________________________________________________________________________________________
### **Tela 8**: Configuração do Usuário
![image](https://github.com/user-attachments/assets/6943784c-e431-4941-a637-6420bc59ca8e)
<p align="center"> <b>Figura 8-</b>Opções de configuração</p>

![image](https://github.com/user-attachments/assets/fac819b9-c078-47df-aca5-896c13cf5acc)
<p align="center"> <b>Figura 8.1-</b>Editar Perfil</p>

![image](https://github.com/user-attachments/assets/aff0fcc4-d6ed-4588-b1b9-0336981d7f84)
<p align="center"> <b>Figura 8.2-</b>Pessoas no Ciclo</p>

#### Requisito atendido
RF‑14: O sistema deve permitir que o usuário altere a senha e em caso de esquecimento, solicite a redefinição de senha, enviando um link ou nova senha para o e‑mail cadastrado. (Alta)
RF‑16:O sistema deve exibir a lista de membros incluídos no ciclo de tarefas corrente, permitindo ao usuário conferir quem está participando. (Média)<br><br><br>



| Editar Perfil               | Pessoas no Ciclo |
|----|----|
| **Artefatos da funcionalidade**| **Artefatos da funcionalidade**|
|editar-perfil.css<br>editar-perfil.html<br>editar-perfil.js|pessoas-no-ciclo.css<br>pessoas-no-ciclo.html<br>pessoas-no-ciclo.js|
|**Instruções de acesso**|**Instruções de acesso**|
|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>Clique no ícone de configurações no canto superior direito.<br>Selecione “Editar Perfil”.<br>Na tela, atualize os campos:Nome, E‑mail, Senha e Confirmar senha (opcional, somente se desejar trocar).<br>Clique em “Salvar” para aplicar as alterações.<br>Para excluir sua conta, clique em “Excluir conta”.<br>Para retornar sem alterações, clique em “← voltar”.|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>Clique no ícone de configurações no canto superior direito.<br>Selecione pessoas no ciclo.<br>Para retornar sem alterações, clique em “← voltar”.ocê sera direcionado a uma página de vizualização.<br>Para retornar, clique em “← voltar”.|<br>,br>

#### Responsável
 - Opções de configurações: Mariana Rocha Silva
 - Editar Perfil: Nathalia Felix Rosa Candioto e Maria Luiza Campos Pereira
 - Pessoas no Ciclo: Mariana Rocha Silva
   
___________________________________________________________________________________________________________________________________________________________________
### **Tela 10**: Ciclo Ativo de Atividades

![image](https://github.com/user-attachments/assets/6f73a076-a5ca-49d3-857e-aba3c8738b67)
<p align="center"> <b>Figura 10-</b>Ciclo de Atividades</p> 

#### Requisito atendido
RF-09: O sistema deve exibir um dashboard com as tarefas concluídas de cada usuário. (Média)<br>
RF-07:O sistema deve permitir a marcação de tarefa concluída pelos usuários.<br>
RF-11: O sistema deve permitir o acompanhamento do status das tarefas.	(Baixa)<br><br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|ciclo-ativo.css<br>ciclo-ativo.html<br>ciclo-ativo.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>Após a tela de iniciar ciclo em que se clicar em Iniciar o sistema iria direcionar para a tela de Ciclo Ativo.Ciclo ativo (datas de início e término)<br>Tabela com colunas: Tarefa, responsável, Status (Em andamento / Concluída), Ações (botão para marcar concluído, visualizar instruções e editar tarefa)<br>Para interromper totalmente o ciclo, clique em “Interromper Ciclo”. Isso encerrará o período corrente de distribuição de tarefas para todos os membros retortnando a tela home.|


#### Responsável
Mariana Rocha Silva
___________________________________________________________________________________________________________________________________________________________________
### **Tela 11**: Editar Tarefas
![image](https://github.com/user-attachments/assets/62e88dc8-f0f6-45f9-9982-623d806a968c)
<p align="center"> <b>Figura 11-</b>Editar Tarefas</p> 

#### Requisito atendido
RF-02: O usuário deve poder cadastrar novas tarefas, informando nome, descrição e peso e também permitir que o usuário exclua ou edite tais tarefas.	(Alta)<br>
RF-05: O sistema deve monitorar a distribuição das tarefas e garantir que todos os membros realizem cada tarefa pelo menos uma vez.<br><br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|editar-tarefa.css<br>editar-tarefa.html<br>editar-tarefa.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>Na tela de ciclo ativo, localize a tarefa desejada e clique em Editar (icone de "lápis")<br> Você será redirecionado para a página Editar Tarefa<br>Na tela não será permitido trocar o peso atribuido a tarefa para que não comprometa a distribuição inicial das atividades.<br>|


#### Responsável
Nathalia Felix Rosa Candioto
___________________________________________________________________________________________________________________________________________________________________
### **Tela 12**: Visualizar Instrução
![image](https://github.com/user-attachments/assets/e0c7ff78-a839-4df1-b143-875877069e64)
<p align="center"> <b>Figura 12-</b>Visualizar Instrução</p> 

#### Requisito atendido
RF-08: O sistema deve permitir a exibição de instruções em formato de texto, áudio e/ou imagens para garantir acessibilidade a todos os usuários e que os usuários adicionem ou editem tais instruções. (Média)<br><br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|instrucoes.css<br>instrucoes.html<br>instrucoes.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção)<br>Na tela de ciclo ativo, localize a tarefa desejada e clique em Instruções (icone de "i")<br> Você será redirecionado para a página Instruções<br>Na tela será exibido instruções de execução, dicas e conselhos sobre a tarefa.<br>||

#### Responsável
José Ricardo Feitosa Marcelino
___________________________________________________________________________________________________________________________________________________________________
### **Tela 13**: Minhas Tarefas

![image](https://github.com/user-attachments/assets/1d3fed02-fe8b-4dad-b199-ab8a29d1f759)
<p align="center"> <b>Figura 13-</b>Minhas Tarefas</p> 

#### Requisito atendido
RF-07: O sistema deve permitir a marcação de tarefa concluída pelos usuários.(Média)<br>
RF-11: O sistema deve permitir o acompanhamento do status das tarefas.	(Baixa)<br><br><br>

| **Artefatos da funcionalidade**| **Instruções de acesso**|
| ----- | ----------|
|minhas-tarefas.css<br>minhas-tarefas.html<br>.js|Abra um navegador de Internet e informe a seguinte URL: (Em construção).<br>Na tela de Ciclo ativo clique em “Minhas tarefas” para abrir o um painel de visualização das tarefas delegas e atualização dos status de cada atividade.|


#### Responsável
Maria Luiza Campos Pereira

### **Telas de Estrutura de Dados**:
Ciclo: 
![image](https://github.com/user-attachments/assets/bc7b64a7-5f84-4c15-99ef-60090b976380)

HistoricoTarefas:
![image](https://github.com/user-attachments/assets/18526f74-f71c-459f-87a6-8490a2f97f53)

TarefasCadastradas:
![image](https://github.com/user-attachments/assets/83e1453c-2db5-4756-aafb-24d9e0ac3d71)

UsuariosCadastrados:
![image](https://github.com/user-attachments/assets/96429b9a-baa8-44c6-b60a-41e3ec695554)


