import './videoCard.css'
import {Link} from 'react-router-dom'
import { linkTo } from '../LinkTo/linkTo'

const VideoCard = ({id, title ,description}) => {
  return (
    <Link to={`${linkTo("View Gallery")}/${id}`}>
    <div className="container">
            <h3 className="videoTitle">
                {title}
            </h3>
            <div className='line'></div>

            <p className="description">
                {description}
            </p>
      </div>
      </Link>
  
    )
}

export default VideoCard;