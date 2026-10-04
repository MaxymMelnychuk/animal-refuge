package com.example.javaspring.controller;

import com.example.javaspring.dto.AnimalRequest;
import com.example.javaspring.refuge.AnimalEntity;
import com.example.javaspring.service.AnimalService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AnimalController {

    private final AnimalService animalService;

    public AnimalController(AnimalService animalService) {
        this.animalService = animalService;
    }

    @GetMapping("/api/hello")
    public String hello() {
        return animalService.hello();
    }

    @GetMapping("/api/animals")
    public ArrayList<AnimalEntity> getAnimaux() {
        return animalService.getAnimaux();
    }

    @PostMapping("/api/animals")
    public String ajouterAnimal(@RequestBody AnimalRequest request) {
        return animalService.ajouterAnimal(request);
    }
}
