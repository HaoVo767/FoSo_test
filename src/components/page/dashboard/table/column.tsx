import { ColumnDef } from "@tanstack/react-table"
import MaterialCell from "./materialCell"

export type DashboardTable = {
  id: string
  material: {
    thumbnail: React.ReactNode
    name: string
    productId: string
  }
  quantyti: number | undefined
  unit: string
}

export const columns: ColumnDef<DashboardTable>[] = [
  {
    accessorKey: "id",
    header: "STT",
  },
  {
    header: "Nguyên vật liệu",
    accessorKey: "material",
    cell: ({ row }) => {
      return <MaterialCell data={row.original} />
    },
  },
  {
    accessorKey: "unit",
    header: "Đơn vị tính",
  },
  {
    accessorKey: "quantyti",
    header: "Số lượng",
  },
]
