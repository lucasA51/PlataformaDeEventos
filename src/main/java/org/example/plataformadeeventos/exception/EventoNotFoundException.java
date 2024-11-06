package org.example.plataformadeeventos.exception;

public class EventoNotFoundException extends RuntimeException {

    // Construtor que aceita o ID do evento
    public EventoNotFoundException(Long id) {
        super("Evento não encontrado com ID: " + id);
    }
}
