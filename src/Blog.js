import React from "react"
import axios from "axios"


class Blog extends React.Component {
    state = {
        users: []
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            console.log(res.data);
            this.setState({
                users: res.data
            })
        })
    }
    render() {
        return (
            <div>
                <h2>Blog</h2>
                <div>
                    { this.state.users.map(user => <div>Name : { user.name } email : { user.email }</div> )}
                </div>
            </div>
        )
    }
}

export default Blog

   

