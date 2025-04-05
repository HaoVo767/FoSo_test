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
import CircleChart from "@/components/chart/circleChart"
import { chartData3 } from "@/fakeData"
import CalendarIcon from "@/assets/icons/calendar"

const PieChart = () => {
  const [selectValue, setSelectValue] = useState("month")
  const [fakeChartData, setFakeChartData] = useState(() => (chartData3 ? chartData3 : undefined))
  useEffect(() => {
    if (selectValue === "noData") {
      setFakeChartData(undefined)
    } else {
      setFakeChartData(chartData3)
    }
  }, [selectValue])
  return (
    <div className="h-[580px] md:[h-500px] border border-gray-100 shadow-md rounded-2xl">
      <div className="block md:flex justify-between items-center my-1 md:my-4 p-4">
        <div className="text-sm md:text-md lg:text-lg my-4">Tình hình sản xuất</div>
        <div>
          <Select
            value={selectValue}
            onValueChange={(value) => setSelectValue(value)}
          >
            <SelectTrigger
              icon={<CalendarIcon />}
              className="w-[160px] text-gray-800 border-gray-300 rounded-xl"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-gray-300 bg-white">
              <SelectGroup className="border-gray-300 text-gray-800">
                <SelectLabel>Thời gian</SelectLabel>

                <SelectItem value="month">Hôm nay</SelectItem>
                <SelectItem value="noData">No data</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="lg:mr-4">
        <CircleChart chartData={fakeChartData} />
      </div>
    </div>
  )
}

export default PieChart
