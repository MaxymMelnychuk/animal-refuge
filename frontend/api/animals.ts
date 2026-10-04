export type Animal = {
    nom: string;
    taille: number;
    type: string;
};

export type AnimalRequest = {
    type: "chat" | "chien";
    nom: string;
    taille: number;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function getAnimals(): Promise<Animal[]> {
    const response = await fetch(`${API_URL}/api/animals`);

    if (!response.ok) {
        throw new Error("Impossible de récupérer les animaux");
    }

    return response.json();
}

export async function createAnimal(
    animal: AnimalRequest
): Promise<string> {
    const response = await fetch(`${API_URL}/api/animals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(animal),
    });

    if (!response.ok) {
        throw new Error("Impossible de créer l'animal");
    }

    return response.text();
}