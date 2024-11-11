package org.example.plataformadeeventos.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.time.LocalTime;

@Setter
@Getter
@Table
@Entity
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String image;
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataEvent;

    @JsonFormat(pattern = "HH:mm")
    private LocalTime horaEvent;

    private String localEvent;
}