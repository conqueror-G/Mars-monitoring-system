import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/nav/Nav'
import SideNav from './components/sideNav/SideNav'
import AdminHistory from './pages/adminHistory/adminHistory'
import AdminMapping from './pages/adminMapping/AdminMapping'
import DeviceDetail from './pages/deviceDetail/DeviceDetail'
import DeviceList from './pages/deviceList/DeviceList'
import EquipmentDetail from './pages/equipmentDetail/EquipmentDetail'
import EquipmentList from './pages/equipmentList/EquipmentList'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

const Routers = () => {
  return (
    <BrowserRouter>
      <Nav />
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/equipmentList" element={<EquipmentList />} />
        <Route path="/equipmentDetail" element={<EquipmentDetail />} />
        <Route path="/deviceList" element={<DeviceList />} />
        <Route path="/deviceDetail" element={<DeviceDetail />} />
        <Route path="/adminMapping" element={<AdminMapping />} />
        <Route path="/adminHistory" element={<AdminHistory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
