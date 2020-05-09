import React from 'react'
import TodoItems from './TodoItems'

class Todo extends React.Component {
    state = {
        items: [
            {id: 1 , name: "Fateh" ,  tache:"course"} , 
            {id: 2 , name: "Ahmed" ,  tache:"Jouer"} , 
            {id: 3 , name: "Malak" ,  tache:"Dessin"}  
        ]
    }

    render(){
        return (
            <div>
                <TodoItems items={this.state.items} />
            </div>
        )
    }
}

export default Todo
