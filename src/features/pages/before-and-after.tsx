import { ArrowRight } from "lucide-react"

export function CodeExample() {
  return (
    <section id="code-example" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Antes y después
          </h2>
          <p className="text-lg text-muted-foreground">
            Mirá cómo se simplifica tu código con Laravel React Client
            Generator.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-center">
          {/* Before */}
          <div className="relative">
            <div className="absolute -left-3 -top-3 rounded-lg bg-red-500/20 px-3 py-1 text-sm font-medium text-red-400">
              Antes
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  api.ts
                </span>
              </div>
              <div className="p-6 font-mono text-sm">
                <pre className="overflow-x-auto">
                  <code>
                    <span className="text-muted-foreground">{"// "}</span>
                    <span className="text-red-400">Código manual y repetitivo</span>
                    {"\n\n"}
                    <span className="text-blue-400">const</span>
                    {" response = "}
                    <span className="text-blue-400">await</span>
                    {" axios."}
                    <span className="text-yellow-400">get</span>
                    {"("}
                    <span className="text-amber-400">{`'/api/users'`}</span>
                    {")"}
                    {"\n"}
                    <span className="text-blue-400">const</span>
                    {" users: "}
                    <span className="text-cyan-400">User</span>
                    {"[] = response.data"}
                    {"\n\n"}
                    <span className="text-blue-400">const</span>
                    {" res = "}
                    <span className="text-blue-400">await</span>
                    {" axios."}
                    <span className="text-yellow-400">get</span>
                    {"("}
                    <span className="text-amber-400">{`\`/api/users/\${id}\``}</span>
                    {")"}
                    {"\n"}
                    <span className="text-blue-400">const</span>
                    {" user: "}
                    <span className="text-cyan-400">User</span>
                    {" = res.data"}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Arrow for mobile */}
          <div className="flex justify-center md:hidden">
            <ArrowRight className="h-8 w-8 rotate-90 text-primary" />
          </div>

          {/* After */}
          <div className="relative">
            <div className="absolute -left-3 -top-3 rounded-lg bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
              Después
            </div>
            <div className="overflow-hidden rounded-xl border border-primary/50 bg-card shadow-lg shadow-primary/5">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  api.ts
                </span>
              </div>
              <div className="p-6 font-mono text-sm">
                <pre className="overflow-x-auto">
                  <code>
                    <span className="text-muted-foreground">{"// "}</span>
                    <span className="text-green-400">Limpio y tipado</span>
                    {"\n\n"}
                    <span className="text-blue-400">const</span>
                    {" users = "}
                    <span className="text-blue-400">await</span>
                    {" api."}
                    <span className="text-cyan-400">users</span>
                    {"."}
                    <span className="text-yellow-400">get</span>
                    {"()"}
                    {"\n\n"}
                    <span className="text-blue-400">const</span>
                    {" user = "}
                    <span className="text-blue-400">await</span>
                    {" api."}
                    <span className="text-cyan-400">users</span>
                    {"."}
                    <span className="text-yellow-400">show</span>
                    {"(id)"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
