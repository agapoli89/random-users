const ButtonFetchUsers = props => (
    <button style={{
        padding: '10px 20px',
        border: '2px solid black',
        backgroundColor: 'white',
        margin: '20px'
    }} onClick={props.click}>{props.text}</button>
)

export default ButtonFetchUsers;