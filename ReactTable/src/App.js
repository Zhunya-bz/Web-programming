import React, { useEffect, useState, Fragment} from 'react';
import axios from 'axios';
import './App.css';
import {deleteDataServ, putDataServ, getDataServ} from './components/ServerFunc.js';
import TableRow from './components/TableRow.js';
import Form from './components/Form.js';
import EditRow from './components/EditRow.js';

axios.defaults.baseURL = 'http://178.128.196.163:3000/api/records/';

function App()
{
  const [contacts, setContacts] = useState([]);

  // данные которые вводятся при добавлении поля
  const [addFormData, setAddFormData] = useState(
    {
      name: "",
      age: "",
      email: "",
    }
  );
  //   //  для изменения и взятия данных из текущих полей таблицы
  // let [editFormData, setEditFormData] = useState(
  //   {
  //     name: "",
  //     age: "",
  //     email: "",
  //   }
  // );

  //переменная чтобы определить какой id используется в данном
  // случае, если null - то никакой. Нужен для редактирования строки
  // const [editContId, setEditContId] = useState(null); 


  useEffect(()=> { // вызывается один раз
    getDataServ().then(result => setContacts(result));
  }, []);


  const addForm = (event) => 
  {
    event.preventDefault();  // отмена события
    const fieldName = event.target.getAttribute('name'); // что лежит в инпуте под name - это name and age and email
    const fieldValue = event.target.value; 
  
    const newFormData = {...addFormData}; // копирует с возсожностью расширения
    newFormData[fieldName] = fieldValue; //заполняем массив новыми значениями
  
    setAddFormData(newFormData); // обновляем наш  addFormData, изначально был пустым
  };

  // const editFormChange = (event) => 
  // {
  //   event.preventDefault();  // отмена события
  //   const fieldName = event.target.getAttribute('name'); // что лежит в инпуте под name - это name and age and email
  //   const fieldValue = event.target.value; 
  
  //   const newFormData = {...editFormData}; // копирует с возсожностью расширения
  //   newFormData[fieldName] = fieldValue; //заполняем массив новыми значениями
  
  //   setEditFormData(newFormData); // обновляем наш  editFormData, изначально был пустым
  //   console.log("edform: ", editFormData);
  // };

  const addFormSubmit = (event) => 
  {
    event.preventDefault();// нужно для того чтобы при нажатии на кнопку страница не обновлялась

    const newRow = 
    {
      data :
      {
        name: addFormData.name,
        age: addFormData.age,
        email: addFormData.email,
      },
    };

    let res = putDataServ(newRow); // посылаем на сервер наше новое значение
    res.then(result => 
      {
        const newCont = [...contacts, result];
        setContacts(newCont);
      });
  };

  const deleteFunc = (contactId) => 
  {
   let del = deleteDataServ(contactId);

    let newArr = contacts.filter(function(value) {
      if (value._id !== contactId)
        return value;
    });
    setContacts(newArr);
  };

  // const editClick = (event, info) =>
  // {
  //   event.preventDefault();
  //   setEditContId(info._id);
  //   // console.log("info ", info.data.name);

  //   const formValues = {
  //       name: info.data.name,
  //       age: info.data.age,
  //       email: info.data.email,
  //   };
  //   console.log("fornVal ", formValues);
  //   setEditFormData(formValues);
  //   // console.log(await getValue()); 
  //   console.log("dataform ", editFormData);
  // }

    return (
      <div className="container">
         <h1>MyApp Table</h1> 
         <form>
         <table className="table table-striped">
          <thead>
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((info)=>(
              // <Fragment>
              //   {editContId === info._id ?
              //     (<EditRow deleteFunc={deleteFunc} 
              //       info={info} 
              //       editFormData={editFormData}
              //       editFormChange={editFormChange}/>) :
                     <TableRow info={info}
                       deleteFunc={deleteFunc} /*editClick={editClick}*//>)
              //   }
              // </Fragment>
                )}
          </tbody>
        </table>
        </form>
          <h2>Add a contact</h2>
          <Form addForm={addForm} addFormSubmit={addFormSubmit}/>
      </div>
    );
}

export default App;