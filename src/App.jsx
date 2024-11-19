import { Header } from "./components/Header"
import { OverviewContainer, OverviewTodayContainer } from "./components/OverviewContainers"

function App() {
  return (
    <main className="max-w-[1200px] relative mx-auto">
      <Header />
      <OverviewContainer />
      <OverviewTodayContainer />
    </main>
  )
}

export default App