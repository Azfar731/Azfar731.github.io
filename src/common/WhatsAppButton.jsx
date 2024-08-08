import './WhatsAppButton.css'
import whatsappLogo from '/src/assets/whatsappLogo.png';


export default function WhatsAppButton(){
    return(
        <div className="whatsapp-button">
            <span>Happy to chat on WhatsApp</span>
            <img src={whatsappLogo} alt="WhatsAppLogo" />
        </div>

    )
}