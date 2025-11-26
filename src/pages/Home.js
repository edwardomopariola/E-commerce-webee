import logo from '../assets/shopping-logo.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/shop" >
            <img 
                src={logo} 
                alt="Shopping Logo" 
                style={{ width: "200px", cursor: "pointer" }}
            />
        </Link>
        <h1>Welcome!!!</h1>
        <h2>Click the logo to start shopping</h2>
    </div>
  );
}

export default Home;