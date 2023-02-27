import './Header.css'
import logo from "../../assets/images/logo.png"
import NavItem from '../../Components/NavItems/NavItem'
import { Link } from 'react-router-dom'



const Header =()=>{

    return <nav className=" container navbar navbar-expand-lg navbar-dark text-light bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand pb-1" to="/"> 
      <img className='img-head' src={logo} alt="Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavItem>
            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
          </NavItem>
          <NavItem>
            <Link to="most-popular" className="nav-link" >Most Popular</Link>
          </NavItem>
          <NavItem>
            <Link to="Library" className="nav-link" >Library-Anime</Link>
          </NavItem>
        </ul>
        <form className="d-flex" method='get'>
          <input className="form-control me-2" name='NameAnime' type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
}
export default Header