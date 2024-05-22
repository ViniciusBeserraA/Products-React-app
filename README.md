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
   - **URL:** `/api/products`
   - **Método:** `GET`
   - **Descrição:** Retorna a lista de todos os produtos.

3. **Atualizar Produto**
   - **URL:** `/api/products/{id}`
   - **Método:** `PUT`
   - **Descrição:** Atualiza um produto existente.
   - **Corpo da Requisição:**
     
     ```json
     {
       "name": "Nome Atualizado do Produto",
       "description": "Descrição Atualizada do Produto",
       "price": 150.0,
       "quantity": 5
     }
     ```

4. **Deletar Produto**
   - **URL:** `/api/products/{id}`
   - **Método:** `DELETE`
   - **Descrição:** Deleta um produto existente.
     
      ```json
     {
       "name": "Nome Atualizado do Produto",
       "description": "Descrição Atualizada do Produto",
       "price": 150.0,
       "quantity": 5
     }
     ```




   
