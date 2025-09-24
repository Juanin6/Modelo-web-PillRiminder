import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PillIcon } from "@/components/pill-icon"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
           
            <h1 className="text-2xl font-bold text-gray-900">PillReminder</h1>
          </div>
          <p className="text-[#3b82f6] text-sm font-medium">Nunca olvides tu dosis</p>
        </div>

        {/* Avatar Section */}
        <div className="flex justify-center mb-12">
        
                <PillIcon className="w-16 h-16" />
                      
        </div>

        {/* Buttons Section */}
        <div className="space-y-4 mb-8">
          <Link href="/login" className="block">
            <Button className="w-full h-12 bg-[#3b82f6] hover:bg-[#1e40af] text-white font-medium rounded-xl transition-colors">
              Iniciar Sesión
            </Button>
          </Link>
          <Link href="/signup" className="block">
          <Button
            variant="outline"
            className="w-full h-12 border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white font-medium rounded-xl transition-colors bg-transparent"
          >
            Crear cuenta
          </Button>
          </Link>
        </div>

        {/* Version */}
        <div className="text-center">
          <p className="text-xs text-gray-400">v1.0</p>
        </div>
      </div>
    </div>
  )
}
