export default function Home() {
  return (
    <section className="min-h-screen bg-[#2F80ED] flex items-center justify-center text-center px-6">
      <div className="max-w-4xl">

        <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-[6px_6px_0px_#000]">
          Hello Guys 
        </h1>

        <p className="mt-6 text-white text-xl md:text-2xl">
          i'm Lomine (Agustia Permana)
        </p>

        <a
  href="#about"
  className="mt-8 inline-block bg-[#FFC700] text-black px-8 py-3 rounded-full font-bold border-2 border-black shadow-[5px_5px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
> About me</a>

      </div>
    </section>
  );
}
