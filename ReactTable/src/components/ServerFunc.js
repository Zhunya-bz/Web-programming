import axios from 'axios';

export async function deleteDataServ(id) {
	try {
	  const response = await axios.delete(`${id}`);
	  return response.data;
	}
	catch (error)
	{
	  console.log('Error', error.message);
	}
  };
  
  export async function putDataServ (row) {
	try {
	  let response = await axios.put('', row);
	  return response.data;
	}
	catch (error){
	  console.log('Error', error.message);
	}
  };
  
  export async function getDataServ () {
	try {
	  let response = await axios.get();
	  return response.data;
	}
	catch (error) {
		console.log('Error', error.message);
	}
  };
