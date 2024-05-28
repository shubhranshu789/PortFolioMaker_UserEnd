import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PortfolioSimpleFooter from "./Components/PortfolioSimpleFooter";
import AboutPage from "./Components/AboutPage/AboutSimpleFooter"; 
import AddProjects from './Components/AddProjects/AddProjects';
import AddLogo from './Components/AddProjects/AddLogo';
import ViewLogo from './Components/AddProjects/ViewLogo';

import SignUp from "./Components/AuthPage/SignUp";
import SignIn from "./Components/AuthPage/SignIn";

import BrandAdd from  './Components/AddProjects/Brand Identity/Add'
import BrandView from './Components/AddProjects/Brand Identity/View'

import GraphicsAdd from './Components/AddProjects/SOCIALMEDIAGRAPHICS/Add'
import GraphicsView from './Components/AddProjects/SOCIALMEDIAGRAPHICS/View'

import UiDesignAdd from './Components/AddProjects/UiDesigns/Add'
import UiDesignView from './Components/AddProjects/UiDesigns/View'

import PresentationAdd from './Components/AddProjects/PRESENTATION/Add'
import PresentationView from './Components/AddProjects/PRESENTATION/View'

import ListeningAdd  from './Components/AddProjects/ListiningCreative/Add'
import ListeningView from './Components/AddProjects/ListiningCreative/View'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<PortfolioSimpleFooter/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/addprojects" element={<AddProjects/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            
            <Route path="/addlogo" element={<AddLogo/>}></Route>
            <Route path="/viewlogo" element={<ViewLogo/>}></Route>

            <Route path="/brandadd" element={<BrandAdd/>}></Route>
            <Route path="/brandview" element={<BrandView/>}></Route>

            <Route path="/graphicsadd" element={<GraphicsAdd/>}></Route>
            <Route path="/graphicsview" element={<GraphicsView/>}></Route>


            <Route path="/uidesignadd" element={<UiDesignAdd/>}></Route>
            <Route path="/uidesignview" element={<UiDesignView/>}></Route>

            <Route path="/presentationadd" element={<PresentationAdd/>}></Route>
            <Route path="/presentationview" element={<PresentationView/>}></Route>


            <Route path="/listeningadd" element={<ListeningAdd/>}></Route>
            <Route path="/listeningview" element={<ListeningView/>}></Route>
          </Routes>
          <ToastContainer theme="dark" />
      </div>
    </BrowserRouter>
  );
}

export default App;
