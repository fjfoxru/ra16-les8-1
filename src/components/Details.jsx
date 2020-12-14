function Details (props) {
    return (
        <div>
            <p>{props.info.name}</p>
            <img src={props.info.avatar}/>
        </div>
    )
}
export default Details;