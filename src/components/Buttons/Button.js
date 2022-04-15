import './Button.css'

const Button = ({name,size}) => {
  return (
    <button className='button'><p className='para' style={{fontSize:size}}>{name}</p></button>
  )
}

export default Button