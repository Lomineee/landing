const posts = [
  {
    title: "Gimana Caraku Bangun Landing Page Clean",
    desc: "Breakdown struktur layout, spacing, dan animasi biar keliatan mahal.",
    tag: "UI Design",
  },
  {
    title: "React + Tailwind Biar Ga Ribet",
    desc: "Setup simpel, config minimal, hasilnya tetep nendang.",
    tag: "Frontend",
  },
  {
    title: "Coming soon",
    desc: "",
    tag: "UX",
  },
]

export default function BlogSection() {
  return (
    <section className="w-full bg-slate-950 py-28 px-6" id="blog">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            Latest Blog
          </h2>
          <p className="text-slate-400 mt-4">
            experiment aja
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {posts.map((post, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl 
              bg-white/5 border border-white/10 
              backdrop-blur-xl 
              hover:-translate-y-3 
              transition duration-500"
            >
              <span className="text-xs text-blue-400 font-semibold">
                {post.tag}
              </span>

              <h3 className="text-xl font-bold text-white mt-4 group-hover:text-blue-400 transition">
                {post.title}
              </h3>

              <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                {post.desc}
              </p>

              <div className="mt-6 text-blue-400 text-sm font-semibold cursor-pointer">
                Read More →
              </div>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
