import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "../page/errorPage/ErrorPage"
import DashboardHome from "../page/dashboardHome/DashboardHome"
import TitacPoliticasPage from "../page/tictac/TitacPoliticasPage"
import FuelAppPoliticasPage from "../page/fuelApp/FuelAppPoliticasPage"
import NotasSimplesPoliticasPage from "../page/notasSImples/NotasSimplesPoliticasPage"
import ControlGastosPoliticasPage from "../page/controlGastos/ControlGastosPoliticasPage"
import ProductosQuimfaPoliticasPage from "../page/productosQuimfa/ProductosQuimfaPoliticasPage"
import AlmacenMascotasPoliticasPage from "../page/almacenMascotas/AlmacenMascotasPoliticasPage"


function RutesScreen() {

  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<DashboardHome />} />
        <Route path="/app/tic-tac-toe-politicas-condicion" element={<TitacPoliticasPage />} />
        <Route path="/app/fuel-app-politicas-condicion" element={<FuelAppPoliticasPage />} />
        <Route path="/app/notas-simples-app-politicas-condicion" element={<NotasSimplesPoliticasPage />} />
        <Route path="/app/control-gastos-app-politicas-condicion" element={<ControlGastosPoliticasPage />} />
        <Route path="/app/productos-quimfa/politicas-condicion" element={<ProductosQuimfaPoliticasPage />} />
        <Route path="/app/almacen-mascotas/politicas-condicion" element={<AlmacenMascotasPoliticasPage />} />
        <Route path="/app/snake-juego/politicas-condicion" element={<AlmacenMascotasPoliticasPage />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </HashRouter>
  )
}

export default RutesScreen
