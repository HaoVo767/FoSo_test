import Header from "@/components/header"
import Container from "@/components/container"
import DashboardPage from "@/components/page/dashboard"
import Footer from "@/components/footer"
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <DashboardPage />
      </Container>
      <Footer />
    </>
  )
}

export default App
