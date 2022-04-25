import './Button.css';  

const Button = ({name, size, color, handleClick}) => {
  
  return (
    <>
    <button 
    className='button' 
    style={{backgroundColor:color}}
    >
      <p className='para' style={{fontSize:size}} onClick={handleClick}>{name}</p>
    </button>

    <div class="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" id='modalLogout' ariaLabelledby="mySmallModalLabel" ariaHidden="true">
        <div class="modal-dialog modal-sm">
        <div class="modal-content">
          Log out successfull
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </>
  )

}

export default Button;