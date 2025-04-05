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

export default function Chart({ chartData }: { chartData: { product: string; plan: number; perform: number }[] }) {
  return (
    <div>
      <div className="flex gap-x-4 justify-between my-8">
        <div className="text-gray-600 text-xs relative left-10 top-8">{chartData[0].plan ? "Cái" : "Đơn vị"}</div>
        <div className="flex gap-x-2">
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
        className="min-h-[180px] w-full h-[350px] "
      >
        <BarChart
          accessibilityLayer
          data={chartData}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            className="gap-x-2"
            width={4}
            dataKey="product"
            tickLine={false}
            tickMargin={5}
            axisLine={false}
            minTickGap={2}
            label={{ value: "Mặt hàng", position: "left", offset: 8 }}
            tickFormatter={(value) => value.slice(0, 30)}
          />
          <YAxis
            height={330}
            // label={{ value: "Cái", position: "insideLeft", offset: 5 }}
            // label={{ value: "Cái", position: "insideTop", offset: -10 }}
            tickLine={false}
            tickMargin={3}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
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
