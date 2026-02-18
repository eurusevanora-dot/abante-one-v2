import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"

function Dashboard() {
  return <h2>Dashboard</h2>
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
