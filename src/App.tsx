import Header from "./components/header"
import Container from "./components/container"
import DashboardPage from "./components/page/dashboard"
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <DashboardPage />
      </Container>
    </>
  )
}

export default App
