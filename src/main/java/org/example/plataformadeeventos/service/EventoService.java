package org.example.plataformadeeventos.service;

import org.example.plataformadeeventos.model.Evento;
import org.example.plataformadeeventos.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public List<Evento> listarTodos() {
        return eventoRepository.findAll();
    }
    
    public Evento inserir(Evento evento) {
        return eventoRepository.save(evento);
    }

    public Evento alterar(Evento evento) {
        return eventoRepository.saveAndFlush(evento);
    }

    public void excluir(Long id) {
        Evento evento = eventoRepository.findById(id).get();
        eventoRepository.delete(evento);
    }
}
