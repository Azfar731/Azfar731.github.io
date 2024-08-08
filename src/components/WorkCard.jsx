import {useState} from "react"
import "./WorkCard.css"
import ss from "/src/assets/google.png"
import arrow from "/src/assets/icons8-arrow-32.png"
import flag from "/src/assets/usa.png"

export default function WorkCard(){
    
    const [isHovering, setIsHovering] = useState(false);

    const workCardInfostyles = {
        default:{
            display: "flex",
            flexDirection: "column",
            background: "#242629",
            width:"90%",
            borderRadius: "1rem",
            padding: "3%",
            // fontSize: "calc(1vw)"
        },
        hover:{
            display: "flex",
            flexDirection: "column",
            background: "#0d0d0d",
            width:"90%",
            borderRadius: "1rem",
            padding: "3%",
            // fontSize: "calc(1vw)"  
        }
    }

    
    const arrowImageStyles = {
        default: {
            transform: "rotate(90deg)",
            width: "2em",
        },
        hover: {
            transform: "rotate(45deg)",
            width: "2em",
        }

    }

    const handleMouseEnter = ()=>{
        setIsHovering(true)
    }

    const handleMouseLeave = ()=>{
        setIsHovering(false)
    }
    
    return(
        <div className="workCard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
            <img src={ss} className="workCardImage" alt=""/>
            <div style={isHovering? workCardInfostyles.hover: workCardInfostyles.default}>
                <div className="workCardHeading">
                    <div className="titleContainer">
                        <div className={`workCardTitle textLine ${isHovering ? 'line1-exit' : 'line1-enter'}`}>Google</div>
                        <div className={`workCardTitleHover textLine ${isHovering ? 'line2-enter' : 'line2-exit'}`}>Google</div>
                    </div>
                    <img src={arrow} alt="little arrow image" style={isHovering? arrowImageStyles.hover : arrowImageStyles.default}/>
                </div>
                <div className="workCardLocation">
                    <img src={flag} alt="usa flag" className="locationFlag"/>
                    <span className="locationText">San Francisco - United States</span>
                </div>
                <div className="workCardPartners">
                    Developed By: AzfarRazzaq   <span className="dot">•</span>   Designed By: AzfarRazzaq
                </div>
            </div>
        </div>

    )
}