import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"

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

export default function ProductStatusPieChart({
  chartData,
}: {
  chartData: { status: string; quantity: number }[] | undefined
}) {
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

  interface RenderShapeProps {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    startAngle: number
    endAngle: number
    fill: string
    percent: number
  }

  const renderShape = (props: RenderShapeProps) => {
    const RADIAN = Math.PI / 180
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, percent } = props
    const sin = Math.sin(-RADIAN * midAngle)
    const cos = Math.cos(-RADIAN * midAngle)
    const sx = cx + outerRadius * cos
    const sy = cy + outerRadius * sin
    const mx = cx + (outerRadius + 30) * cos
    const my = cy + (outerRadius + 30) * sin
    const ex = mx + (cos >= 0 ? 1 : -1) * 22
    const ey = my
    const textAnchor = cos >= 0 ? "start" : "end"
    return (
      <g>
        <Sector
          cx={cx + 5}
          cy={cy}
          innerRadius={innerRadius + 10}
          outerRadius={outerRadius}
          startAngle={startAngle}
          cornerRadius={10}
          endAngle={endAngle}
          fill={fill}
        />
        {chartData && (
          <g>
            <path
              d={`M${sx + 5},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={fill}
              fill="none"
            />
            <svg>
              <rect
                width="70"
                height="28"
                fill={fill}
                rx={15}
                x={cos >= 0 ? mx + 8 : mx - 70}
                y={my - 16}
              />
            </svg>
          </g>
        )}

        <text
          x={cos >= 0 ? mx + 23 : mx - 16}
          y={ey - 15}
          dy={18}
          textAnchor={textAnchor}
          fill="#FFF"
          style={{ fontSize: 14, color: "#FFF", fontWeight: 500 }}
        >
          {` ${(percent * 100).toFixed(1)}%`}
        </text>
      </g>
    )
  }

  const totalQuantity = React.useMemo(() => {
    return chartData?.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [chartData])

  return (
    <div className="w-full">
      <ChartContainer
        config={chartConfig}
        className="h-[200px] lg:h-[268px] w-full"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent />}
          />
          <Pie
            //  @ts-expect-error props type any
            activeShape={(props) => renderShape(props)}
            paddingAngle={10}
            cornerRadius={10}
            data={inputChartData}
            dataKey="quantity"
            nameKey="status"
            innerRadius={60}
            strokeWidth={5}
            activeIndex={inputChartData?.map((_, index) => index)}
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
      <div className="grid mx-4 gap-1 lg:gap-2 grid-cols-2 2xl:grid-cols-3 mt-4 lg:left-2 md:top-0 md:mt-10 md:gap-1">
        {inputChartData?.map((item, index) => (
          <div
            key={index}
            className="w-[150px] lg:w-[176px] p-4 lg:p-2 h-[72px] rounded-sm border border-gray-200"
          >
            <div
              className="font-semibold text-2xl"
              style={{ color: item.fill }}
            >
              {!chartData ? 0 : item.quantity}
            </div>
            <div className="text-sm w-max text-gray-800">{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
