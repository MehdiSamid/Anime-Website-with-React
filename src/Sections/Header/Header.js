import './Header.css'
import logo from "../../assets/images/logo.png"
import NavItem,{NavItemDropDown} from '../../Components/NavItems/NavItem'
import { Link } from 'react-router-dom'
const Header =()=>{
    return <nav className=" container navbar navbar-expand-lg navbar-dark text-light bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand pb-1" href="/"> 
      <img className='img-head' src={logo} alt="Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavItem>
            <Link to="/" className="nav-link active" aria-current="page" href="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="most-popular" className="nav-link" href="/">Most Popular</Link>
          </NavItem>
          <NavItemDropDown>
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </NavItemDropDown>
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