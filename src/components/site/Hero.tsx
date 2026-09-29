import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

const STATS = [
  { valor: "4.9★", etiqueta: "Valoración de clientes" },
  { valor: "1 min", etiqueta: "Para reservar una mesa" },
  { valor: "7 días", etiqueta: "De antelación máxima" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-paper">
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-stone">
                <span className="inline-block h-[3px] w-10 bg-accent"></span>
                Restaurante en {CONFIG.zona}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-6xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-8xl">
                Cocina de
                <br />
                producto.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">
                Menú del día y temporada, sin estridencias. Elige tu hora y
                siéntate a disfrutar: {CONFIG.nombre}, en {CONFIG.ciudad}.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#reserva"
                  className="btn-sheen inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-accent hover:text-ink"
                >
                  Reservar mesa
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center border border-ink bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition-all hover:bg-ink hover:text-paper"
                >
                  <Phone className="mr-2 h-4 w-4 text-accent" aria-hidden="true" />
                  Llamar · {CONFIG.telefono}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t-2 border-ink pt-8">
                {STATS.map((stat) => (
                  <div key={stat.etiqueta}>
                    <p className="font-display text-3xl font-extrabold leading-none text-ink">{stat.valor}</p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-stone">{stat.etiqueta}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-3 bg-deep"
                aria-hidden="true"
              ></div>
              <div className="relative overflow-hidden bg-white">
                <img
                  src="img/haircut-close.jpg"
                  alt="Detalle de un plato"
                  className="h-[430px] w-full object-cover contrast-100"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}