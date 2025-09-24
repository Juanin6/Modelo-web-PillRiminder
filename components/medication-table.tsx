"use client"
import { MedicamentoModal } from "@/components/modal/medicamentoModal"
import { Button } from "@/components/ui/button"

import { Edit,  Clock } from "lucide-react"
import { useState } from "react"
import { EditarAlarmaModal } from "./modal/editarAlarmaModal"

const medications = [
  {
    name: "Eutirox",
    startDate: "01/05/25",
    endDate: "25/05/26",
    nextTime: "6:00 AM",
    status: "active",
  },
  {
    name: "Ibuprofeno",
    startDate: "02/05/25",
    endDate: "24/05/25",
    nextTime: "8:00 AM",
    status: "active",
  },
  {
    name: "Naproxeno",
    startDate: "03/05/25",
    endDate: "24/05/25",
    nextTime: "10:00 AM",
    status: "active",
  },
  {
    name: "Amoxicilina",
    startDate: "04/05/25",
    endDate: "24/05/25",
    nextTime: "12:00 PM",
    status: "active",
  },
  {
    name: "Azitromicina",
    startDate: "05/05/25",
    endDate: "24/05/25",
    nextTime: "2:00 PM",
    status: "active",
  },
  {
    name: "Losartán",
    startDate: "06/05/25",
    endDate: "24/05/25",
    nextTime: "4:00 PM",
    status: "active",
  },
  {
    name: "Vitamina C",
    startDate: "07/05/25",
    endDate: "24/05/25",
    nextTime: "6:00 AM",
    status: "active",
  },
  {
    name: "Diclofenaco",
    startDate: "08/05/25",
    endDate: "24/05/25",
    nextTime: "8:00 PM",
    status: "active",
  },
  {
    name: "Ventolín",
    startDate: "09/05/25",
    endDate: "24/05/25",
    nextTime: "3:00 AM",
    status: "active",
  },
]

export function MedicationTable() {
  const [step1, setStep1] = useState(false)
  const [step2, setStep2] = useState(false)
  const [frequency, setFrequency] = useState<string | null>(null)


  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 bg-[#3b82f6] text-white">
        <div className="grid grid-cols-5 gap-4 text-sm font-semibold">
          <div>Medicamento</div>
          <div>Fecha de Inicio</div>
          <div>Fecha de Finalización</div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Próxima Hora</span>
          </div>
          <div>Acciones</div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-slate-200">
        {medications.map((medication, index) => (
          <div
            key={medication.name}
            className={`px-6 py-4 hover:bg-slate-50 transition-colors duration-200 ${
              index % 2 === 1 ? "bg-slate-50/60" : "bg-white"
            }`}
          >
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]" />
                <span className="font-medium text-slate-800">
                  {medication.name}
                </span>
              </div>
              <div className="text-slate-600">{medication.startDate}</div>
              <div className="text-slate-600">{medication.endDate}</div>
              <div className="flex items-center">{medication.nextTime}</div>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 hover:bg-[#3b82f6]/10 hover:text-[#3b82f6]"
                  onClick={() => setStep1(true)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modales */}
      <MedicamentoModal
  open={step1}
  onClose={() => setStep1(false)}
  onNext={() => {
    setStep1(false)
    setStep2(true)
  }}
  setFrequency={setFrequency}
/>

<EditarAlarmaModal
  open={step2}
  onClose={() => setStep2(false)}
  frequency={frequency}
/>
    </div>
  )
}