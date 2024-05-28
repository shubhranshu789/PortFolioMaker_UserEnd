import { useEffect } from 'react';
import Header from '../../Components/Header'
import FooterIcons from '../../Components/FooterIcons'
import './AddProjects.css'
import pic1 from '../../Images/2.JPG'
import pic2 from '../../Images/Capture.JPG'
import pic3 from '../../Images/lion.webp'

import { Link , useNavigate } from 'react-router-dom'


function AddProjects() {
  const navigate = useNavigate();




  const handleSubmitlogo = (e) => {  
    navigate('/addlogo')
  }
  const handleSubmitBrand = (e) => {  
    navigate('/brandadd')
  }
  const handleSubmitGraphics = (e) => {  
    navigate('/graphicsadd')
  }
  const handleSubmitUiDesign = (e) => {  
    navigate('/uidesignadd')
  }
  const handleSubmitPresentation = (e) => {  
    navigate('/presentationadd')
  }
  const handleSubmitListening = (e) => {  
    navigate('/listeningadd')
  }
  
  useEffect(() => {
    const token = localStorage.getItem("jwt");
      if(!token){
        navigate('/signin')
      }
  }, []);




  return (
    <div className='AddProjects'>
      <Header />

      <div className="ApMainDIv">
        <div className="ApbtnsNPics">
          <div className="ApBtns">
          
            <button onClick={() => {handleSubmitlogo()}} className='AppAddBtn AppAddBtn1'>Add Logo</button>
            <button onClick={() => {handleSubmitGraphics()}} className='AppAddBtn AppAddBtn2'>Add Social Media Graphics</button>
            <button onClick={() => {handleSubmitUiDesign()}} className='AppAddBtn AppAddBtn3'>Add UI Designs</button>
            <button onClick={() => {handleSubmitBrand()}} className='AppAddBtn AppAddBtn4'>Add Brand Identity Projects</button>
          </div>


          <div className="imageTags">


            <Link className="cardimageTags" to={'/viewlogo'}>
              <div className="cardimageTags1">
                <img src={pic3} alt="" />
              </div>
            </Link>
            <Link className="cardimageTags" to={'/graphicsview'}>
              <div className="cardimageTags1">
                <img src={pic2} alt="" />
              </div>
            </Link>
            <Link className="cardimageTags" to={'/uidesignview'}>
              <div className="cardimageTags1">
                <img src={pic3} alt="" />
              </div>
            </Link>
            <Link className="cardimageTags" to={'/brandview'}>
              <div className="cardimageTags1">
                <img src={pic2} alt="" />
              </div>
            </Link>
          </div>

          <br />
          <br />
          <br />
          <br />
        </div>





        <div  className="ApbtnsNPics">
          <div style={{width : "50%"}} className="ApBtns">
          
            <button onClick={() => {  handleSubmitPresentation() }} className='AppAddBtn AppAddBtn1'>Add Presentation</button>
            <button onClick={() => {  handleSubmitListening() }} className='AppAddBtn AppAddBtn2'> Listing Creatives</button>
          </div>


          <div style={{width : "50%"}} className="imageTags">


            <Link className="cardimageTags" to={'/presentationview'}>
              <div className="cardimageTags1">
                <img src={pic3} alt="" />
              </div>
            </Link>
            <Link className="cardimageTags" to={'/listeningview'}>
              <div className="cardimageTags1">
                <img src={pic2} alt="" />
              </div>
            </Link>
           
          </div>
        </div>








      </div>

    <div className="AP-footer">
      {/* <FooterIcons />  */}
      <br />
      <br />
      <br />
      <br />
    </div>
    </div>
  )
}

export default AddProjects