import logo from '../assets/shopping-logo.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/shop" >
            <img src={logo} alt="Shopping Logo" style={{ width: "300px", cursor: "pointer", display:"block" }}/>
        </Link>
        <h1>Welcome!!! Click the logo to start shopping</h1>
    </div>
  );
}

export default Home;