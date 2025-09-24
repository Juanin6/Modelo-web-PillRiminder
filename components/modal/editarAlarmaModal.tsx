export function EditarAlarmaModal({
  open,
  onClose,
  frequency,
}: {
  open: boolean
  onClose: () => void
  frequency: string | null
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-50 w-full max-w-xl rounded-lg bg-white shadow-lg p-8">
        <h2 className="text-lg font-semibold mb-6">Editar Alarma</h2>

        {/* Campo extra dependiendo de frecuencia */}
        {frequency === "Cada X horas" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Rango de horas:</label>
            <input
              type="text"
              placeholder="Ej: cada 6 horas"
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </div>
        )}

        {frequency === "Cada X días" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Rango de días:</label>
            <input
              type="number"
              placeholder="Ej: cada 3 días"
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </div>
        )}

        {/* Fecha inicio y fin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Fecha de Inicio:</label>
            <input type="date" className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Fecha de Finalización:</label>
            <input type="date" className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
        </div>

        {/* Dosis */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Dosis por toma:</label>
          <input
            type="text"
            placeholder="Ej: 1 tableta, 5ml, 2 cápsulas..."
            className="w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </div>

        {/* Resumen */}
        <div className="bg-slate-100 rounded-md p-3 mb-6 text-sm">
          <p><span className="font-semibold">Frecuencia:</span> {frequency}</p>
          <p><span className="font-semibold">Dosis:</span> Sin especificar</p>
          <p><span className="font-semibold">Duración:</span> 9 días</p>
        </div>

        {/* Botón */}
        <button
          onClick={onClose}
          className="w-full rounded-full bg-blue-500 text-white py-2 font-medium hover:bg-blue-600 transition"
        >
          Guardar Alarma
        </button>
      </div>
    </div>
  )
}
