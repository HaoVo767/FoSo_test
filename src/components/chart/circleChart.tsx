import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  quantity: {
    label: "Quantity",
  },

  complete: {
    label: "complete",
    color: "#1FC583",
  },
  unfinished: {
    label: "unfinished",
    color: "#FF8F0D",
  },
  producing: {
    label: "producing",
    color: "#0375F3",
  },
} satisfies ChartConfig

export default function CircleChart({ chartData }: { chartData: { status: string; quantity: number }[] | undefined }) {
  const [inputChartData, setInputChartData] = React.useState<
    { status?: string; quantity?: number; fill?: string }[] | undefined
  >(() => chartData)
  React.useEffect(() => {
    if (!chartData) {
      setInputChartData([
        { status: "Chưa có dữ liệu", quantity: 1, fill: "#C6CbD1" },
        { status: "Chưa có dữ liệu", quantity: 1, fill: "#C6CbD1" },
        { status: "Chưa có dữ liệu", quantity: 1, fill: "#C6CbD1" },
      ])
    } else {
      const formatChartData = chartData?.map((item) => {
        return {
          status: item.status,
          quantity: item.quantity,
          fill: item.status === "Chưa hoàn thành" ? "#FF8F0D" : item.status === "Đang sản xuất" ? "#0375F3" : "#1FC583",
        }
      })
      setInputChartData(formatChartData)
    }
  }, [chartData])

  const CustomLabel = ({ ...props }) => {
    const { x, y, percent } = props
    return (
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: 14, color: "#FFF" }}
      >
        {!chartData ? "0%" : `${(percent * 100).toFixed(1)}%`}
      </text>
    )
  }

  const totalQuantity = React.useMemo(() => {
    return chartData?.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [chartData])

  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="aspect-square max-h-[250px] w-[300px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent />}
          />
          <Pie
            paddingAngle={10}
            cornerRadius={10}
            data={inputChartData}
            dataKey="quantity"
            nameKey="status"
            innerRadius={60}
            strokeWidth={5}
            label={(props) => <CustomLabel {...props} />}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {!chartData ? 0 : totalQuantity?.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Lệnh sản xuất
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 mt-10 ">
        {inputChartData?.map((item, index) => (
          <div
            key={index}
            className="w-full p-2 mr-2 rounded-md border border-gray-200 shadow-sm"
          >
            <div
              className="font-semibold text-2xl"
              style={{ color: item.fill }}
            >
              {!chartData ? 0 : item.quantity}
            </div>
            <div className="text-sm text-gray-800">{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
