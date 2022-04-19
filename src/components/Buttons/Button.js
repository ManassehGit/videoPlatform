import './Button.css'

const Button = ({name,size,color}) => {
  return (
    <button className='button'style={{backgroundColor:color}}><p className='para' style={{fontSize:size}}>{name}</p></button>
  )
}

export default Button