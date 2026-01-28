# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/08-Plano%20de%20Testes%20de%20Software.md"> Plano de Testes de Software</a>

Os testes funcionais realizados na aplicação web são descritos a seguir.

<ol>
  <li> CT-01: Tela Login - Verificar se os links da página de login estão funcionando corretamente, redirecionando o usuário para a página de recuperação de senha e de cadastro.
   Responsável: José Ricardo Feitosa Marcelino.

Responsável: José Ricardo Feitosa Marcelino..
  <p>Verificação dos links da página de login:</p>
   

https://github.com/user-attachments/assets/ea699c45-5f39-4627-9b32-3a5a8a40b565


 </li>
 <hr>

 <li> CT-02: Recuperação de senha - Verificar se o sistema envia corretamente a solicitação de redefinição de senha para o e-mail informado.
   Responsável: José Ricardo Feitosa Marcelino.

   <p>Verificação de envio da solicitação de redefiniçao de senha:</p>


https://github.com/user-attachments/assets/76334811-c477-4410-936d-77ddc0e68496

  </li>
 <hr>

<li> CT-03: Cadastro de Novo Usuário - Verificar se o sistema permite o cadastro de um novo usuário com nome, e-mail, senha e confirmação de senha.

Responsável: Nathalia Felix Rosa Candioto e Maria Luiza Campos Pereira.


https://github.com/user-attachments/assets/64503209-332b-4ea8-91cc-252d1c981d42


  <p>Verificação de cadastro de novo usuário</p>

  </li>
 <hr>

<li> CT-04: Tela sem tarefa adicionada - Verificar a exibição correta da tela quando não há tarefas adicionadas.
   Responsável: Mariana Rocha Silva.

<p>Verificação da exibição correta da tela quando nao há tarefas adcionadas</p>


https://github.com/user-attachments/assets/49d5a4c1-e0ff-4edd-9eae-81cda4f8a2b2


  </li>
 <hr>

<li> CT-05: Adicionar tarefas. Verificar se o sistema permite adicionar tarefas com nome, descrição e peso.
  Responsável: Nathalia Felix Rosa Candioto e Mariana Rocha Silva

  <p>As tarefas devem ser exibidas em uma nova tela que contenha lista com nome, peso e opção de excluir</p>
  <br>
  CT-05.1: Exclusão de tarefas. Verificar se o sistema permite excluir tarefas da lista.
  Responsável: Mariana Rocha Silva.

  <p>A tarefa deve ser removida imediatamente da lista. </p>

  

https://github.com/user-attachments/assets/05759199-ec75-4627-af38-1230237a2aab

</li>
<hr>

<li> CT-06: Verificar se o sistema permite adicionar um novo membro ao grupo através do e-mail.
Responsável: Maria Luiza Campos Pereira

<p>O sistema deve validar o e-mail e adicionar o membro com sucesso ao grupo, exibindo confirmação.	</p>


https://github.com/user-attachments/assets/c721d7b8-5d2b-461e-bac5-7018642b28df
 
</li>
<hr>

<li> CT-07: Consulta ao Histórico de Tarefas. Verificar se o sistema permite visualizar o histórico de tarefas realizadas e não realizadas, por tarefa e responsável.
Responsável: Mariana Rocha Silva

<p>Sistema deve exibir histórico com filtro por tarefa e responsável.</p>

https://github.com/user-attachments/assets/fef347fb-3f3d-4ef5-97b5-9681da248d9d

</li>
<hr>

<li> CT-08:Menu de configurações. Verificar se o menu com opções "Perfil", "Pessoas no ciclo" e "Sair" é exibido corretamente ao clicar no ícone do usuário.
Responsável: Mariana Rocha Silva
<p>O menu suspenso com as três opções é exibido corretamente.</p></p:>

  https://github.com/user-attachments/assets/78b4fe9d-a58e-44f2-bcb6-4bb179e15470

<br>

CT-08.1: Editar perfil do usuário. Validar se o usuário consegue editar nome, e-mail e senha	
Responsável: Nathalia Felix Rosa Candioto e Maria Luiza Campos Pereira
<p>Os dados são atualizados e salvos corretamente no sistema.	</p>

https://github.com/user-attachments/assets/6a14d080-b46d-4a61-b646-e24d0bec3d6c

<br>

CT-08.2: Excluir conta. Verificar se o botão "Excluir conta" remove o perfil do sistema.
Responsável: Nathalia Felix Rosa Candioto e Maria Luiza Campos Pereira
<p>A conta do usuário é excluída e o sistema redireciona para a tela inicial.</p>

https://github.com/user-attachments/assets/57f49187-e654-4792-b176-f6140ab806b9

<br>

CT-08.3: Listar pessoas no ciclo. Verificar se a lista de pessoas do ciclo é exibida corretamente.
Responsável: Mariana Rocha Silva
<p>A tela exibe corretamente a lista de pessoas com nome e e-mail.</p>

https://github.com/user-attachments/assets/86bd28dc-8e32-4db6-8df5-be28b451af26

</li>
<hr>

<li> CT-09: Ciclo Ativo de Atividades. Verificar se o sistema distribui automaticamente as tarefas entre os membros de forma equilibrada com base no peso.	
Responsável: Maria Luiza Campos Pereira
  
<p>Tarefas devem ser distribuídas entre os membros considerando o peso para equilíbrio da carga.</p>

https://github.com/user-attachments/assets/709aa1e3-62d4-47a8-88df-70badb4a4e2f

</li>
<hr>

<li> CT-10: Verificar se o sistema permite editar corretamente os campos de uma tarefa já cadastrada.	
Responsável: Nathalia Felix Rosa Candioto
  
<p>A tarefa deve ser atualizada corretamente no sistema com os novos dados informados.
Usuário deve receber feedback visual (ex: mensagem ou redirecionamento).</p>



https://github.com/user-attachments/assets/9746eb04-f9f4-42c9-82f9-5ce45725fad8


</li>
<hr>

<li> CT-11: Verificar se o sistema exibe corretamente as instruções de uso para os usuários.
Responsável: José Ricardo Feitosa Marcelino
  
<p>As instruções devem ser apresentadas de forma legível e completa. O botão "← Voltar" deve redirecionar corretamente à tela anterior.</p>

https://github.com/user-attachments/assets/41b02b12-75bf-4bee-b462-004294a6ddc9

</li>
<hr>



</ol>
