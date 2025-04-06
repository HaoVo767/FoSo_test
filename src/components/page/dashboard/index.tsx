import Table from "./table"
import CustomerChart from "./topCustomerChart"
import ProductStatusChart from "./productStatusChart"
import ProductManuPlan from "./manuPlan"
import ProductionProgress from "./productionProgress"
import TopProduct from "./topManuProduct"

const DashboardPage = () => {
  return (
    <div className="mx-2 2xl:mx-10">
      <TopProduct />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-10 gap-y-4 mx-2 my-4">
        <ProductManuPlan />
        <CustomerChart />
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <ProductStatusChart />
        <ProductionProgress />
        <Table />
      </div>
    </div>
  )
}

export default DashboardPage
