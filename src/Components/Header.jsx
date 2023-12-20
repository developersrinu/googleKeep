import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAlignJustify } from "react-icons/fa";
import p1 from '../icons/unnamed.png'
import Input from './input';
import './styles/Main.css'

import { FlagContext } from './ContextProvider';
import { useContext } from 'react';


function Header() {

  const {isFlag, setFlag,theme,setTheme} = useContext(FlagContext);



  return (
    <div className='header22' style={{ backgroundColor: theme ? 'black' : 'white', color:theme ? 'white' : 'black'}}>
     
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand ><FaAlignJustify/></Navbar.Brand>

          <Navbar.Brand style={{display:'flex', alignItems:'center'}} >
            <img src={p1} alt=""  style={{width:'45px',height:'45px'}}/>
             <div>keep</div>
          </Navbar.Brand>

          <Input/>


          <Nav className="me-auto">
            <Nav.Link onClick={()=>setFlag(!isFlag)} className='subh'>
              {
                isFlag?'Grid':"list"
              }
            </Nav.Link>
            <Nav.Link  onClick={()=>setTheme(!theme)} style={{fontSize:'1.1rem'}}>
              {
                theme?'dark':'light'
              }
            </Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;