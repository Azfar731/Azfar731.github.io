import "./Services.css"
import ServiceCard from "./ServiceCard"
import WhatsAppButton from "/src/common/WhatsAppButton"
import CircularText from "./CircularText"

export default function Services(props){

    const handleMouseEnter= () =>{
        props.setCurrentSection()
        
    }

    const handleMouseLeave = () =>{
        props.unsetCurrentSection()

    }


    return (
        <div id="Services" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <div id="servicesLogo">
                <CircularText text={` React Developer •`}/>
            </div> 
            <div id="topDiv"  className="radialGradient"></div>
            <div id="bottomLeftDiv" className="radialGradient"></div>
            <div id="bottomRightDiv" className="radialGradient"></div>
            <div id="servicesContent">
                <span className='smallText'>HOW CAN I HELP?</span>
                <h2 id="serviceTitle" className="h2Titles">Services</h2>
                <div id="servicesCardContainer">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
                <WhatsAppButton />
            </div>
        </div>
    )
}