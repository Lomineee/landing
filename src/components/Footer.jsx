export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">

        <h3 className="text-2xl font-bold text-white">
          Makasih yang udah mampir
        </h3>

        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Semoga web ini menginspirasi kalian buat belajar frontend juga, dan inget, jangan takut buat eksperimen sama kode kalian. Kadang, dari situ lah hal-hal keren itu muncul.
        </p>

        <div className="mt-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Agustia Permana. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
