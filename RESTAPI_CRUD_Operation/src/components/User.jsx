import React from 'react';  //system defined imports
import styled from 'styled-components';  //system defined imports for styling img

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;

  h4 {
    margin-bottom: 0;
  }
  span {
    color: gray;
    font-size: 0.6rem;
    margin-right: 5px;

    &:hover {
      color: black;
      cursor: pointer;
    }
  }
`;

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 50px;
  box-shadow: 0px 0px 0px 3px rgba(65, 208, 201, 0.75);
  margin-right: 0.75rem;
`;
const User = ({ firstName, lastName, avatar, remove, edit }) => (  //custom functional component
  <Container> {/*defined in above styled-components*/}
    <Avatar   //defined in above imported styled-components
      src={avatar}
      alt={`avatar of ${firstName} ${lastName}.`}
    />
    <div style={{ textAlign: 'left' }}>
      <h4>
        {firstName} {lastName}
      </h4>
      <span onClick={remove}>Remove</span>
    </div>
  </Container>
);

export default User;
