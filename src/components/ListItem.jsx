function ListItem (props) {
    return (
        <>
          <li onClick={() => props.onClickItem(props.item.id)}>{props.item.name}</li>  
        </>
    )
}


export default ListItem;