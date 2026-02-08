import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Sppd from "./pages/Sppd";
import Perjalanan from "./pages/Perjalanan";
import NotFound from "./pages/NotFound";
import SidebarAdmin from "./components/SidebarAdmin";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route element={<SidebarAdmin />}>
          <Route path="users" element={<Users />} />
          <Route path="sppd" element={<Sppd />} />
          <Route path="perjalanan" element={<Perjalanan />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
