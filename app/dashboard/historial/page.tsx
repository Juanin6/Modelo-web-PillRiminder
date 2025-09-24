"use client"

import { DashboardLayout } from "@/components/ui/dashboard-layout"
import {  CheckCircle2, XCircle } from "lucide-react"

const historyData = [
  {
    medication: "Eutirox",
    date: "Lunes - 21 de mayo 2025",
    doses: [
      { time: "8:00 AM", taken: true },
      { time: "12:00 PM", taken: true },
      { time: "4:00 PM", taken: true },
      { time: "8:00 PM", taken: true },
      { time: "10:00 PM", taken: false },
      { time: "10:00 PM", taken: false },
      { time: "10:00 PM", taken: false },
      { time: "10:00 PM", taken: false },
      { time: "10:00 PM", taken: false },
      { time: "10:00 PM", taken: false },
      { time: "10:00 PM", taken: false },
      { time: "10:00 PM", taken: false },
      { time: "10:00 PM", taken: false },
    ],
    adherence: 80,
  },
  {
    medication: "Acetaminofen",
    date: "Viernes - 22 de mayo 2025",
    doses: [
      { time: "9:00 AM", taken: true },
      { time: "1:00 PM", taken: true },
      { time: "5:00 PM", taken: true },
      { time: "9:00 PM", taken: true },
      { time: "11:00 PM", taken: true },
    ],
    adherence: 100,
  },
  {
    medication: "Ibuprofeno",
    date: "Sábado - 23 de mayo 2025",
    doses: [
      { time: "7:00 AM", taken: true },
      { time: "11:00 AM", taken: false },
      { time: "3:00 PM", taken: true },
      { time: "7:00 PM", taken: true },
      { time: "11:00 PM", taken: false },
    ],
    adherence: 60,
  },
]

export default function HistorialPage() {
  
  

  return (
    <DashboardLayout>
      <div className="space-y-8 ml-5">
        <div className="text-center relative overflow-hidden rounded-2xl  p-6  ">
        
            <div>
              <h1 className="text-3xl font-bold">Historial</h1>
            </div>
          
        </div>

        

        <div className="space-y-6 mr-5 mb-4">
          {historyData.map((medication, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              {/* Medication header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{medication.medication}</h3>
                  <p className="text-gray-600 text-sm">{medication.date}</p>
                </div>
               
              </div>

              <div className="relative">
                {/* Connection line */}
                <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200"></div>

                {/* Dose dots */}
                <div className="flex justify-between items-center relative">
                  {medication.doses.map((dose, doseIndex) => (
                    <div key={doseIndex} className="flex flex-col items-center group">
                      {/* Dot */}
                      <div
                        className={`w-12 h-12 rounded-full border-4 flex items-center justify-center relative z-10 transition-all duration-200 group-hover:scale-110 ${
                          dose.taken
                            ? "bg-[#3b82f6] border-[#3b82f6] text-white"
                            : "bg-white border-gray-300 text-gray-400"
                        }`}
                      >
                        {dose.taken ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                      </div>

                      {/* Time label */}
                      <div className="mt-3 text-center">
                        <div className={`text-sm font-medium ${dose.taken ? "text-[#3b82f6]" : "text-gray-500"}`}>
                          {dose.time}
                        </div>
                        <div className={`text-xs mt-1 ${dose.taken ? "text-green-600" : "text-red-500"}`}>
                          {dose.taken ? "Tomada" : "Perdida"}
                        </div>
                      </div>

                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                        {dose.taken ? `✓ Tomada a las ${dose.time}` : `✗ Perdida a las ${dose.time}`}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
