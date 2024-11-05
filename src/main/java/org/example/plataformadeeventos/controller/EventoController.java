package org.example.plataformadeeventos.controller;

import org.example.plataformadeeventos.model.Evento;
import org.example.plataformadeeventos.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventoController {

    @Autowired
    private EventoService eventoService;

    /*@GetMapping("/home")
    public List<Evento> listarTodos(){
        return eventoService.listarTodos();
    }*/
    @PostMapping ("/register")
    public Evento inserir(@RequestBody Evento evento) {
        return eventoService.inserir(evento);
    }

    @GetMapping("/")
    public List<Evento> listarTodos(){
        return eventoService.listarTodos();
    }

    /*@PostMapping ("/")
    public Evento alterar(@RequestBody Evento evento) {
        return eventoService.inserir(evento);
    }*/

    @GetMapping("/delete/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id) {
        eventoService.excluir(id);
        return ResponseEntity.ok().build();
    }
}
