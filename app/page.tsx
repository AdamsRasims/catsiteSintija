import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf2e6] text-[#3a2418]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-10 bg-gradient-to-b from-[#f3ddbb] to-[#fbf2e6]">
        <span className="uppercase tracking-[0.3em] text-sm text-[#a35d33] font-semibold mb-3">
          Kaķu audzētava
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#5c331b] mb-4">
          Mīlestībā audzēti kaķēni
        </h1>
        <p className="max-w-xl text-[#6b4a34] text-lg mb-8">
          Mēs audzējam veselus, sirsnīgus un rūpīgi kopjamus kaķēnus mājīgā vidē.
          Katrs kaķēns tiek audzināts ar mīlestību un rūpīgu uzraudzību.
        </p>

        <div className="relative">
          <Image
            src="/cats.jpg"
            alt="Mūsu kaķēni"
            width={800}
            height={500}
            className="rounded-3xl shadow-2xl ring-4 ring-[#e8c397]"
            priority
          />
        </div>
      </section>

      {/* Info cards */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-6 py-14">
        <div className="bg-white/60 rounded-2xl p-6 shadow-sm border border-[#e8c397]">
          <h3 className="text-xl font-semibold text-[#a35d33] mb-2">Par mums</h3>
          <p className="text-[#6b4a34]">
            Mūsu audzētava rūpējas par kaķu labbūtību, veselību un socializāciju
            jau no pirmajām dzīves dienām.
          </p>
        </div>
        <div className="bg-white/60 rounded-2xl p-6 shadow-sm border border-[#e8c397]">
          <h3 className="text-xl font-semibold text-[#a35d33] mb-2">Kaķēni</h3>
          <p className="text-[#6b4a34]">
            Kaķēni tiek nodoti jaunajām mājām veseli, vakcinēti un ar
            veterinārārsta apskates dokumentiem.
          </p>
        </div>
        <div className="bg-white/60 rounded-2xl p-6 shadow-sm border border-[#e8c397]">
          <h3 className="text-xl font-semibold text-[#a35d33] mb-2">Aprūpe</h3>
          <p className="text-[#6b4a34]">
            Katrs kaķēns aug mājas apstākļos, ar rotaļām un pastāvīgu cilvēku
            uzmanību, lai kļūtu par lielisku ģimenes locekli.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="flex flex-col items-center gap-4 pb-16 px-6 text-center">
  <h2 className="text-2xl font-semibold text-[#5c331b]">
    Interesē kaķēns? Sazinieties ar mums!
  </h2>

  <a
    href="tel:+37127070181"
    className="inline-flex items-center gap-2 bg-[#a35d33] hover:bg-[#8a4c28] text-white text-xl font-semibold px-8 py-4 rounded-full shadow-lg transition"
  >
    📞 +371 27 070 181
  </a>
</section>

      <footer className="text-center text-sm text-[#a3785c] pb-6">
        © {new Date().getFullYear()} Kaķu audzētava. Visas tiesības aizsargātas.
      </footer>
    </main>
  );
}