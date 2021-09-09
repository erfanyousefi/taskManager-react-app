import User from "./User"
function UserList(props) {
    return (
        <div>
            {props.userList.map((user, index) => <User user={user} key={index} />)}
        </div>
    )
}

export default UserList