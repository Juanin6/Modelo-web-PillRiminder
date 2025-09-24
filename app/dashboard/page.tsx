import { MedicationTable } from "@/components/medication-table";
import { DashboardLayout } from "@/components/ui/dashboard-layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Alarmas</h1>
          <p className="text-slate-600">Gestiona tus recordatorios de medicamentos</p>
        </div>
        <MedicationTable />
      </div>
    </DashboardLayout>
  )
}
