package org.example.plataformadeeventos.service;

import org.example.plataformadeeventos.exception.EventoNotFoundException;
import org.example.plataformadeeventos.model.Evento;
import org.example.plataformadeeventos.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventoService {

    private final EventoRepository eventoRepository;

    @Autowired
    public EventoService(EventoRepository eventoRepository) {
        this.eventoRepository = eventoRepository;
    }

    public List<Evento> listarTodos() {
        return eventoRepository.findAll();
    }

    public Evento inserir(Evento evento) {
        return eventoRepository.save(evento);
    }

    public Evento alterar(Long id, Evento evento) {
        Evento eventoExistente = eventoRepository.findById(id)
                .orElseThrow(() -> new EventoNotFoundException(id));

        eventoExistente.setTitle(evento.getTitle());
        eventoExistente.setImage(evento.getImage());
        eventoExistente.setDescription(evento.getDescription());
        eventoExistente.setDataEvent(evento.getDataEvent());
        eventoExistente.setLocalEvent(evento.getLocalEvent());

        return eventoRepository.save(eventoExistente);
    }

    public void excluir(Long id) {
        Evento evento = eventoRepository.findById(id)
                .orElseThrow(() -> new EventoNotFoundException(id));

        eventoRepository.delete(evento);
    }
}
