import './MostPopularItem.css'
import { AiFillStar , AiOutlineCloudDownload } from "react-icons/ai";


const MostPopularItem = (props) => {
  return (
    <div className='most-popular-item' id='most'>
    <div className='card-wrapper'>

                        <img className='most-popular-item-img' src={props.img} alt='img-of-anime'/>
                    
                    <div className='most-popular-content'>
                        <h4 className='most-popular-item-title'>
                            {props.title} <br/>
                            <span style={{color:'gray',fontSize:"12px",fontFamily:"sans-serif"}}>{props.genre}</span>
                        </h4>
                        <ul className='li-card'>
                           <li><span style={{'color':"yellow","padding":'3px',"marginBottom":"2px"}}><AiFillStar/></span><span>{props.avis}</span></li>
                            <li><span style={{'color':"var(--color-secondary)","padding":'1px',"marginBottom":"2px"}}><AiOutlineCloudDownload/></span><span>{props.downloads}</span></li>
                        </ul>

                    </div>
                </div>
        </div>
  )
}

export default MostPopularItem