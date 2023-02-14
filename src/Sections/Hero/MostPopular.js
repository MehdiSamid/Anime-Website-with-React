import './MostPopular.css'
import {MostPopularItem , SectionWrapper} from '../../Components/index'
import MostPopularData from '../../Data/MostPopularData'

const MostPopular = () => {



  const cards = MostPopularData.map(card =>{
    return <MostPopularItem key={card.id} img={card.img} title={card.title} genre="Anime" avis="4.7" downloads="1.4M"/>
  })
  return (
    <SectionWrapper title="Most Popular" >
      <div className='most-popular-items'>  
            {cards}
      </div>
          
       </SectionWrapper>
  )
}

export default MostPopular