import Table from "./table"
import CustomerChart from "./customerChart"
import PieChart from "./pieChart"
import ProductChart from "./productChart"
import Progress from "./progress"
import TopProduct from "./topProduct"

const DashboardPage = () => {
  return (
    <>
      <TopProduct />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-10 gap-y-4 mx-2 my-4">
        <ProductChart />
        <CustomerChart />
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <PieChart />
        <Progress />
        <Table />
      </div>
    </>
  )
}

export default DashboardPage
