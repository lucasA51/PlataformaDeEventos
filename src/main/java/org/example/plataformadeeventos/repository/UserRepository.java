package org.example.plataformadeeventos.repository;

import org.example.plataformadeeventos.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}