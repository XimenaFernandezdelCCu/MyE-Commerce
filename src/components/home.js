//hook
// import { useModal } from "../../hooks/useModal"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HomeContext } from "../context/homeContext";
//components
import Modal from "../components/reusable/modal";
import Browse from "../components/small/browse";
import HomeProvider from "../context/homeContext";




export default function Home(){


  return (
      <HomeProvider>
        <h1 className="title" >HOME</h1>
        <Browse/>
      </HomeProvider>
  )
}