import { useState } from 'react';
import './form.css';
import {useNavigate} from 'react-router-dom';
import { linkTo } from '../LinkTo/linkTo';

function Form() {

// States for registration
const [title, setTitle] = useState('');

const [option, setOption] = useState('');

const [details, setDetails] = useState('');



// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [errorMsg, setErrorMsg] = useState("");


// Handling the changes
const handleTitle = (e) => {
	setTitle(e.target.value);
	setSubmitted(false);
};

const handleOption = (e) => {
	setOption(e.target.value);
	setSubmitted(false);
};

const handleDetails = (e) => {
	setDetails(e.target.value);
	setSubmitted(false);
};

/**Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};
*/
// Handling the form submission

const navigate = useNavigate();


const handleSubmit = async (e) => {
	e.preventDefault();
	
    try{
      const data = {
		  title: title,
		  option: option,
		  details: details
	  };
	  console.log(data);
	  setSubmitted(true);
	  setError(false);
	  setTimeout(() => {
		navigate(linkTo('View Gallery'))
	}, 5000)

    }catch(e){
      console.log(e.message);
	  setError(true);
	  setErrorMsg(e);
	  navigate(linkTo('index'));
    }
    
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>Video Uploaded</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = (err) => {
	return (
		<div className="row d-flex justify-content-center">
		<div className='d-flex justify-content-center col-md-6'>
		<div className="alert alert-warning alert-dismissible fade show" role="alert">
	<h4 className="alert-heading">file could not be added</h4>
	<p>{err.message}</p>
	<hr />
	<p className="mb-0">Kindly retry the upload</p>
	<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

	  </div>

	</div>
	</div>
	);
};


return (
	<div className="container-body">
		{error && errorMessage(errorMsg)}
		{submitted && successMessage()}
		<div className="">
			<div className="container col-md-6 justify-content-center p-5">
			<form>
			<div class="mb-3">
			<label for="formFile" class="form-label">Select Video File</label>
			<input class="form-control" type="file" id="formFile" onChange={handleOption} />
			</div>
	<div className="mb-3">
		<label for="title" className="form-label">Video Title</label>
		<input type="password" onChange={handleTitle} className="form-control" id="title" />
	</div>
	<div className="mb-3">
		<label for="desc" className="form-label">Description</label>
		<input type="text" onChange={handleDetails} className="form-control" id="desc" />
	</div>
	
	<button type="submit" onClick={handleSubmit} className="btn btn-outline-dark btn-lg">Upload</button>
	</form>
			</div>
			
		</div>
	</div>
	
);
}export default Form;



<div className="container">

{/* Calling to the methods*/} 

	

</div>

