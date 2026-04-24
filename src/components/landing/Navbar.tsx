import { useState } from "react"
import { MonitorDown, Braces, Menu, X } from "lucide-react"
import { useIsMobile } from "@/hook/use-mobile" 
import { Button } from "../ui/button"
import { navLinks } from "@/constants/navLinks"
import * as motion from "motion/react-client"

const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } }
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: { y: { stiffness: 1000 } }
  }
}

export function Navbar() {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background">

      <div className="flex items-center justify-between px-6 h-14">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Braces className="h-4 w-4" />
          </div>
          <span style={{ display: isMobile ? "none" : "block" }} className="font-semibold text-black">
            Route Bridge
          </span>
        </a>

        {/* Desktop */}
        {!isMobile && (
          <>
            <nav className="flex items-center gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
              <MonitorDown />
              Instalar Extension
            </Button>
          </>
        )}

        {/* Mobile — hamburguesa */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        )}

      </div>

      {/* Mobile — menú con animación */}
      {isMobile && (
        <motion.nav
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="overflow-hidden border-t border-border px-6"
        >
          <div className="flex flex-col gap-4 py-4">
            {navLinks.map((item) => (
              <motion.a
                key={item.title}
                href={item.url}
                variants={itemVariants}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </motion.a>
            ))}
            <motion.div variants={itemVariants}>
              <Button className="w-full gap-2 bg-primary text-primary-foreground">
                <MonitorDown className="h-4 w-4" />
                Instalar Extension
              </Button>
            </motion.div>
          </div>
        </motion.nav>
      )}

    </header>
  )
}