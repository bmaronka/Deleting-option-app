const Person = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <button onClick={() => props.delete(props.id)}>Delete</button>
        </li>
    )
}

class List extends React.Component {
    state = {
        people: [
            {
                id: 1,
                name: 'John',
            },
            {
                id: 2,
                name: 'Karen',
            },
            {
                id: 3,
                name: 'Mary',
            },
            {
                id: 4,
                name: 'Tim',
            }
        ],
    }

    handleDeletePerson = id => {
        const newPeople = this.state.people.filter(person => person.id !== id);

        this.setState({
            people: newPeople,
        })
    }


    render() {
        const people = this.state.people.map(person => (
            <Person id={person.id} key={person.id} name={person.name} delete={this.handleDeletePerson} />
        ))

        return (
            <ul>
                {people}
            </ul>
        );
    }
}

ReactDOM.render(<List />, document.getElementById('root'));