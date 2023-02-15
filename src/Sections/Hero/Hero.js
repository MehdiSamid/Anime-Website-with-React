import "./Hero.css"
// import heroImg from "../../assets/images/hero/hero-1.jpg" 
import { PrimaryButton } from "../../Components"


const Hero = ()=>{
    return(
       <div className="hero-main" >
        <div className="hero-text">
           <h6 className="hero-subtitle" > Welcome To Anime</h6>
           <h4 className="hero-title"> <em>Browse </em> Our Best Anime,
            </h4>
            <div className="main-button">
                <PrimaryButton link="/#" > Browse Now</PrimaryButton>
            </div>
        </div>
       </div>
        
    )
}

export default Hero;


