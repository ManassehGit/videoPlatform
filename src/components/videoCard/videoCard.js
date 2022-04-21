import './videoCard.css'

const VideoCard = ({title,description}) => {
  return (
   
    <div className="container">
            <h3 className="videoTitle">
                {title}
            </h3>
            <div className='line'></div>

            <p className="description">
                {description}
            </p>
      </div>
  
    )
}

export default VideoCard;