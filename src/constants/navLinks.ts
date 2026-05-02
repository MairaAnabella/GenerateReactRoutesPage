import { Home, Users, BarChart, Settings } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type NavItem = {
  title: string
  url: string
  icon: LucideIcon
}

export const navLinks: NavItem[] = [
  { title: "Inicio", url: "#home", icon: Home },
  { title: "Características", url: "#features", icon: Home },
  { title: "Cómo funciona", url: "#how-it-works", icon: Users },
  { title: "Ejemplo", url: "#code-example", icon: BarChart },
  { title: "Beneficios", url: "#benefits", icon: Settings },
]
