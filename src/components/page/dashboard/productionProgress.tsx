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
import ProgressBar from "@/components/progress"
import CalendarIcon from "@/assets/icons/calendar"
import { progressData } from "@/fakeData"

const ProductionProgress = () => {
  const [selectValue, setSelectValue] = useState("month")
  const [fakeProgressData, setFakeProgressData] = useState(() => (progressData ? progressData : undefined))
  const progressSkeleton = [1, 2, 3, 4, 5, 6, 7]
  useEffect(() => {
    if (selectValue === "noData") {
      setFakeProgressData(undefined)
    } else {
      setFakeProgressData(progressData)
    }
  }, [selectValue])
  return (
    <div className="h-[495px] lg:h-[560px] 2xl:h-[500px] border border-gray-100 shadow-md rounded-2xl px-4">
      <div className="block my-4 md:flex justify-between items-center px-4">
        <div className="text-sm md:text-md lg:text-md 2xl:text-lg my-4 md:my-0">Tiến độ sản xuất theo nhóm</div>
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
                <SelectItem value="month">Hoàn Thành</SelectItem>
                <SelectItem value="noData">No data</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mr-7 sm:mr-2">
        {fakeProgressData?.map((item, index) => (
          <ProgressBar
            key={index}
            value={item?.value}
            total={item?.total}
            label={item?.label}
            color={"#1FC583"}
          />
        ))}
        {!fakeProgressData && progressSkeleton.map((item) => <ProgressBar key={item} />)}
      </div>
    </div>
  )
}

export default ProductionProgress
