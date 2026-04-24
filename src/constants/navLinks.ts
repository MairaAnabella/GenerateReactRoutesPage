import { Home, Users, BarChart, Settings } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type NavItem = {
  title: string
  url: string
  icon: LucideIcon
}

export const navLinks: NavItem[] = [
  { title: "Características", url: "#", icon: Home },
  { title: "Cómo funciona", url: "#", icon: Users },
  { title: "Ejemplo", url: "#", icon: BarChart },
  { title: "Beneficios", url: "#", icon: Settings },
]
