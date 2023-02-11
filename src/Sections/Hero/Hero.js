import "./Hero.css"
// import heroImg from "../../assets/images/hero/hero-1.jpg" 


const Hero = ()=>{
    return(
       <div className="hero-main" >
        <div className="hero-text">
           <h6 className="hero-subtitle" > Welcome To Anime</h6>
           <h4 className="hero-title"> <em>Browse </em> Our Best Anime,
            </h4>
            <div className="main-button">
                <a href="browse.html"> Browse Now </a>
            </div>
        </div>
       </div>
        
    )
}

export default Hero;


