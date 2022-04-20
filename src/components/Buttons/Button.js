import './Button.css';  

const Button = ({name, size, color, handleClick}) => {
  
  return (
    <button className='button'style={{backgroundColor:color}}><p className='para' style={{fontSize:size}} onClick={handleClick}>{name}</p></button>
  )

}

export default Button;