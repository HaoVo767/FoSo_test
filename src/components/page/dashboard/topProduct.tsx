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
import CalendarIcon from "@/assets/icons/calendar"
import CardCustom from "@/components/ui/cardCustom"
import { cardData } from "@/fakeData/cardData"
const TopProduct = () => {
  const [selectValue, setSelectValue] = useState("month")
  const [fakeCardData, setFakeCardData] = useState(() => (cardData ? cardData : []))
  const [noFackeCardData, setNoFakeCardData] = useState([1, 2, 3, 4, 5])

  useEffect(() => {
    if (selectValue === "noData") {
      setFakeCardData([])
      setNoFakeCardData([1, 2, 3, 4, 5])
    } else {
      setFakeCardData(cardData)
      setNoFakeCardData([])
    }
  }, [selectValue])
  return (
    <div>
      <div className="block md:flex justify-between my-4 mx-2">
        <div className="text-xl">Top sản phẩm sản xuất nhiều nhất</div>
        <Select
          value={selectValue}
          onValueChange={(value) => setSelectValue(value)}
        >
          <SelectTrigger
            icon={<CalendarIcon />}
            className="w-[160px] text-gray-800 border-gray-300 rounded-xl px-4"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="border-gray-300 bg-white">
            <SelectGroup className="border-gray-300 text-gray-800">
              <SelectLabel>Thời gian</SelectLabel>
              <SelectItem value="month">Tháng này</SelectItem>
              <SelectItem value="noData">No data</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-2">
        {fakeCardData?.map((item, index) => (
          <div key={index}>
            <CardCustom
              numberPercent={item?.numberPercent}
              icon={item?.icon === "increase" || item?.icon === "decrease" ? item.icon : undefined}
              number={item?.number}
              title={item?.title}
            />
          </div>
        ))}
        {noFackeCardData?.map((item) => (
          <div key={item}>
            <CardCustom
              numberPercent={undefined}
              icon={undefined}
              number={undefined}
              title={undefined}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopProduct
