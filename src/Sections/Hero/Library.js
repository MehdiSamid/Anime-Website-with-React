import "./Library.css"
import {LibraryAnimeItem, SectionWrapper} from '../../Components/index'
import LibraryData from '../../Data/LibraryData'

const Library = () =>{

    const cards = LibraryData.map(card =>{
        return <LibraryAnimeItem key={card.id} img={card.img} title={card.title}  
        Date={card.DateAdded} Hours={card.Hours} />
    })


    return(
        <div >
            <SectionWrapper title='Library Anime'>
                <div className="Library-Anime-Item" >
                    {cards}
                </div>
            </SectionWrapper>

        </div>

    )
}

export default Library