import { Bar, BarChart, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  output: {
    label: "Sản lượng",
    color: "#0375F3",
  },
} satisfies ChartConfig

export function HorizontalChart({ chartData }: { chartData: { customer: string; output: number }[] }) {
  return (
    <ChartContainer
      className="min-h-[180px] w-full h-[350px] mt-2 "
      config={chartConfig}
    >
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          left: 10,
        }}
      >
        <XAxis
          type="number"
          dataKey="output"
          label={{ value: "Sản lượng", position: "left", offset: 8 }}
        />
        <YAxis
          width={130}
          dataKey="customer"
          type="category"
          tickLine={true}
          tickMargin={10}
          axisLine={true}
          tickSize={4}
          tickFormatter={(value) => value.slice(0, 30)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        />
        <Bar
          dataKey="output"
          fill="var(--color-output)"
          radius={5}
          barSize={15}
        />
      </BarChart>
    </ChartContainer>
  )
}
