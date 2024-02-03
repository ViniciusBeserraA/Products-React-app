package com.br.produtos.produtos.controller;
import com.br.produtos.produtos.model.Produto;
import com.br.produtos.produtos.model.ResponseModel;
import com.br.produtos.produtos.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;
    @GetMapping("/")
    public String rota(){
        return "API de produtos funcionando";
    }

    @GetMapping("/listar")
    public List<Produto> listar(){
        return produtoService.listar();
    }
    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Produto produto){
        return produtoService.cadastrarAlterar(produto, "cadastrar");
    }
    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody Produto produto){
        return produtoService.cadastrarAlterar(produto, "alterar");
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<ResponseModel> remover(@PathVariable long id){
        return produtoService.removerProduto(id);
    }
}
