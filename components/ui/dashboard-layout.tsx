"use client"

import type React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Bell, BarChart3, History,  User, Menu, X,  } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const navigationItems = [
  {
    title: "Alarmas",
    icon: Bell,
    href: "/dashboard",
  },
  
  {
    title: "Estadísticas",
    icon: BarChart3,
    href: "/dashboard/estadisticas",
  },
  {
    title: "Historial",
    icon: History,
    href: "/dashboard/historial",
  },
]

const accountItems = [
  {
    title: "Perfil",
    icon: User,
    href: "/dashboard/perfil",
  },
  
]

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen ">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div
        className={cn(
          "fixed left-0 top-0 h-full w-72 bg-white border-r border-slate-200 shadow-xl z-50 transform transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              
              <div>
                <p className="font-bold text-3xl   text-[#3b82f6]">PillRiminder</p>
                <p className="text-sm text-slate-500">Gestor de Medicamentos</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 px-4 py-6">
          <div className="space-y-1">
            <div className="px-3 py-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Menú Principal</h3>
            </div>
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group",
                    isActive
                      ? "bg-[#3b82f6] text-white shadow-lg"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isActive ? "text-white" : "text-slate-600 group-hover:text-[#3b82f6]",
                      "group-hover:scale-110",
                    )}
                  />
                  <span className={isActive ? "text-white" : ""}>{item.title}</span>
                  {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-white" />}
                </Link>
              )
            })}
          </div>

          <div className="mt-8 space-y-1">
            <div className="px-3 py-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cuenta</h3>
            </div>
            {accountItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 group"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5 text-slate-600 group-hover:text-[#8b5cf6] transition-colors duration-200" />
                  <span>{item.title}</span>
                </Link>
              )
            })}
          </div>
        </div>

        
      </div>

      <div className="lg:ml-72">
        <div className="lg:hidden bg-white border-b border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="font-semibold text-slate-800">MediCare</h1>
            <div className="w-8" /> {/* Spacer */}
          </div>
        </div>

        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  )
}
