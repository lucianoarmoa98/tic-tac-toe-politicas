import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "../page/errorPage/ErrorPage"
import DashboardHome from "../page/dashboardHome/DashboardHome"
import TitacPoliticasPage from "../page/tictac/TitacPoliticasPage"
import FuelAppPoliticasPage from "../page/fuelApp/FuelAppPoliticasPage"
import NotasSimplesPoliticasPage from "../page/notasSImples/NotasSimplesPoliticasPage"
import ControlGastosPoliticasPage from "../page/controlGastos/ControlGastosPoliticasPage"


function RutesScreen() {

  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<DashboardHome />} /> 
        <Route path="/app/tic-tac-toe-politicas-condicion" element={<TitacPoliticasPage />} />
        <Route path="/app/fuel-app-politicas-condicion" element={<FuelAppPoliticasPage />} />
        <Route path="/app/notas-simples-app-politicas-condicion" element={<NotasSimplesPoliticasPage />} />
        <Route path="/app/control-gastos-app-politicas-condicion" element={<ControlGastosPoliticasPage />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </HashRouter>
  )
}

export default RutesScreen
