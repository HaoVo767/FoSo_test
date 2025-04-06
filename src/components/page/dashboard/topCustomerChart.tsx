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
import TopCustomerChart from "@/components/chart/topCustommerChart"
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
      <div className="block md:flex my-4 md:my-1 flex-wrap items-center justify-between">
        <div className="text-sm md:text-md mb-3 xl:mb-0 lg:text-lg">Top 5 Khách hàng có sản lượng nhiều nhất</div>
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
                <SelectItem value="noData">No Data</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <div className="text-xs relative bottom-2 left-10 text-gray-600">Khách hàng</div>
        <TopCustomerChart chartData={fakeChartData} />
      </div>
    </CardDashboard>
  )
}

export default CustomerChart
