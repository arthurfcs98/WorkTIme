**RF (Requisitos funcionais)**

**RNF (Requisitos não funcionais)**

**RN (Regras de negocócios)**

# Cadastro de usuario

**RF** <br/>
Deve ser possível cadastrar um novo usuario. <br/>

**RN** <br/>
Não deve ser possível cadastrar um usuario com uma email já existente. <br/>

# Listagem de projetos

**RF** <br/>
Deve ser possível listar todos os projetos de um usuário. <br/>
Deve ser possível listar todos os projetos de um usuário pela sua data de criação. <br/>
Deve ser possível listar todos os projetos de um usuário nome. <br/>
Deve ser possível listar todos os projetos de um usuário area de atuação. <br/>

# Cadastro de projetos

**RF** <br/>
Deve ser possível cadastrar um novo projeto. <br/>

**RNF** <br/>
Necessario mandar a senha para cadastrar um novo projeto. <br/>

**RN** <br/>
Deve ser possível cadastrar mais de um projeto para o mesmo usuário.<br/>
Não deve ser possível cadastrar um projeto com a mesma descrição <br/>

# Lançamentos de Horas Trabalhadas

**RF** <br/>
Deve ser possivel iniciar um registro de horas trabalhadas <br/>
Dever ser possível finalizar um registro de horas trabalhadas <br/>

**RN** <br/>
O Usuario não pode começar uma nova sessão de trabalho caso ainda tenha alguma em aberta<br/>

# Gerar Relatório

**RF**<br/>
Deve ser possivel gerar um relatório das horas trablhadas por projeto <br/>
Deve ser possivel gerar um relatório das horas trablhadas por determinada quantidade de dias <br/>

**RFN**<br/>
O Relatório gerado devera ser um pdf<br/>
Utilizar alguma biblioteca para geração do pdf<br/>
Necessario mandar a senha para gerar um novo relatório. <br/>

**RN**<br/>
O Usuario não podera gerar um relatório caso nao tenha registros de horas trabalhadas em determinado projeto ou data<br/>
Não deve ser possível gerar relatórios com espaço de tempo menor que 1 dia<br/>
