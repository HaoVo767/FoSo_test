import { Progress } from "@/components/ui/progress"

interface ProgressBarProp {
  value?: number
  color?: string
  label?: string
  total?: number
}
const ProgressBar: React.FC<ProgressBarProp | undefined> = ({ ...props }) => {
  const { value, color, label, total } = props
  const calculatePercentage = (total?: number, value?: number) => {
    if (total === 0 || total === undefined || value === undefined) {
      return
    }

    const percentage = (value / total) * 100

    return `${percentage.toFixed(0)}`
  }
  return (
    <div className="my-4">
      <div className="flex justify-between my-2">
        <div>{label || "Chưa có mặt hàng"}</div>
        <div className="flex gap-x-1">
          {value && <div className="font-semibold">{value} cái</div>}
          {!value && <div>-</div>}
          {total && value && <div className="text-gray-500">({calculatePercentage(total, value)}%)</div>}
        </div>
      </div>
      <Progress
        barColor={color || "#919EAB"}
        value={total && value ? +(calculatePercentage(total, value) || 0) : 100}
      />
    </div>
  )
}
export default ProgressBar
