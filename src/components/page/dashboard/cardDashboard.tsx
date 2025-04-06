import { Card } from "@/components/ui/card"

export default function CardDashboard({ children }: { children: React.ReactNode }) {
  return <Card className="h-[470px] md:h-[430px] border border-gray-100 shadow-md rounded-2xl p-4">{children}</Card>
}
