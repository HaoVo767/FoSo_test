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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-10 mb-4 mx-2">
        <div>
          <ProductChart />
        </div>
        <div>
          <CustomerChart />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <PieChart />
        </div>
        <div>
          <Progress />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </>
  )
}

export default DashboardPage
