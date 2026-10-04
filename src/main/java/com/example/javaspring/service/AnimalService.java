package com.example.javaspring.service;

import com.example.javaspring.dto.AnimalRequest;
import com.example.javaspring.refuge.AnimalEntity;
import com.example.javaspring.refuge.AnimalRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AnimalService {

    private final AnimalRepository animalRepository;

    public AnimalService(AnimalRepository animalRepository) {
        this.animalRepository = animalRepository;
    }

    public String hello() {
        return "miaou";
    }

    public ArrayList<AnimalEntity> getAnimaux() {
        return new ArrayList<>(animalRepository.findAll());
    }

    public String ajouterAnimal(AnimalRequest request) {

        String type = request.getType().toLowerCase();

        if (!type.equals("chien") && !type.equals("chat")) {
            return "Type d'animal inconnu";
        }

        AnimalEntity animal = new AnimalEntity(type, request.getNom(), request.getTaille());

        animalRepository.save(animal);

        return "Animal ajouté : " + animal;
    }
}
