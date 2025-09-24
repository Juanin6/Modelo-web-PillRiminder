"use client"
import { useState } from "react"
import { PillIcon } from "../pill-icon"

export function MedicamentoModal({
  open,
  onClose,
  onNext,
  setFrequency,
}: {
  open: boolean
  onClose: () => void
  onNext: () => void
  setFrequency: (value: string) => void
}) {
  const [medName, setMedName] = useState("ibuprofeno")

  if (!open) return null

  const options = [
    "Una vez al día",
    "Dos veces al día",
    "Cada X horas",
    "Cada X días",
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fondo oscuro */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 w-full max-w-lg rounded-lg bg-white shadow-lg p-8">
        {/* Icono */}
        <div className="flex justify-center mb-6">
          <PillIcon className="w-12 h-12 text-blue-500" />
        </div>

        {/* Nombre del medicamento */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-slate-800 mb-2 text-center">
            Nombre del medicamento:
          </label>
          <div className="flex justify-center">
            <input
              type="text"
              value={medName}
              onChange={(e) => setMedName(e.target.value)}
              className="mx-auto w-80 rounded-md border border-blue-400 px-3 py-2 text-center text-slate-800"
            />
          </div>
        </div>

        {/* Frecuencia */}
        <div className="mb-6">
          <p className="font-medium text-slate-700 mb-3">Frecuencia:</p>
          <div className="flex flex-col gap-3">
            {options.map((f) => (
              <label
                key={f}
                className="flex items-center justify-between rounded-md border border-blue-400 px-3 py-2 cursor-pointer hover:bg-blue-50"
              >
                <span className="text-blue-500">{f}</span>
                <input
                  type="checkbox"
                  onChange={() => {
                    setFrequency(f)
                    onNext()
                  }}
                  className="form-checkbox text-blue-500"
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
