import { useState, useEffect } from "react"
// import CardDashboard from "../cardDashboard"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CalendarIcon from "@/assets/icons/calendar"
import { DataTable } from "./data-table"
import { columns, DashboardTable } from "./column"
import ProductThumbnail from "@/assets/icons/productThumbnail"
const Table = () => {
  const [selectValue, setSelectValue] = useState("month")
  const [fakeTableData, setFakeTableData] = useState<DashboardTable[]>([
    {
      id: "",
      material: {
        thumbnail: <></>,
        name: "",
        productId: "",
      },
      quantyti: undefined,
      unit: "",
    },
  ])

  const fakeData = [
    {
      id: "1",
      material: {
        thumbnail: <ProductThumbnail />,
        name: "Chỉ cotton",
        productId: "NVL_000014",
      },
      quantyti: 8,
      unit: "Cuộn",
    },
    {
      id: "2",
      material: {
        thumbnail: <ProductThumbnail />,
        name: "Vải lụa",
        productId: "NVL_000024",
      },
      quantyti: 8,
      unit: "Mét",
    },
    {
      id: "3",
      material: {
        thumbnail: <ProductThumbnail />,
        name: "Vải lót",
        productId: "NVL_000024",
      },
      quantyti: 8,
      unit: "Mét",
    },
    {
      id: "4",
      material: {
        thumbnail: <ProductThumbnail />,
        name: "Vải chống thấm",
        productId: "NVL_000024",
      },
      quantyti: 8,
      unit: "Mét",
    },
    {
      id: "5",
      material: {
        thumbnail: <ProductThumbnail />,
        name: "Vải nỉ",
        productId: "NVL_000024",
      },
      quantyti: 8,
      unit: "Mét",
    },
  ]

  useEffect(() => {
    if (selectValue === "noData") {
      setFakeTableData([])
    } else {
      setFakeTableData(fakeData)
    }
  }, [selectValue])
  return (
    <div className="h-[550px] lg:h-[560px] 2xl:h-[500px] border border-gray-100 shadow-md rounded-2xl">
      <div className="block my-4 md:flex items-center justify-between mx-4">
        <div className="text-sm md:text-md lg:text-lg w-max mb-4 md:mb-0">Nguyên vật liệu cần mua</div>
        <div>
          <Select
            value={selectValue}
            onValueChange={(value) => setSelectValue(value)}
          >
            <SelectTrigger
              icon={<CalendarIcon />}
              className="w-[150px] text-gray-800 border-gray-300 rounded-lg"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-gray-300 bg-white">
              <SelectGroup className="border-gray-300 text-gray-800">
                <SelectLabel>Thời gian</SelectLabel>
                <SelectItem value="month">Tuần này</SelectItem>
                <SelectItem value="noData">No Data</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="container w-full mx-auto">
        <DataTable
          columns={columns}
          data={fakeTableData}
        />
      </div>
    </div>
  )
}

export default Table
