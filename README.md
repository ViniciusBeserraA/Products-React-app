# Cadastro de produtos
Esse projeto visa aprofundar estudos usando tecnologias de front (ReactJs, Bootstrap) e back-end (Java com Spring Boot), criando um CRUD de produtos, com validações aplicadas na API e no Front.

## Tecnologias Utilizadas

- **Backend:** Spring Boot
- **Frontend:** ReactJs
- **Banco de Dados:** MySQL (ou qualquer outro banco de dados relacional)
- **Controle de Versão:** Git

## Funcionalidades

- Cadastro de produtos
- Listagem de produtos
- Alteração de registro de produtos
- Remoção de produtos

## Requisitos

- **Java 11+**
- **MySQL (ou outro banco de dados relacional)**
- **Maven**

- 2. **Ler Produtos**
   - **URL:** `/`
   - **Método:** `GET`
   - **Descrição:** Retorna a lista de todos os produtos.
   - **Corpo da Requisição:**
 
      ```json
     {
       "id": "27",
       "name": "Smartfone Xiaomi Redmi 13",
       "mark": "Xiaomi"
     }
     ```

3. **Atualizar Produto**
   - **URL:** `/alterar`
   - **Método:** `PUT`
   - **Descrição:** Atualiza um produto existente.
   - **Corpo da Requisição:**
     
     ```json
     {
       "id": "27",
       "name": "Iphone 14",
       "mark": "Apple"
     }
     ```

4. **Deletar Produto**
   - **URL:** `/remover{id}`
   - **Método:** `DELETE`
   - **Descrição:** Deleta um produto existente.





   
