import './Button.css';  

const Button = ({name, size, color, handleClick}) => {
  
  return (
    <>
    <button 
    className='button' 
    style={{backgroundColor:color}}
    data-toggle="modal" 
    data-target=".bd-example-modal-sm"
    >
      <p className='para' style={{fontSize:size}} onClick={handleClick}>{name}</p>
    </button>

    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
        <div class="modal-content">
          Log out successfull
          </div>
        </div>
      </div>
    </>
  )

}

export default Button;