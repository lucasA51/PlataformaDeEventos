package org.example.plataformadeeventos.controller;

import org.example.plataformadeeventos.model.Evento;
import org.example.plataformadeeventos.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/eventos")
public class EventoController {

    private final EventoService eventoService;

    @Autowired
    public EventoController(EventoService eventoService) {
        this.eventoService = eventoService;
    }

    @PostMapping
    public ResponseEntity<Evento> criarEvento(@RequestBody Evento evento) {
        Evento eventoCriado = eventoService.inserir(evento);
        return ResponseEntity.ok(eventoCriado); // Retorna o evento criado
    }

    @GetMapping
    public List<Evento> listarTodos() {
        return eventoService.listarTodos();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Evento> alterar(@PathVariable Long id, @RequestBody Evento evento) {
        Evento eventoAtualizado = eventoService.alterar(id, evento);
        return ResponseEntity.ok(eventoAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        eventoService.excluir(id);
        return ResponseEntity.noContent().build(); // Retorna status HTTP 204 (sem conteúdo)
    }
}
