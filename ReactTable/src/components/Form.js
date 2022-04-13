import React from "react";

const Form = ({addFormSubmit, addForm}) =>
{
	return (
		<form className="form-inline" onSubmit={addFormSubmit}>
			<div className="form-group">
				<input type="text" name="name" className='form-control form-inline_input' required placeholder='Your name' onChange={addForm}/>
				<input type="text" name="age" className='form-control form-inline_input'  required placeholder='Your age' onChange={addForm}/>
				<input type="text" name="email" className='form-control form-inline_input' required placeholder='Your email' onChange={addForm}/>
				<button type="submit" className='btn btn-primary' >Add</button>
			</div>
		</form>
	);			
};

export default Form; 