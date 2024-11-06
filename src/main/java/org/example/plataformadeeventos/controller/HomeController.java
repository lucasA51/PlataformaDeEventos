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

    // Mapeando o caminho / para exibir a página inicial (home)
    @GetMapping("/")
    public String home(Evento evento) {
        // Retorna o nome do arquivo HTML que será renderizado pela view
        return "cadastroevento";  // Este é o arquivo home.html que o Spring procurará
    }

    // Mapeando o caminho /login para a página de login
    @GetMapping("/login")
    public String login() {
        return "login";  // Retorna o arquivo login.html
    }

    // Mapeando o caminho /home para outra página (caso você precise manter isso)
    @GetMapping("/home")
    public String homePage() {
        return "home";  // Retorna o arquivo home.html, como você já tinha configurado
    }
}
