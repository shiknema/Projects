//system defined 
import React from 'react'
import ReactDOM from 'react-dom'

//system defined for bootstrap styling
import styled from 'styled-components'

//custom imports form utils.js
import { getUsers, addUser,  removeUser } from './utils'

//custom component imports
import UsersList from './components/UsersList.jsx'
import CreateUser from './components/CreateUser.jsx'
import './styles.css'

const StyledEmoji = styled.span`filter: hue-rotate(90deg)`; //rotates images 90 deg.

class App extends React.Component {  //cusotm App component
  state = {   //state
    users: []  //user array props
  }

  async componentDidMount() {   //lifecycle hook fires when component is injected to the view
    const users = await getUsers();   //calls getUsers() method from utils.js imported above. Await makes main thread wait
    this.setState({ users })          //users retreived from RESt APi assigned to local props and state updated
  }

  addUser = async () => {         //async call
    const newUser = await addUser()  //calls addUser() method from utils.js imported above. Await makes main thread wait
    let newUserList = [...this.state.users]; //create temp array to iterate over local users array
    newUserList.push(newUser);               //insert new record into local temp array  
    this.setState({                          //update the state users props with the new array that includes new record added
      users: newUserList
    })
  }


  removeUser = async id => {    //async call
    const userIsRemoved = await removeUser(id) //calls removeUser() method from utils.js imported above. Await makes main thread wait
    if (userIsRemoved) {           //if success
      const updatedUserList = this.state.users.filter(  //remove that user from the local temp array
        user => user.id !== id
      )
      this.setState({                                  //update the state users array props with the changed data      
        users: updatedUserList
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>
          Spaceheroes{' '}
          <span role="img" aria-label="rocket emoji.">
            🚀
          </span>
        </h1>
        <p>
          Volunteers heading to Mars.{' '}
          <StyledEmoji                                 //from styled-components added above for styling img
            role="img"
            aria-label="moon emoji for Spacehereos."
          >
            🌕
          </StyledEmoji>
        </p>
        <UsersList                                     //Calls custom component to display the users array data      
          users={this.state.users}                     //links connected to method to modify the data
          editUser={this.editUser}
          removeUser={this.removeUser}
        />
        <CreateUser onClick={() => this.addUser()} />     {/* Call custom component to add user on click */}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
