import './UsersList.css';

const UsersList = props => {
    const users = props.users.map(user => (
        <li key={user.login.md5} className="user">
            <img src={user.picture.large} alt={user.name.last}/>
            <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
            <p>{user.email}</p>
        </li>
      ))
    return (
        <ul className="users">{users}</ul>
    )
}

export default UsersList;