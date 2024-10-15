import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "../page/errorPage/ErrorPage"
import DashboardHome from "../page/dashboardHome/DashboardHome"
import TitacPoliticasPage from "../page/tictac/TitacPoliticasPage"
import FuelAppPoliticasPage from "../page/fuelApp/FuelAppPoliticasPage"


function RutesScreen() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/tic-tac-toe-politicas" element={<DashboardHome />} /> 
        <Route path="/tic-tac-toe-politicas/app/tic-tac-toe-politicas-condicion" element={<TitacPoliticasPage />} />
        <Route path="/tic-tac-toe-politicas/app/fuel-app-politicas-condicion" element={<FuelAppPoliticasPage />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RutesScreen
