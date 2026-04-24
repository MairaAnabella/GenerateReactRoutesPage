import { Zap, FileCode, FolderTree, Repeat } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Generación Automática",
    description:
      "Detecta tus rutas de Laravel y genera clientes API listos para usar en segundos.",
  },
  {
    icon: FileCode,
    title: "Tipado con TypeScript",
    description:
      "Cada endpoint incluye tipos completos para requests y responses. Autocompletado garantizado.",
  },
  {
    icon: FolderTree,
    title: "Organización por Recursos",
    description:
      "El código generado está organizado por controladores y recursos de tu API.",
  },
  {
    icon: Repeat,
    title: "Menos Código Repetitivo",
    description:
      "Olvidate de escribir fetch o axios para cada endpoint. Todo ya está hecho.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-6 md:py-13">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Todo lo que necesitás
          </h2>
          <p className="text-lg text-muted-foreground">
            Características diseñadas para mejorar tu flujo de trabajo como
            desarrollador.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
