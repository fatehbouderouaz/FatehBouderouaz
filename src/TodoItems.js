import React  from 'react'

const TodoItems = (props) => {
    const items = props.items;
    let length = items.length;
    const ListItems = length ? items.map(item => {
        return (
            <div key={item.id}>
                <span> {item.name} </span>
                <span> {item.tache} </span>
                <span> x </span>
            </div>
        )
    }

    ) : (
        <p>pas de taches ! </p>
    )

    return (
        <div className="ListItems">
            <div>
                <span>Nom</span>
                <span>Tache</span>
                <span>Supp</span>
            </div>
            <div>
                {ListItems}
            </div>
        </div>
    )
}

export default TodoItems
