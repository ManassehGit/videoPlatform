import { useState } from 'react';
import './form.css';
import {useNavigate} from 'react-router-dom';
import { linkTo } from '../LinkTo/linkTo';

function Form() {

const axios = require('axios');
// States for registration
const [title, setTitle] = useState('');
const [file, setFile] = useState('');
const [details, setDetails] = useState('');

const [uploadedFile, setUploadedFile] = useState({});
const [filenom, setFilenom] = useState('');



// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [errorMsg, setErrorMsg] = useState("");

const navigate = useNavigate();

// Handling the changes
const handleTitle = (e) => {
	setTitle(e.target.value);
	setSubmitted(false);
	console.log(title);
};

const handleOption = (e) => {
	setFile(e.target.files[0]);

	console.log(e.target.files[0]);
	console.log(e.target.files[0].name);

	setSubmitted(false);
	console.log(file);
};



const handleDetails = (e) => {
	setDetails(e.target.value);
	setSubmitted(false);
	console.log(details);
};


// Handling the form submission



const handleSubmit = async (e) => {
	e.preventDefault();
	
    try{
      const data = {
		  title: title,
		  file: file,
		  details: details
	  };
	  console.log(data);

	  const formData = new FormData();
	//   console.log("The file ====== ", file)
	  formData.append('file', file);

	  console.log("Form data --- ", formData);
	  console.log("Form data keys --- ", formData.keys());
	  console.log("Form data values --- ", formData.values());
	  const res = await axios.post('/uploadVideo', formData, {
		  Headers: {
			  "Content-Type": "multipart/form-data"
		  } 
	  });
	//   console.log("Testing the api", res); 

	  const { fileName, filePath } = res.data;
	  setUploadedFile({fileName, filePath});
	  console.log(uploadedFile);
	  setFilenom(fileName);
	//   console.log(uploadedFile);
	// console.log("The res data -----======", res.data);

	  setSubmitted(true);
	  setError(false);
	  setTimeout(() => {
		navigate(linkTo('View Gallery'))
	}, 3000)

    }catch(err){

		
      console.log(err);
	  setError(true);
	  setErrorMsg(err);
	  setTimeout(() => {
		navigate(linkTo('Index'))
	}, 5000)
    }
    
};


// Showing success message
const successMessage = (filename) => {
	return (
		<div className="row d-flex justify-content-center" style={{display: submitted ? '' : 'none'}}>
		<div className='d-flex justify-content-center col-md-6'>
		<div className="alert alert-success alert-dismissible fade show" role="alert">
	<h4 className="alert-heading">{filename} added successfully</h4>
	<p>
		You would now be redirected to view the gallery
	</p>
	<hr />
	<p className="mb-0">Lots of videos to explore</p>
	<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

	  </div>

	</div>
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
		{submitted && successMessage(filenom)}
		<div className="">
			<div className="container col-md-6 justify-content-center p-5">
			<form>
			<div className="mb-3">
			<label htmlFor="formFile" className="form-label">Select Video File</label>
			<input className="form-control" type="file" id="formFile" onChange={handleOption} autoComplete="on"/>
			</div>
	<div className="mb-3">
		<label htmlFor="title" className="form-label">Video Title</label>
		<input type="password" onChange={handleTitle} className="form-control" id="title" autoComplete="on" />
	</div>
	<div className="mb-3">
		<label htmlFor="desc" className="form-label">Description</label>
    	<textarea className="form-control" id="desc" rows="3" onChange={handleDetails} autoComplete="on"></textarea>
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

