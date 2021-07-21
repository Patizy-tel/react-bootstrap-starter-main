
import { Nav, Container, Row ,Navbar ,Button ,FormControl,Form ,Image ,} from 'react-bootstrap'
import {Link}  from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import logo  from '../assets/logo.svg'
import './Menu.css'


 const styles = {

  menuStyle:{
    "MozBoxShadow": "0 8px 6px -6px grey",
  "WebkitBoxShadow": "0 8px 6px -6px grey",
 "boxShadow": "0 8px 6px -6px grey",
 marginLeft:'20px'

  } ,
   headerStyle:{
     flex:1,
     flexDirection:'flex-end'
   },
   container:{
    height:'100px'

   } 
   ,minNav:{
     fontFamily:"DM Sans",
     color:"gray"
   },

   helpNav:{
    fontFamily:"DM Sans",
    color:"gray",
    marginRight:'10px'
  },
   lastNav:{
    fontFamily: "DM Sans",
    fontWeight: "normal",
    lineHeight: "16px",
    letterSpacing: "-0.468947px",
    fontWeight:'700',
     fontFamily:"DM Sans",
     fontStyle:'normal'
   },
   



 }

const Menu = () => {
  return (
    <Container >

<Navbar collapseOnSelect expand="lg"  style={styles.container}>
  <Container>
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
   
    </Nav>
    <Nav>
      <a   href="#memes" style={styles.helpNav}>
        Help Center 
      </a>
      
      {'                '}  
      <a eventKey={2} href="#memes" style={styles.minNav}>
        Login
      </a>|
      <a  eventKey={2} href="#memes" style={styles.minNav}>
        Sign Up
      </a>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    <Row style={{marginTop:'-60px'}}>

    <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
        <LinkContainer to='/'>
          <Nav.Link className='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'>
          <Image src={logo} height={100} />
            
          </Nav.Link>
        </LinkContainer>
        <Nav className="justify-content-end" activeKey="/home">

    <Nav.Item>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </Nav.Item>
    <span> </span>
    <Nav.Item>
      
      <Button>USD 0.00</Button>
    
    </Nav.Item>
  </Nav>  
      </header>
    </Row>
    
    <Navbar collapseOnSelect expand="lg"  style={{marginTop:'-80px'}} >
  <Container  style={styles.menuStyle}>
  <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" style={styles.lastNav}>Meat & Fish</Nav.Link>
      <Nav.Link href="#features" style={styles.lastNav}>Fruit & Veg</Nav.Link>
      <Nav.Link href="#pricing" style={styles.lastNav}>Bakery</Nav.Link>
      <Nav.Link href="#home" style={styles.lastNav}>Food Cupboard</Nav.Link>
      <Nav.Link href="#features" style={styles.lastNav}>Household</Nav.Link>
      <Nav.Link href="#pricing" style={styles.lastNav}>Toiletries & Beauty</Nav.Link>
      <Nav.Link href="#pricing" style={styles.lastNav}>Stationary</Nav.Link>
      <Nav.Link href="#pricing" style={styles.lastNav}>Drinks</Nav.Link>

    </Nav>
    </Container>
  </Navbar>


      


    
    </Container>
  )
}

export default Menu
