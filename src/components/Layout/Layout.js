// import {useState} from 'react'
// import { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import base from "../../api/base"
import Menu from '../Menu/Menu'
import "./Layout.css"

const Layout = () => {
  console.log("layout")
  // const [projects, setProjects] = useState([]);
  // const [editors, setEditors] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  // useEffect(() =>{
  //   base("projects")
  //     .select({view: "Grid view"})
  //     .eachPage((records, fetchNextPage) => {
  //       setProjects(records);
  //       fetchNextPage();
  //     })
  //   base("editors")
  //   .select({view: "Grid view"})
  //   .eachPage((records, fetchNextPage) => {
  //     setEditors(records);
  //     fetchNextPage();
  //     setLoaded(true)
  //   })
  // }, []);
  
  return (
    <>
      {/* {loaded === true && <Menu projects={projects} editors={editors}/> } */}
      <Menu />
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default Layout;