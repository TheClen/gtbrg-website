import { Outlet } from "react-router-dom";
import Menu from '../Menu/Menu'
import "./Layout.css"

const Layout = () => {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default Layout;