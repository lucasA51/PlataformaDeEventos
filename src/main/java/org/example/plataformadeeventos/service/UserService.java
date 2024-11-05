package org.example.plataformadeeventos.service;

import org.example.plataformadeeventos.model.User;
import org.example.plataformadeeventos.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    //@Autowired
    //private PasswordEncoder passwordEncoder;

    public String registerNewUser(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "Usuário já registrado com esse email";
        }
        /*user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "Usuário registrado com sucesso";*/
        return "";
    }
}
