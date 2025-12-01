import logo from '../assets/shopping-logo.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/shop" >
            <img src={logo} alt="Shopping Logo" style={{ width: "200px", cursor: "pointer" }}/>
        </Link>
        <h1 className='mt-6 text-2xl font-semibold'>Welcome!!! - Click the logo to start shopping</h1>
    </div>
  );
}

export default Home;