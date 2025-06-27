import React from 'react';
import styled from 'styled-components';
import User from './User.jsx';

const Container = styled.div`
  width: 220px;
  margin: 0 auto;
`;

const UsersList = ({ users,  removeUser }) => (
  <Container>
    {users.map(user => (
      <User
        key={user.id}
        firstName={user.first_name}
        lastName={user.last_name}
        avatar={user.avatar}
        remove={() => removeUser(user.id)}
      />
    ))}
  </Container>
);

export default UsersList;
