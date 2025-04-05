import { DashboardTable } from "./column"

const MaterialCell = ({ data }: { data: DashboardTable }) => {
  return (
    <div className="flex gap-x-2">
      <div>{data.material.thumbnail}</div>
      <div>
        <div className="font-semibold">{data.material.name}</div>
        <div className="text-sm font-light text-[#667085]">(none)</div>
        <div className="text-[#3276FA] font-light">{data.material.productId}</div>
      </div>
    </div>
  )
}

export default MaterialCell
