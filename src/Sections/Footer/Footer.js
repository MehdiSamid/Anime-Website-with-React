import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
    <div className="text-center p-3 bg-dark text-light">
      <span>©2023 Copyright :  
      </span>
      <Link className="text-light p-2" to="https://www.linkedin.com/in/el-mehdi-samid-448751237/">EL Mehdi Samid </Link>
    </div>
    
  </footer>
  )
}

export default Footer