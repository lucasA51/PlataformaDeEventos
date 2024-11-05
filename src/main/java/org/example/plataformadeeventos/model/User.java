package org.example.plataformadeeventos.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
public class User {

    // Getters e setters
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @Getter
    private String email;
    @Setter
    @Getter
    private String name;
    private String user;
    @Setter
    @Getter
    private String password;


    public User() {
    }

    public String getLastname() {
        return user;
    }

    public void setLastname(String lastname) {
        this.user = lastname;
    }

}
