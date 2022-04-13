import React from "react";

const TableRow = ({contacts, deleteFunc}) =>
{
	if (contacts.length !== 0){
	return (
		<tr key={info._id}>
                <td>{info.data.name}</td>
                <td>{info.data.age}</td>
                <td>{info.data.email}</td>
                <td><button className='btn btn-primary' onClick={()=>deleteFunc(info._id)}>Delete</button></td>
              </tr>
	);
	}
	else
		return null;
};

export default TableRow; 