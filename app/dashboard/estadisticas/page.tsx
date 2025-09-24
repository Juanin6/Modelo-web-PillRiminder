"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { DashboardLayout } from "@/components/ui/dashboard-layout"

const weeklyData = [
  { week: "Semana 1", completed: 12 },
  { week: "Semana 2", completed: 18 },
  { week: "Semana 3", completed: 25 },
  { week: "Semana 4", completed: 15 },
]

export default function EstadisticasPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-6">
        <div className="rounded-2xl p-8 text-center">
          <div className="flex items-center gap-3 mb-2">
            
            <h1 className="text-4xl font-bold">Estadísticas del Mes</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center justify-between">
               
                
              </div>
              <CardTitle className="text-lg font-semibold text-gray-700 mt-4">Porcentaje de adherencia</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex items-baseline gap-2">
                <div className="text-5xl font-bold bg-[#3b82f6]  bg-clip-text text-transparent">
                  65%
                </div>
                
              </div>
              <div className="mt-4 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#3b82f6] h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8b5cf6]/10 to-[#3b82f6]/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative pb-4">
              <div className="flex items-center justify-between">
                
                
              </div>
              <CardTitle className="text-lg font-semibold text-gray-700 mt-4">Alarmas atendidas a tiempo</CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex items-baseline gap-2">
                <div className="text-5xl font-bold bg-[#3b82f6] bg-clip-text text-transparent">
                  33
                </div>
                <div className="text-sm text-gray-500 font-medium">de 40 alarmas</div>
              </div>
              <div className="mt-4 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#3b82f6] h-2 rounded-full"
                  style={{ width: "82.5%" }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="pb-6">
            <div className="text-center gap-3">
              
              <div >
                <CardTitle className="text-2xl font-bold text-gray-900">Alarmas cumplidas por semana</CardTitle>
                <p className="text-gray-600 mt-1">Progreso semanal de adherencia al tratamiento</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full bg-white rounded-xl p-4 shadow-inner">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3b82f6" />
                  <XAxis
                    dataKey="week"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 14, fontWeight: 500 }}
                  />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 14, fontWeight: 500 }} />
                  <Bar dataKey="completed" fill="#8b5cf6" radius={[8, 8, 0, 0]}>
                    
        
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
