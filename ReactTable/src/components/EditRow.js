import React from "react";

const EditRow = (deleteFunc, info, editFormData, editFormChange) =>
{
	console.log("e ", editFormData);
	return (
		<tr>
			<td>
				<input type="text" required name="name" placeholder="enter name" onChange={editFormChange} value={editFormData.name}></input>
			</td>
			<td>
				<input type="text" required name="age" placeholder="enter age" onChange={editFormChange} value={editFormData.age}></input>
			</td>
			<td>
				<input type="text" required name="email" placeholder="enter email" onChange={editFormChange} value={editFormData.email}></input>
			</td>
			<td>
					<button type="button" className="btn btn-primary btn-one" >Save</button>
					<button type="button" className='btn btn-primary' onClick={()=>deleteFunc(info._id)}>Delete</button>
			</td>
		</tr>
	)
}

export default EditRow; 