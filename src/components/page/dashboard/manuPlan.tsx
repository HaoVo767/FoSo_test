import { useEffect, useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ProductPlanChart from "@/components/chart/productPlanChart"
import { chartData1 } from "@/fakeData"
import CalendarIcon from "@/assets/icons/calendar"
import CardDashboard from "./cardDashboard"
const ProductManuPlan = () => {
  const [selectValue, setSelectValue] = useState("month")
  const [fakeChartData, setFakeChartData] = useState(() =>
    chartData1
      ? chartData1
      : [
          {
            product: "",
            plan: 0,
            perform: 0,
          },
        ]
  )

  useEffect(() => {
    if (selectValue === "noData") {
      setFakeChartData([{ product: "", plan: 0, perform: 0 }])
    } else {
      setFakeChartData(chartData1)
    }
  }, [selectValue])
  return (
    <CardDashboard>
      <div className="block md:flex my-1 items-center justify-between">
        <div className="text-sm md:text-md lg:text-lg xl:text-lg mb-4 md:mb-0">Kế hoạch sản xuất</div>
        <div>
          <Select
            value={selectValue}
            onValueChange={(value) => setSelectValue(value)}
          >
            <SelectTrigger
              icon={<CalendarIcon />}
              className="w-[150px] text-gray-800 border-gray-300 rounded-md"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-gray-300 bg-white">
              <SelectGroup className="border-gray-300 text-gray-800">
                <SelectLabel>Thời gian</SelectLabel>
                <SelectItem value="month">Quý này</SelectItem>
                <SelectItem value="noData">No data</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ProductPlanChart chartData={fakeChartData} />
    </CardDashboard>
  )
}

export default ProductManuPlan
