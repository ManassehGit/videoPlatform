import './Button.css';

const Button = ({name,size}) => {
  
  return (
    <button className='button_c' ><p className='para_c' style={{fontSize:size}}>{name}</p></button>
  )
}

export default Button