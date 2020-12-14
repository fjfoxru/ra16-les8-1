import ListItem from './ListItem';

function Users (props) {
    return (
        <ul>
            {props.data.map(item => <ListItem key={item.id} item={item} onClickItem={props.onClickItem} />)}
        </ul>

    )
}


export default Users;