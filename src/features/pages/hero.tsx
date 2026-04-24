"use client"

import { CodePreview } from "@/components/landing/codePreview"
import { Button } from "@/components/ui/button"
import { laravelExample } from "@/constants/codeExamplesHero"
import { ArrowRight, Download } from "lucide-react"


export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 md:py-32">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
                        <span className="flex h-2 w-2 rounded-full bg-primary" />
                        Extensión para VS Code
                    </div>

                    <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                        Convertí tus rutas de{" "}
                        <span className="text-primary">Laravel</span> en APIs tipadas para{" "}
                        <span className="text-primary">React</span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
                        Genera automáticamente clientes API tipados en TypeScript a partir
                        de tus rutas de Laravel. Olvidate del código repetitivo y enfocate
                        en lo que importa.
                    </p>


                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="gap-2 text-base" asChild>
                            <a
                                href="https://marketplace.visualstudio.com/items?itemName=StarkTechSolutions.laravel-react-route-bridge"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Download className="h-5 w-5" />
                                Instalar Extensión
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2 text-base" asChild>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver en GitHub
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Code Preview */}
                <CodePreview example={laravelExample} />
            </div>
        </section>
    )
}
