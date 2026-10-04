"use client";

import { useState, useEffect } from "react";
import { createAnimal, getAnimals, Animal } from "@/api/animals";

export default function AnimalForm() {
    const [type, setType] = useState<"chat" | "chien">("chien");
    const [nom, setNom] = useState("");
    const [taille, setTaille] = useState("");
    const [message, setMessage] = useState("");
    const [animals, setAnimals] = useState<Animal[]>([]);

    async function loadAnimals() {
        try {
            const data = await getAnimals();
            setAnimals(data);
        } catch (error) {
            console.error("Impossible de charger les animaux");
        }
    }

    useEffect(() => {
        getAnimals()
            .then((data) => setAnimals(data))
            .catch(() => console.error("Impossible de charger les animaux"));
    }, []);

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        try {
            const result = await createAnimal({
                type,
                nom,
                taille: Number(taille),
            });

            setMessage(result);
            setNom("");
            setTaille("");
            loadAnimals();
        } catch (error) {
            setMessage("Erreur lors de la création de l'animal");
        }
    }

    return (
        <div className="max-w-md space-y-6">
            <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-xl border p-6"
            >
                <h2 className="text-xl font-bold">
                    Ajouter un animal
                </h2>

                <div>
                    <label className="mb-1 block">
                        Type
                    </label>

                    <select
                        value={type}
                        onChange={(e) =>
                            setType(e.target.value as "chat" | "chien")
                        }
                        className="w-full rounded border p-2"
                    >
                        <option value="chien">Chien</option>
                        <option value="chat">Chat</option>
                    </select>
                </div>

                <div>
                    <label className="mb-1 block">
                        Nom
                    </label>

                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Rex"
                        className="w-full rounded border p-2"
                        required
                    />
                </div>

                <div>
                    <label className="mb-1 block">
                        Taille
                    </label>

                    <input
                        type="number"
                        value={taille}
                        onChange={(e) => setTaille(e.target.value)}
                        placeholder="45"
                        className="w-full rounded border p-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Ajouter
                </button>

                {message && (
                    <p className="text-sm">
                        {message}
                    </p>
                )}
            </form>

            <div className="rounded-xl border p-6">
                <h2 className="mb-4 text-xl font-bold">
                    Animaux dans le refuge ({animals.length})
                </h2>

                {animals.length === 0 ? (
                    <p className="text-gray-500">Aucun animal pour le moment.</p>
                ) : (
                    <ul className="space-y-2">
                        {animals.map((animal, index) => (
                            <li key={index} className="rounded border p-3">
                                <span className="font-semibold capitalize">{animal.type}</span> — {animal.nom} ({animal.taille} cm)
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}