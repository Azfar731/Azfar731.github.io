import "./Footer.css"

export default function Footer(props){
    return (
        <div id="Footer">
            <div className="nameEmail">
                <span className="footer name">{props.personName}</span>
                <div className="email animated-underline">azfarrazzaq23@gmail.com</div>
            </div>
            <span>Kayser Web  |  30.289.467/0001-64  {"©"}  All Rights Reserved</span>
        </div>

    )
}