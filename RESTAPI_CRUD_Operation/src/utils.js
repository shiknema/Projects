//central utilitu class acts as a Data Access Layer for DB operations

export const getUsers = () =>     //custom method to get data
  fetch('https://reqres.in/api/users')  //get data . page recordset to 2 pages from RESt API
    .then(res => res.json())
    .then(data => data.data);    //data retreived


export const addUser = () => {  //custom method to add a new user records 
        
        const newUserData = {    //create new user object
          first_name: 'Janet',
          last_name: 'Weaver',
          avatar:   //assign pic to the user
            'https://xsgames.co/randomusers/avatar.php?g=male' 
        };
      
       return fetch('https://reqres.in/api/users', {  
          method: 'POST',  //connect to the REST API as HTTP POST method to insert record
          headers: {
            'Content-Type': 'application/json'   //type of data to be inserted is json
          },
          body: JSON.stringify(newUserData)     //convery data to json and insert
        })
          .then(res => res.json())
          .then(newUser => newUser);           //record inserted retunred if success
};



export const removeUser = id =>        //custom method to delete user based on user id passed         
  fetch(`https://reqres.in/api/users/${id}`, {  //query parameter replaced with user id to be replaced
    method: 'DELETE',                   //HTTP delete method to delete record 
    headers: {
      'Content-Type': 'application/json'  //data type is json
    }
  }).then(res => res.status === 204);    //HTTP success status code
