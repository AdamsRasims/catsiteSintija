import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white p-6 gap-6">
      <Image
  src="/cats.jpg"
  alt="Our kittens"
  width={800}
  height={500}
  className="rounded-2xl shadow-lg"
  priority
/>

<a
  href="tel:+37122103333"
  className="text-2xl font-semibold tracking-wide hover:text-pink-400 transition"
>
  📞 +371 221 033 33
</a>
    </main>
  );
}