import React from 'react';

const CreateUser = ({ onClick }) => (  //custom fucntional component 
  <div>
    <button onClick={() => onClick()}>Add New User</button>
  </div>
);

export default CreateUser;
