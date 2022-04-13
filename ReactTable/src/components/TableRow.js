import React from "react";

const TableRow = ({info, deleteFunc, editClick}) =>
{
	return (
		<> 
		{info.hasOwnProperty('data')? ( //проверка на существование свойства data
		<tr key={info._id}>
                <td>{info.data.name}</td>
                <td>{info.data.age}</td>
                <td>{info.data.email}</td>
                <td>
					<button type="button" className="btn btn-primary btn-one" onClick={(event) => editClick(event, info)}>Edit</button>
					<button type="button" className='btn btn-primary' onClick={()=>deleteFunc(info._id)}>Delete</button>
				</td>
              </tr>
		) :  
		(<tr key={info._id}>
			<td></td>
			<td></td>
			<td></td>
			<td>
				<button type="button" className="btn btn-primary btn-one" onClick={(event) => editClick(event, info)}>Edit</button>
				<button type="button" className='btn btn-primary' onClick={()=>deleteFunc(info._id)}>Delete</button>
			</td>
		  </tr>)
		}
		</>
	);
};

export default TableRow; 