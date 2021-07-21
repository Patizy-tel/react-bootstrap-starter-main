
import  logo  from  '../assets/landingpaper.svg';
import { Container } from 'react-bootstrap';


 const styles = {
    headline: {
      fontWeight: 'bold',
      fontSize: 18,
      padding: 200,    
    
  } ,
  imageBackground:{ backgroundImage: `url(${logo})` , position: 'relative',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height:'100vh'}
 }


const Home = () => {


  return (

    <div style={styles.imageBackground}>

    </div>
    



    
  )
}

export default Home