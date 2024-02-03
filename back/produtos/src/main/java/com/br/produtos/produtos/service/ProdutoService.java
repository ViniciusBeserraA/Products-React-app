package com.br.produtos.produtos.service;

import com.br.produtos.produtos.model.Produto;
import com.br.produtos.produtos.model.ResponseModel;
import com.br.produtos.produtos.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private ResponseModel responseModel;

    public List<Produto> listar(){
        return produtoRepository.findAll();
    }

    public ResponseEntity<?> cadastrarAlterar(Produto produto, String action){
       if(produto.getName().equals("")){
           responseModel.setMessage("Nome do produto é obrigatório.");
           return new ResponseEntity<>(responseModel, HttpStatus.BAD_REQUEST);
       } else if (produto.getMark().equals("")) {
           responseModel.setMessage("Marca do produto é obrigatório.");
           return new ResponseEntity<>(responseModel, HttpStatus.BAD_REQUEST);
       }else{
           if(action.equals("Cadastrar")){
               return new ResponseEntity<>(produtoRepository.save(produto), HttpStatus.CREATED);
           }else{
               return new ResponseEntity<>(produtoRepository.save(produto), HttpStatus.OK);
           }
       }
    }

    public ResponseEntity<ResponseModel> removerProduto(long id){
        produtoRepository.deleteById(id);
        responseModel.setMessage("Produto excluido com sucesso. -> " + id);
        return new ResponseEntity<>(responseModel, HttpStatus.OK);
    }
}
