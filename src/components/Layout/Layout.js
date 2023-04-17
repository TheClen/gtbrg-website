import {useState} from 'react'
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Airtable from "airtable";
import Menu from '../Menu/Menu'
import "./Layout.css"

const base = new Airtable({apiKey: "patiZ5Pu9lB8MlJaO.a55b018c2d8b62b442556f027fd92d4eece8d2a0b8845f258a83c452154910e2"}).base('appgS4x2H73CPlv7j');

const Layout = () => {
  const [projects, setProjects] = useState([]);
  const [editors, setEditors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() =>{
    base("projects")
      .select({view: "Grid view"})
      .eachPage((records, fetchNextPage) => {
        setProjects(records);
        fetchNextPage();
      })
    base("editors")
    .select({view: "Grid view"})
    .eachPage((records, fetchNextPage) => {
      setEditors(records);
      fetchNextPage();
      setLoaded(true)
    })
  }, []);
  
  return (
    <>
      {loaded === true && <Menu projects={projects} editors={editors}/> }
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default Layout;