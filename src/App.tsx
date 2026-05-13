import { useState } from "react";
import { z } from "zod";

const pilotoSchema = z.object({
  nombre: z.string().min(3, "El nombre del piloto debe tener al menos 3 caracteres"),
  email: z.string().email("El email no tiene un formato válido"),
  categoria: z.enum(["1 DAM", "2 DAM"], {
    errorMap: () => ({ message: 'La categoría debe ser "1 DAM" o "2 DAM"' }),
  }),
});

export default function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = () => {
    const datos = { nombre, email, categoria };
    const resultado = pilotoSchema.safeParse(datos);

    if (resultado.success) {
      alert("Piloto registrado con éxito!\n\n" + JSON.stringify(resultado.data, null, 2));
    } else {
      alert("Error:\n\n" + resultado.error.issues.map((e) => e.message).join("\n"));
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">

      {/* Línea superior neón roja */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-red-600 shadow-[0_0_12px_2px_rgba(220,38,38,0.7)]" />

      <div className="group bg-zinc-900 border border-zinc-700 hover:border-red-600 rounded-2xl shadow-2xl w-full max-w-md p-8 transition-all duration-300 hover:shadow-[0_0_30px_2px_rgba(220,38,38,0.2)]">

        {/* Cabecera */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-zinc-800 border border-zinc-700 group-hover:border-red-600 transition-all duration-300 mb-3">
            <span className="text-2xl">🏎️</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Registro <span className="text-red-500">Karts</span> Sevilla
          </h1>
          <p className="text-zinc-500 text-xs mt-1 uppercase tracking-widest">Inscripción de pilotos</p>
          <div className="mt-3 mx-auto w-12 h-[2px] bg-red-600 rounded-full shadow-[0_0_6px_rgba(220,38,38,0.8)]" />
        </div>

        {/* Campos */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
              Nombre del piloto
            </label>
            <input
              type="text"
              placeholder="Ej: Fernando Alonso"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:shadow-[0_0_8px_rgba(220,38,38,0.4)] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
              Email
            </label>
            <input
              type="text"
              placeholder="piloto@kartsevilla.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:shadow-[0_0_8px_rgba(220,38,38,0.4)] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
              Categoría
            </label>
            <input
              type="text"
              placeholder='"1 DAM" o "2 DAM"'
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:shadow-[0_0_8px_rgba(220,38,38,0.4)] transition-all duration-200"
            />
          </div>
        </div>

        {/* Divisor */}
        <div className="my-6 border-t border-zinc-800" />

        {/* Botón */}
        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold py-3 rounded-lg text-sm uppercase tracking-widest transition-all duration-200 shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] cursor-pointer"
        >
          Validar y guardar
        </button>

        {/* Footer */}
        <p className="text-center text-zinc-600 text-xs mt-5 tracking-wide">
          carreraKarts © 2025 — Sevilla
        </p>

      </div>
    </div>
  );
}