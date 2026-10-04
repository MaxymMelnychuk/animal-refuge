import AnimalForm from "@/components/AnimalForm";

export default function Home() {
  return (
      <main className="min-h-screen p-10">
        <h1 className="mb-8 text-3xl font-bold">
          Refuge animalier
        </h1>

        <AnimalForm />
      </main>
  );
}
