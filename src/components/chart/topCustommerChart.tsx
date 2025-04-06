import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  output: {
    label: "Sản lượng",
    color: "#0375F3",
  },
} satisfies ChartConfig

export default function TopCustomerChart({ chartData }: { chartData: { customer: string; output: number }[] }) {
  return (
    <ChartContainer
      className="min-h-[180px] w-full h-[280px]"
      config={chartConfig}
    >
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          left: -10,
        }}
      >
        <CartesianGrid horizontal={false} />
        <XAxis
          type="number"
          dataKey="output"
          label={{ value: "Sản lượng", position: "left", offset: 14 }}
          tickLine={false}
          axisLine={false}
          tickMargin={5}
        />
        <YAxis
          width={130}
          dataKey="customer"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 30)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        />
        <Bar
          dataKey="output"
          fill="var(--color-output)"
          radius={[0, 5, 5, 0]}
          barSize={10}
        />
      </BarChart>
    </ChartContainer>
  )
}
