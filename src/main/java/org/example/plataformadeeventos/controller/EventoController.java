package org.example.plataformadeeventos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Hello-world")
public class EventoController {
    @GetMapping("/get")
    public String helloWorld(){
        return "Hello World";
    }
}
