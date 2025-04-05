import { useState, useEffect } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HorizontalChart } from "@/components/chart/horizontalChart"
import { chartData2 } from "@/fakeData"
import CalendarIcon from "@/assets/icons/calendar"
import CardDashboard from "./cardDashboard"

const CustomerChart = () => {
  const [selectValue, setSelectValue] = useState("month")
  const [fakeChartData, setFakeChartData] = useState(() => (chartData2 ? chartData2 : [{ customer: "", output: 0 }]))

  useEffect(() => {
    if (selectValue === "noData") {
      setFakeChartData([{ customer: "", output: 0 }])
    } else {
      setFakeChartData(chartData2)
    }
  }, [selectValue])
  return (
    <CardDashboard>
      <div className="block md:flex items-center justify-between">
        <div className="text-xl">Top 5 Khách hàng có sản lượng nhiều nhất</div>
        <div>
          <Select
            value={selectValue}
            onValueChange={(value) => setSelectValue(value)}
          >
            <SelectTrigger
              icon={<CalendarIcon />}
              className="w-[150px] text-gray-800 border-gray-300 rounded-xl px-4"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-gray-300 bg-white">
              <SelectGroup className="border-gray-300 text-gray-800">
                <SelectLabel>Thời gian</SelectLabel>
                <SelectItem value="month">Quý này</SelectItem>
                <SelectItem value="noData">No Data</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-600 mt-9">Khách hàng</div>
        <HorizontalChart chartData={fakeChartData} />
      </div>
    </CardDashboard>
  )
}

export default CustomerChart
