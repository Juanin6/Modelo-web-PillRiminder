"use client"

import { ProfileIcon } from "@/components/profile-icon"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Perfil() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Header con botón de volver y título centrado */}
      <div className="relative w-full max-w-3xl flex items-center mb-6">
        {/* Botón en la esquina izquierda */}
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full bg-[#3b82f6]"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        {/* Título centrado */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[32px] font-semibold text-slate-800">
          Gestionar Cuentas
        </h1>
      </div>

      {/* Card principal */}
      <div className="w-full max-w-3xl border border-[#1E40AF] rounded-lg shadow p-10">
        <div className="flex gap-10 items-center">
          {/* Avatar con ícono */}
          <ProfileIcon className="w-40 h-40 text-[#1E40AF] " />

          {/* Formulario de solo lectura */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Nombre */}
            <div>
              <label className="block text-[28px] font-medium text-slate-700 mb-1">
                Nombre:
              </label>
              <input
                type="text"
                value="Jose"
                readOnly
                className="w-full rounded-md border border-slate-300 px-4 py-3 text-base  bg-slate-50 text-slate-800"
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block text-[28px] font-medium text-slate-700 mb-1">
                Correo Electrónico:
              </label>
              <input
                type="email"
                value="fulano@gmail.com"
                readOnly
                className="w-full rounded-md border border-slate-300 px-4 py-3 text-base bg-slate-50 text-slate-800"
              />
            </div>

            {/* Fecha */}
            <div>
              <label className="block text-[28px] font-medium text-slate-700 mb-1">
                Fecha creación de cuenta:
              </label>
              <input
                type="text"
                value="4 de septiembre de 2025"
                readOnly
                className="w-full rounded-md border border-slate-300 px-4 py-3 bg-slate-50 text-base text-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
