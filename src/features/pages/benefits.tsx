import { Clock, ShieldCheck, Sparkles,/*  Heart */ } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Ahorrá tiempo",
    description: "Dejá de escribir código boilerplate para cada endpoint de tu API.",
  },
  {
    icon: ShieldCheck,
    title: "Menos errores",
    description: "El tipado estático de TypeScript previene errores en tiempo de desarrollo.",
  },
  {
    icon: Sparkles,
    title: "Código más limpio",
    description: "Mantené tu codebase organizado y fácil de mantener.",
  },
  /* {
    icon: Heart,
    title: "Mejor DX",
    description: "Disfrutá de autocompletado, navegación y documentación inline.",
  }, */
]

export function Benefits() {
  return (
    <section id="benefits" className="border-t border-border bg-secondary/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Beneficios
          </h2>
          <p className="text-lg text-muted-foreground">
            Por qué los desarrolladores eligen Laravel React Client Generator.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
