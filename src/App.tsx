

import './App.css'
import { AppSidebar } from './components/landing/header'
import { Navbar } from './components/landing/Navbar'
import { SidebarProvider } from './components/ui/sidebar'


  export default function App() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">

        {/* Sidebar */}
        <AppSidebar />

        {/* Contenido */}
        <div className="flex flex-1 flex-col">

          <Navbar />

          <main className="flex-1 p-6">
            <h1>Contenido de la página</h1>
          </main>

        </div>
      </div>
    </SidebarProvider>
  )
}





