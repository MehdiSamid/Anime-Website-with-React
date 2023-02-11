import './MostPopularItem.css'
import popularImg from '../../assets/images/popular/popular-1.jpg' 


const MostPopularItem = (props) => {
  return (
    <div className='most-popular-item'>
    <div className='card-wrapper'>

                        <img className='most-popular-item-img' src={popularImg} alt='img-of-anime'/>
                    
                    <div className='most-popular-content'>
                        <h4 className='most-popular-item-title'>
                            {props.title} <br/>
                            <span>{props.genre}</span>
                        </h4>
                        <ul>
                            <li>{props.avis}</li>
                            <li>{props.downloads}</li>
                        </ul>

                    </div>
                </div>
        </div>
  )
}

export default MostPopularItem