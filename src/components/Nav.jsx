import './Nav.css'



export default function Nav(props){

    return(
        <nav>
            <span>{props.personName}</span>
            <div className="status-button">
                <span className="status-indicator"></span>
                <span className="status-text">Chat With Me</span>
            </div>

        </nav>
    )  
}