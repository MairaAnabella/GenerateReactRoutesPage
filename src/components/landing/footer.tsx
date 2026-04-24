import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <span className="font-semibold">Laravel React Client Generator</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            ><FaGithub className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://marketplace.visualstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              VS Code Marketplace
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            Creado con{" "}
            <span className="text-primary">♥</span> por{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary"
            >
              Tu Nombre
            </a>
          </p>
          <p className="mt-2">Licencia MIT</p>
        </div>
      </div>
    </footer>
  )
}
