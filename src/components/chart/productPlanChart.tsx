import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const chartConfig = {
  plan: {
    label: "Kế hoạch",
    color: "#0375F3",
  },
  perform: {
    label: "Thực hiện",
    color: "#1FC583",
  },
} satisfies ChartConfig

export default function ProductPlanChart({
  chartData,
}: {
  chartData: { product: string; plan: number; perform: number }[]
}) {
  return (
    <div>
      <div className="flex gap-x-4 h-4 justify-between mb-4 mt-0">
        <div className="text-gray-600 text-xs relative left-9 top-2">{chartData[0].plan ? "Cái" : "Đơn vị"}</div>
        <div className="flex gap-x-2 ">
          <div className="flex gap-x-2 items-center">
            <div
              className={cn(`w-8 h-4 rounded-4xl`)}
              style={{ backgroundColor: chartConfig.plan.color }}
            ></div>
            <div className="text-sm md:text-md">Kế hoạch</div>
          </div>
          <div className="flex gap-x-2 items-center">
            <div
              className={cn(`w-8 h-4 rounded-4xl`)}
              style={{ backgroundColor: chartConfig.perform.color }}
            ></div>
            <div className="text-sm md:text-md">Thực hiện</div>
          </div>
        </div>
      </div>
      <ChartContainer
        config={chartConfig}
        className="min-h-[150px] w-full h-[308px] "
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            width={4}
            dataKey="product"
            tickLine={false}
            tickMargin={6}
            axisLine={false}
            minTickGap={1}
            label={{ value: "Mặt hàng", position: "left", offset: 6 }}
            tickFormatter={(value) => value.slice(0, 30)}
          />
          <YAxis
            height={300}
            tickLine={false}
            tickMargin={0}
            axisLine={false}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent
                className="w-6 bg-transparent"
                indicator="line"
              />
            }
          />
          <Bar
            dataKey="plan"
            fill="var(--color-plan)"
            radius={4}
            barSize={20}
          />
          <Bar
            dataKey="perform"
            fill="var(--color-perform)"
            radius={4}
            barSize={20}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
