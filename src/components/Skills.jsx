const skillsTop = [
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
]

const skillsBottom = [
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
]

export default function Skills() {
  return (
    <section className="w-full bg-slate-950 py-24 flex flex-col items-center gap-16 overflow-hidden">
      <div>
        <h1 className="text-4xl font-bold text-white">My Skills</h1>
      </div>
      {/* TOP */}
      <div className="relative w-full max-w-6xl overflow-hidden
      [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
      [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">

        <div className="flex w-max gap-12 animate-scrollLeft">
          {[...skillsTop, ...skillsTop].map((skill, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-32 h-32 rounded-3xl 
              bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <img src={skill.img} className="w-14 h-14" />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative w-full max-w-6xl overflow-hidden
      [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
      [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">

        <div className="flex w-max gap-12 animate-scrollRight">
          {[...skillsBottom, ...skillsBottom].map((skill, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-32 h-32 rounded-3xl 
              bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <img src={skill.img} className="w-14 h-14" />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
