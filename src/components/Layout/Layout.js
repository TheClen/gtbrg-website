import { Outlet } from "react-router-dom";
import Menu from '../Menu/Menu'
import Panel from '../Panel/Panel'
import "./Layout.css"

const Layout = () => {
  return (
    <>
      <Menu />
      <Panel />
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default Layout;