import { ArrowUpDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"

export const columnsPasien = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "namaPemilik",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-3"
        >
          Pemilik
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "namaHewan",
    header: "Nama Hewan",
  },
  {
    accessorKey: "jenisHewan",
    header: "Jenis Hewan",
  },
  {
    accessorKey: "umur",
    header: "Umur",
    cell: ({ row }) => {
      const umur = row.getValue("umur")
      return <div className="font-medium">{umur} Tahun</div>
    },
  },
  {
    accessorKey: "diagnosis",
    header: "Diagnosis",
  },
  {
    accessorKey: "dokter",
    header: "Dokter",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium whitespace-nowrap">
          {status}
        </span>
      )
    },
  },
]