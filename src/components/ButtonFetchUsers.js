const ButtonFetchUsers = props => (
    <button style={{
        padding: '10px 20px',
        border: '2px solid black',
        backgroundColor: 'white',
        marginTop: '20px'
    }} onClick={props.click}>Pokaż 5 użytkowników</button>
)

export default ButtonFetchUsers;