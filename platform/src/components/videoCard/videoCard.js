import './videoCard.css'

const videoCard = ({title,description}) => {
  return (
   
    <div className="container">
            <h2 className="videoTitle">
                {title}
            </h2>
            <div className='line'></div>

            <p className="description">
                {description}
            </p>
      </div>
  
    )
}

export default videoCard