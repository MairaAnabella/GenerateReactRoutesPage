import { Search, Cog, Code2 } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Detecta tus rutas",
    description:
      "La extensión analiza tu proyecto Laravel y encuentra todas las rutas definidas en tus archivos.",
  },
  {
    icon: Cog,
    step: "02",
    title: "Genera el cliente API",
    description:
      "Con un comando, genera automáticamente un cliente tipado con todos tus endpoints.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Usalo en tu frontend",
    description:
      "Importá el cliente en tu proyecto React y disfrutá del autocompletado y tipado completo.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-secondary/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Cómo funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Tres pasos simples para transformar tu flujo de desarrollo.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-border md:block" />
              )}

              <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-border bg-card">
                <step.icon className="h-10 w-10 text-primary" />
              </div>

              <div className="mb-2 text-sm font-medium text-primary">
                Paso {step.step}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
