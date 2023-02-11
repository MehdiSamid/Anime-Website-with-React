import './MostPopular.css'
import {MostPopularItem} from '../../Components/index'

const MostPopular = () => {
  return (
    <div className='section-wrapper'>
        <div className='section-header'>
            MostPopular
        </div>
        <div className='most-popular-items'>
            
            <MostPopularItem title="Naruto" genre="Anime" avis="4.6" downloads="1.4M"/>
            <MostPopularItem title="Naruto" genre="Anime" avis="4.6" downloads="1.4M"/>
            <MostPopularItem title="Naruto" genre="Anime" avis="4.6" downloads="1.4M"/>
            <MostPopularItem title="Naruto" genre="Anime" avis="4.6" downloads="1.4M"/>
            <MostPopularItem title="Naruto" genre="Anime" avis="4.6" downloads="1.4M"/>
            <MostPopularItem title="Naruto" genre="Anime" avis="4.6" downloads="1.4M"/>
            <MostPopularItem title="Naruto" genre="Anime" avis="4.6" downloads="1.4M"/>
            <MostPopularItem title="Naruto" genre="Anime" avis="4.6" downloads="1.4M"/>
                
        </div>
    </div>
  )
}

export default MostPopular