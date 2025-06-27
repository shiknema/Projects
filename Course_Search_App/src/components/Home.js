import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DisplayCourse from './DisplayCourse';
import JSON from './../JSON/Course.json';
import Users from './../JSON/User.json';
//import DisplayUserInfo from './DisplayUserInfo'

//const JSONdata =  JSON.courses;

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: JSON.courses,
            filtered: JSON.courses,
            userData: Users
        }
    }

    filterCourses = (keyword) => {
        var output = this.state.data.filter((item) => {
            return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
        this.setState({ filtered: output })
    }

    render() {
        return (
            <React.Fragment>
                <Header userText={(data) => { this.filterCourses(data) }} />
                <hr />
                <div>
                    <DisplayCourse displayData={this.state.filtered} />
                </div>

                { /**  <div>
                   <h3> JSON data call for single Array</h3> 
                     <DisplayUserInfo userInfo = {this.state.userData} /> 
                    </div>
                 */ }

                <hr />
                <Footer />
            </React.Fragment>
        )
    }
}
export default Home;