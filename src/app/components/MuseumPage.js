import Image from "next/image";

export default function MuseumPage() {
  const exhibitions = [
    { image: "/mus1.jpg", alt: "Expo 1", label: "1Q" },
    { image: "/mus2.jpg", alt: "Expo 2", label: "1Q" },
    { image: "/mus3.jpg", alt: "Expo 3", label: "1Q" }
  ];

  return (
    <div>
      {/* Section Expositions */}
      <section className="bg-black py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Expositions</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {exhibitions.map((expo, index) => (
            <div key={index} className="relative">
              <img
                src={expo.image}
                alt={expo.alt}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              {expo.label && (
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {expo.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section Mariage Coutumier */}
      <section className="relative h-screen bg-black text-white flex items-center justify-start">
        <Image
          src="/maria.jpg"
          alt="Parcours permanent"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 max-w-4xl ml-23 px-6 md:px-12">
          <p className="text-lg uppercase tracking-widest">Tradition</p>
          <h1 className="text-5xl font-bold mt-2 max-w-xl">
            Manifestation du mariage coutumier au Gabon
          </h1>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg shadow-lg flex items-center hover:bg-gray-200 transition">
            Découvrir <span className="ml-2">➝</span>
          </button>
        </div>
        <span className="absolute top-4 right-6 text-white text-lg z-20">1/5</span>
      </section>
    </div>
  );
}
