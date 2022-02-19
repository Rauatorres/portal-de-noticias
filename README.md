# Como rodar o portal de notícias em sua máquina:

## Instalar:

  * Node.Js
  * MySQL
  * Módulos do Node.Js:
    * express
    * consign
    * ejs
    * express-validator
    * mysql

## Como instalar:

### Instalação do Node e MySQL:

Windows:

* Node.Js:

  1. Baixe o Node no seguinte link, de preferência a versão recomedada 16.14.0: <https://nodejs.org/en/>
  2. Execute o instalador baixado, deixe marcadas as oções de instalação padrão e instale normalmente

* Mysql:
  
  1. Baixe o MySQL pelo seguinte link: <https://dev.mysql.com/downloads/file/?id=510038> - Clique em "no thanks, just start my download" no fim da página 
  2. Execute o instalador baixado
  3. Em tipos de instalação, selecione a instalação personalizada (custom)
  4. Selecione o mysql server e o mysql shell e clique em next
  5. Selecione todas as dependências caso houverem e clique em execute, depois em next
  6. Selecione todas as opções padrão até as configurações de conta (accounts and roles)
  7. Defina a senha do seu usuário root (recomendo a senha '123') e clique em next
    * **Atenção** - O site está configurado para connectar no usuário root com a senha 123. Se for definida outra senha para o usuário root, o programa não irá 
    funcionar corretamente se não for alterada a senha nas configurações do programa. Mais abaixo irei ensinar onde alterar a senha para conexão com o banco de dados nas
    configurações do site
  8. Deixe as opções padrão até o final e finalize a instalação

Linux:

* Node.Js:
  1. Instale o gerenciador de versões do node nvm executando o código mais apropriado para a sua versão do linux no terminal:
 
     ```
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
     ```

     ```
     wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
     ```
  2. Execute o seguinte código para instalar a versão 16.14.0 do node:
    
      ```
      nvm install 16.14.0
      ```
    
 * MySQL:
  1. Ao invés de instalar o mysql, instale o mariadb que funciona do mesmo jeito que o mysql, mas funciona melhor em sistemas linux
  2. Execute os seguintes códigos no terminal (baseadas distribuições baseadas em ubuntu e debian, caso esteja usando outro tipo de versão, adapte o código):

      ```
      sudo apt update
      ```

      ```
      sudo apt install mariadb-server
      ```
  3. Inicie o mariadb com o seguinte código:
      ```
      sudo mysqld_safe
      ```
      
 ## Módulos do Node.Js
 
 1. Após baixar o projeto na sua máquina e instalar o node.js e o mysql, navegue até a pasta onde está instalado o projeto através do terminal utilizando o comando 'cd'
 2. Instale os módulos utilizando os códigos no terminal:
    * Express:
      
      ```
      npm install express --save
      ```
    * Consign:
      
      ```
      npm install consign --save
      ```
    * Ejs:
      
      ```
      npm install ejs --save
      ```
    * Driver Mysql:
      
      ```
      npm install mysql --save
      ```
    * Express-Validator:
      
      ```
      npm install express-validator@5.3.1 --save
      ```
      
## Configurações e Rodando o projeto

1. Caso tenha escolhido outra senha para o usuário root ao instalar e configurar o mysql, abra o arquivo dbconnection.js na pasta config utilizando um editor de texto de sua 
preferência e edite o campo password na linha 7 trocando 123 pela senha que você definiu.

Por exemplo:

  * Para a senha 'pizza':

      ```
      password: "pizza",
      ```
      
2. Adicionando banco de dados e tabela notícias no mysql:
  
  Windows:
  
  * Abra o menu iniciar e procure pelo mysql command line client
  * Abra o mysql command line client e digite a senha que você definiu para o root
  * Digite os seguintes comandos: 

        
        create database portaldenoticias;
        use portaldenoticias;
        create table noticias(
            id int primary key auto_increment,
            titulo varchar(30) not null,
            autor varchar (20) not null,
            noticia text not null,
            resumo varchar(200) not null,
            data_criacao datetime default current_timestamp
        );
        
   
  Linux:
      
  * Abra o terminal e digite mysql -u root -p
  * Digite a senha que você definiu para root
  * Digite os seguintes comandos:
    
        
        create database portaldenoticias;
        use portaldenoticias;
        create table noticias(
            id int primary key auto_increment,
            titulo varchar(30) not null,
            autor varchar (20) not null,
            noticia text not null,
            resumo varchar(200) not null,
            data_criacao datetime default current_timestamp
        );
        
        
3. Iniciando o server e abrindo o site:
    
    1. Abra o terminal e navegue até a pasta onde está armazenado o projeto utilizando o comando cd
    2. Digite o seguinte comando:
        
       ```
       node app.js
       ```
    3. Abra o navegador e digite na url localhost:3000
