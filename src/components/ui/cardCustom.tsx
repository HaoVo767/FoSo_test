import DownIcon from "@/assets/icons/down"
import UpIcon from "@/assets/icons/up"

interface CartCustomProps {
  icon?: "increase" | "decrease"
  numberPercent?: number
  number?: number
  title?: string
}
const CardCustom: React.FC<CartCustomProps> = ({ ...props }) => {
  const { icon, numberPercent, number, title } = props
  return (
    <div className="border h-34 overflow-hidden py-4 cursor-pointer border-gray-200 rounded-2xl shadow-md px-6  bg-transparent max-w-full">
      <div className="flex justify-end">
        {icon && <div className="flex">{icon === "increase" ? <UpIcon /> : <DownIcon />}</div>}
        {numberPercent && <div>{numberPercent}%</div>}
      </div>
      <div className="text-[#0375F3] font-bold text-3xl">{number || 0}</div>
      <div className="text-xl">{title || "Chưa có mặt hàng"}</div>
    </div>
  )
}

export default CardCustom
