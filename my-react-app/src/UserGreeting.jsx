

function UserGreeting(props){
    return(
            props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.name}!</h2> : 
                                 <h2 className="login-prompt">Please log in.</h2> 
    );
}

export default UserGreeting