import type { CodeExample } from "@/constants/codeExamplesHero"

interface CodePreviewProps {
  example: CodeExample
}

export function CodePreview({ example }: CodePreviewProps) {
  return (
    <div className="mx-auto mt-16 max-w-3xl">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">

        {/* Window header */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-sm text-muted-foreground">
            {example.filename}
          </span>
        </div>

        {/* Code content */}
        <div className="p-6 font-mono text-sm md:text-base">
          <pre className="overflow-x-auto">
            <code>
              {example.lines.map((line, i) => (
                <span key={i}>
                  {/* Comentario opcional */}
                  {line.comment && (
                    <>
                      <span className="text-muted-foreground">{"// "}</span>
                      <span className="text-green-400">{line.comment}</span>
                      {"\n"}
                    </>
                  )}

                  {/* Spans de código */}
                  {line.spans.map((span, j) => (
                    <span key={j} className={span.className}>
                      {span.text}
                    </span>
                  ))}
                  {"\n\n"}
                </span>
              ))}
            </code>
          </pre>
        </div>

      </div>
    </div>
  )
}