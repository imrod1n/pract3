const people = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: '1'
}, {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: '2'
}, {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: '3'
}, {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
}, {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
}];
  
function getImageUrl(person) {
    return (
        person.imageId +
        '.jpg'
    );
}

const sortArray = (array, property = 'name', order = 'asc') => {
    let sort_list = array.sort((a, b) => {
        if (a[property] < b[property]) {
            return order === 'asc' ? -1 : 1;
        }
        if (a[property] > b[property]) {
            return order === 'asc' ? 1 : -1;
        }
    });
    ReactDOM.render(List(sort_list), document.getElementById("app"));
};

const filterArray = (array, property, value) => {
    if (value === '' || property === '') ReactDOM.render(List(array), document.getElementById("app"));
    else {
        let filt_list = array.filter(person => person[property] === value);
        ReactDOM.render(List(filt_list), document.getElementById("app"));
    }
}

function List(array) {

    const listItems = array.map(person =>
        <tr key={person.id}>
            <td>
                <img
                    src={getImageUrl(person)}
                    alt={person.name}
                />
            </td>
            <td>
                <b>{person.name}</b>
            </td>
            <td>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
            </td>
        </tr>
    );
    return listItems;
}

ReactDOM.render(List(people, "name" , "", "asc", ""),document.getElementById("app"));