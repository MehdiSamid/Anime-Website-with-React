import "./hero.css"
import heroImg from "../../assets/images/hero/hero-1.jpg" 


const Hero = ()=>{
    return(
        <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={heroImg} className="d-block mx-lg-auto img-fluid" 
        alt="Bootstrap Themes" width="700" height="600" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Discover the winter 2023 anime</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Sign in</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">sign up</button>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Hero