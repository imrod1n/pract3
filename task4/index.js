const people = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
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
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }

  const sortArrayByProperty = (array, property = 'name', order = 'asc') => {
    return array.sort((a, b) => {
        if (a[property] < b[property]) {
            return order === 'asc' ? -1 : 1;
        }
        if (a[property] > b[property]) {
            return order === 'asc' ? 1 : -1;
        }
    });
};

  const filterArray = (array, property, value) => {
    if (value === '' || property === '') return array;
    else return array.filter(person => person[property] === value); 
  }

function List(array, sort_property, filt_property, order, value) {
const filt_list = filterArray(array, filt_property, value);
const sort_list = sortArrayByProperty(filt_list, sort_property, order);

  const listItems = sort_list.map(person =>
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