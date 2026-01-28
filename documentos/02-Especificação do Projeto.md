# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Usuário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Integrante do círculo familiar</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1.Acesso simplificado a gestão de tarefas domésticas;
2.Utilizar ambientes digitais que esteja familiarizado;
3.Garantir uma distribuição justa de responsabilidades;
4.Otimizar o tempo;
5.Monitorar o cumprimento das tarefas.
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
|Usuário|Delegar tarefas automaticamente e de forma aleatória.|Evitar conflitos familiares já que a divisão é feita pelo sistema|
|Usuário|Atribuir peso de dificuldade a cada tarefa.|Avaliar a distribuição das tarefas e identificar possíveis ajustes.|
|Usuário|Garantir que todas as tarefas sejam distribuídas de forma rotativa.|Distribuir de maneira justa e reduzir a sobrecarga de alguns membros. |
|Usuário|Ter acesso a tarefas realizadas e não realizadas de outros membros.|Facilitar a organização e possibilitar ajustes na distribuição das tarefas|
|Usuário|Acessar histórico de tarefas executadas.|Avaliar a distribuição das tarefas e identificar possíveis ajustes.|
|Usuário|Quero visualizar quem é responsável por cada tarefa.|Reduzir o risco de tarefas ficarem pendentes visto que cada membro sabe exatamente quem é o responsável.|
|Usuário|Saber qual membro executou a tarefa anteriormente.|Esclarecer dúvidas sobre a execução de determinada atividade. |
|Usuário|Sugerir instruções ou dicas para ajudar os membros a executarem suas tarefas da melhor forma possível.|Flexibilizar a execução e possibilitar a aprendizado de novas habilidades.|
|Usuário|Instruções acessíveis para a execução das tarefas, considerando diferentes necessidades dos moradores.|Para garantir que todos os usuários, incluindo deficiência visual, auditiva ou cognitiva, consigam compreender e executar as tarefas de maneira ágil e eficiente.|

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-----------|---------------------------------|----|
|RF-01|O sistema deve permitir que cada tarefa tenha um nível/peso de dificuldade atribuída (exemplo: fácil, médio, difícil).|Alta|
|RF-02|O usuário deve poder cadastrar novas tarefas, informando nome, descrição e peso e também permitir que o usuário exclua ou edite tais tarefas.|Alta|
|RF-03|O sistema deve distribuir automaticamente as tarefas entre os membros.|Alta|
|RF-04|O sistema deve considerar o peso da tarefa na distribuição para equilibrar a carga entre os membros.|Alta|
|RF-05|O sistema deve monitorar a distribuição das tarefas e garantir que todos os membros realizem cada tarefa pelo menos uma vez.|Alta|
|RF-06|O sistema deve permitir o cadastro de usuários.|Alta|
|RF-07|O sistema deve permitir a marcação de tarefa concluída pelos usuários.|Média|
|RF-08|O sistema deve permitir a exibição de instruções em formato de texto, áudio e imagens para garantir acessibilidade a todos os usuários e que os usuários adicionem ou editem tais instruções.|Média|
|RF-09|O sistema deve exibir um dashboard com as tarefas concluídas de cada usuário.|Média|
|RF-10|O sistema deve disponibilizar um histórico de todas as tarefas realizadas e não realizadas, permitindo a consulta por tarefa e responsável.|Média|
|RF-11|O sistema deve permitir o acompanhamento do status das tarefas.|Baixa|
|RF-12|O sistema deve gerar relatórios de desempenho.|Baixa|
|RF‑13|	O sistema deve permitir que o usuário faça login utilizando e‑mail e senha válidos.	|Alta|
|RF‑14|	O sistema deve permitir que o usuário altere a senha e em caso de esquecimento, solicite a redefinição de senha, enviando um link ou nova senha para o e‑mail cadastrado.	|Alta|
|RF‑15|	O sistema deve permitir que o usuário adicione membros (usuários já cadastrados) a um ciclo de tarefas, visando compor o grupo de alocação.	|Alta|
|RF‑16|O sistema deve exibir a lista de membros incluídos no ciclo de tarefas corrente, permitindo ao usuário conferir quem está participando.		|Média|


### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|-------------|-------------------------|----|
| RNF-01 |O sistema deve garantir a segurança dos dados dos usuários.|Alta|
| RNF-02 |A interface deve ser simples e intuitiva, garantindo que qualquer membro da família possa usá-la facilmente.|Alta|
| RNF-03 |As operações de cadastro, edição e exclusão de tarefas devem ser instantâneas e refletidas imediatamente na interface.|Alta|
| RNF-04 |O sistema deve impedir a duplicação de tarefas idênticas para evitar inconsistências no armazenamento.|Alta|
| RNF-05 |O sistema deve funcionar de forma responsiva, garantindo boa performance mesmo em dispositivos móveis.|Média|
| RNF-06 |A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge.|Média|
| RNF-07 |A aplicação deve ser publicada em um ambiente acessível público na Internet. |Baixa|
| RNF-08 |A aplicação deve ter bom nível de contraste entre os elementos da tela. |Baixa|


