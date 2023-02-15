import './LibraryAnimeItem.css'
import '../../Data/LibraryData'
import { SecondaryButton } from '../Buttons/Buttons'

const LibraryAnimeItem = (props) =>{
    return(
        <div className='Library-Anime-Item'>
               <ul>
                <li><img className='img-Library' src={props.img} alt='img of anime'/></li>
                <li><h4>Name<br/><span>{props.title}</span></h4></li>
                <li><h4>Date Added<br/><span>{props.Date}</span></h4></li>
                <li><h4>Hours Played<br/><span>{props.Hours}</span></h4></li>
                <li><SecondaryButton link="/#">Download</SecondaryButton></li>

               </ul>
        </div>

    )
}

export default LibraryAnimeItem