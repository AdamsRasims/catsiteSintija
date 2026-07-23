import Image from "next/image";

const PHONE_DISPLAY = "+371 27 070 181";
const PHONE_HREF = "tel:+371 27 070 181";

const kittens = [
  { src: "/images/k1.jpg", alt: "AmberSoul kaķēns Nr. 1" },
  { src: "/images/k2.jpg", alt: "AmberSoul kaķēns Nr. 2" },
  { src: "/images/k3.jpg", alt: "AmberSoul kaķēns Nr. 3" },
  { src: "/images/k4.jpg", alt: "AmberSoul kaķēns Nr. 4" },
  { src: "/images/k5.jpg", alt: "AmberSoul kaķēns Nr. 5" },
  { src: "/images/k6.jpg", alt: "AmberSoul kaķēns Nr. 6" },
  { src: "/images/k7.jpg", alt: "AmberSoul kaķēns Nr. 7" },
  { src: "/images/k8.jpg", alt: "AmberSoul kaķēns Nr. 8" },
];

export default function Home() {
  return (
    <main>
      {/* ---------- HEADER ---------- */}
      <header className="fixed top-0 inset-x-0 z-30 flex items-center justify-between px-6 md:px-[6vw] py-4 bg-sage-deep/90 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-black shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="AmberSoul logotips"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="font-display italic text-cream text-lg tracking-wide">
            AmberSoul
          </span>
        </div>
        <a
          href={PHONE_HREF}
          className="text-cream text-sm md:text-base font-medium border border-cream/30 rounded-sm px-4 py-2 hover:border-cream transition-colors"
        >
          📞 {PHONE_DISPLAY}
        </a>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="relative min-h-screen flex items-end bg-sage-deep overflow-hidden">
        <Image
          src="/images/k4.jpg"
          alt="AmberSoul abesīniešu kaķēns"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-deep/15 via-sage-deep/35 to-sage-deep/95" />

        <div className="relative z-10 w-full px-6 md:px-[6vw] pb-16 md:pb-20 pt-32 text-cream">
          <div className="text-copper-light text-xs md:text-sm tracking-[0.22em] uppercase font-semibold mb-4">
            AmberSoul · Abesīniešu kaķu audzētava · Latvija
          </div>
          <h1 className="font-display font-semibold text-4xl md:text-6xl lg:text-7xl leading-[1.02] max-w-2xl">
            Katrs kaķēns aug mīlestībā, pirms nonāk pie jums
          </h1>
          <p className="font-display italic text-paper text-lg md:text-xl mt-5 max-w-md">
            Rūpīgi izvēlēti pāri, veselības pārbaudes un mājas audzināšana.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href={PHONE_HREF}
              className="bg-copper hover:bg-copper-light transition-colors text-cream font-semibold px-8 py-4 rounded-sm inline-flex items-center gap-2"
            >
              📞 {PHONE_DISPLAY}
            </a>
            <a
              href="#kakeni"
              className="border border-cream/45 hover:border-cream transition-colors text-cream font-medium px-8 py-4 rounded-sm"
            >
              Skatīt kaķēnus
            </a>
          </div>
        </div>
      </section>

      {/* ---------- EAR DIVIDER ---------- */}
      <div className="block w-full h-[34px] bg-cream">
        <svg viewBox="0 0 400 34" preserveAspectRatio="none" className="w-full h-full block">
          <polygon
            fill="#EAE2CC"
            points="0,34 0,20 14,0 28,20 42,4 56,20 70,0 84,20 98,4 112,20 126,0 140,20 154,4 168,20 182,0 196,20 210,4 224,20 238,0 252,20 266,4 280,20 294,0 308,20 322,4 336,20 350,0 364,20 378,4 392,20 400,10 400,34"
          />
        </svg>
      </div>

      {/* ---------- PAR MUMS ---------- */}
      <section className="px-6 md:px-[6vw] py-20 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16">
        <div>
          <div className="text-copper text-xs tracking-[0.22em] uppercase font-semibold mb-2">
            Par audzētavu
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl max-w-[16ch] mb-5">
            Kaislība pret šķirni, kas jūtama katrā sīkumā
          </h2>
          <p className="text-ink-soft max-w-[52ch]">
            AmberSoul audzē abesīniešu kaķēnus mājas apstākļos — bez būriem, ar
            cilvēku klātbūtni no pirmās dienas. Katrs kaķēns aug kopā ar māti,
            tiek socializēts ar ikdienas skaņām un rosību, lai jaunajās mājās
            iejustos droši un mierīgi.
          </p>
        </div>
        <div className="border-t border-ink/15">
          <div className="flex justify-between items-baseline gap-4 py-5 border-b border-ink/15">
            <span className="font-display text-3xl text-copper">12+</span>
            <span className="text-sm text-ink-soft text-right max-w-[22ch]">
              nedēļas kaķēns paliek pie mums, pirms dodas mājās
            </span>
          </div>
          <div className="flex justify-between items-baseline gap-4 py-5 border-b border-ink/15">
            <span className="font-display text-3xl text-copper">100%</span>
            <span className="text-sm text-ink-soft text-right max-w-[22ch]">
              veterinārārsta pārbaudīti un vakcinēti
            </span>
          </div>
          <div className="flex justify-between items-baseline gap-4 py-5 border-b border-ink/15">
            <span className="font-display text-3xl text-copper">❤</span>
            <span className="text-sm text-ink-soft text-right max-w-[22ch]">
              audzēti ģimenes mājās, nevis audzētavas būros
            </span>
          </div>
        </div>
      </section>

      {/* ---------- KAĶĒNI GALERIJA ---------- */}
      <section id="kakeni" className="bg-paper px-6 md:px-[6vw] py-20 md:py-24">
        <div className="text-copper text-xs tracking-[0.22em] uppercase font-semibold mb-2">
          Kaķēni
        </div>
        <h2 className="font-display font-semibold text-3xl md:text-4xl mb-3">
          AmberSoul saime
        </h2>
        <p className="text-ink-soft max-w-[50ch] mb-10">
          Katram kaķēnam ir savs raksturs — daži zinātkāri un rotaļīgi, citi
          klusāki un maigi. Sazinieties, lai uzzinātu, kurš no viņiem šobrīd
          meklē savas jaunās mājas.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {kittens.map((kitten) => (
            <div
              key={kitten.src}
              className="relative aspect-[3/4] overflow-hidden bg-sage-deep group"
            >
              <Image
                src={kitten.src}
                alt={kitten.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- KĀPĒC MĒS ---------- */}
      <section className="px-6 md:px-[6vw] py-20 md:py-24 grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16">
        <div>
          <div className="text-copper text-xs tracking-[0.22em] uppercase font-semibold mb-2">
            Kāpēc mēs
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">
            Godīgi, caurspīdīgi, ar rūpēm par katru kaķēnu
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-[2.4rem_1fr] gap-5 py-6 border-t border-ink/15">
            <span className="font-display italic text-copper text-2xl">01</span>
            <div>
              <h4 className="font-semibold mb-1">Pilna veselības vēsture</h4>
              <p className="text-sm text-ink-soft">
                Katram kaķēnam līdzi dodam vakcinācijas pasi, veterinārā
                izmeklējuma slēdzienu un ēdināšanas grafiku.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[2.4rem_1fr] gap-5 py-6 border-t border-ink/15">
            <span className="font-display italic text-copper text-2xl">02</span>
            <div>
              <h4 className="font-semibold mb-1">
                Sazvanāmi arī pēc pirkuma
              </h4>
              <p className="text-sm text-ink-soft">
                Atbildam uz jautājumiem par uzturu, uzvedību un pieradināšanu
                arī pēc tam, kad kaķēns jau ir jūsu mājās.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[2.4rem_1fr] gap-5 py-6 border-t border-ink/15 border-b">
            <span className="font-display italic text-copper text-2xl">03</span>
            <div>
              <h4 className="font-semibold mb-1">
                Redzat vecākus klātienē
              </h4>
              <p className="text-sm text-ink-soft">
                Pirms lēmuma varat iepazīties ar kaķēna māti un tēvu, apskatīt
                apstākļus, kādos viņi aug.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- KONTAKTI ---------- */}
      <section className="bg-sage-deep text-cream text-center px-6 py-20 md:py-24">
        <div className="text-copper-light text-xs tracking-[0.22em] uppercase font-semibold mb-3">
          Kontakti
        </div>
        <h2 className="font-display font-semibold text-3xl md:text-5xl mb-4">
          Interesē kaķēns? Zvaniet vai rakstiet
        </h2>
        <p className="text-paper max-w-[40ch] mx-auto mb-8">
          Labprāt pastāstīsim vairāk par pieejamajiem kaķēniem un atbildēsim
          uz visiem jautājumiem.
        </p>
        <a
          href={PHONE_HREF}
          className="font-display text-3xl md:text-4xl border-b-2 border-copper-light pb-1 hover:text-copper-light transition-colors"
        >
          {PHONE_DISPLAY}
        </a>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-sage-deep text-cream/50 text-center text-sm pb-8 pt-2">
        AmberSoul · Abesīniešu kaķu audzētava · Latvija
      </footer>
    </main>
  );
}