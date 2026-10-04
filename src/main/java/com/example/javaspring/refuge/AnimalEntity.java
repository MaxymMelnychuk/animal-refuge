package com.example.javaspring.refuge;

import jakarta.persistence.*;

@Entity
@Table(name = "animals")
public class AnimalEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String type;
    private float taille;

    public AnimalEntity() {

    }

    public AnimalEntity(String type, String nom, float taille) {

        this.type = type;
        this.nom = nom;
        this.taille = taille;
    }

    public Long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getType() {
        return type;
    }

    public float getTaille() {
        return taille;
    }

    @Override
    public String toString() {
        return type + " " + nom + " est de " + taille + " cm";
    }
}