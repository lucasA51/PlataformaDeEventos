package org.example.plataformadeeventos.controller;

import org.example.plataformadeeventos.model.Evento;
import org.example.plataformadeeventos.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @Autowired
    private EventoService eventoService;

    @GetMapping("/home")
    public String home(Evento evento) {
        return "home";
    }
    @GetMapping("/login")
    public String login() {
        return "login";
    }
}
