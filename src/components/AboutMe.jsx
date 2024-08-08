import { useEffect, useRef, useState} from "react"
import './AboutMe.css';



export default function AboutMe(props){
    
    const [hoverState, setHoverState] = useState(true)
    const styles = useRef({});

    

    const listItems = props.aboutMeList.map((item,index) =>{
        return  <div key = {item}>  
            <div className="list-item">
                <div className="number">{index+1}</div>
                <div className="text">{item}</div>
            </div>
            {/* <hr /> */}
        </div>    
    })
 
    useEffect(() => {
        let component = document.querySelector('.listContainer');
        if(component){
        let cheight = component.offsetHeight;
        styles.current = {        
            default: {
                height: cheight,
                borderLeft: '2px solid #151515',
            },
            hover: {
                height: cheight,
                borderLeft: "2px solid #1b878a",
                boxShadow: "0 0 20px 2px #1b878a",           
            }
        }
        
        setHoverState(false)  //doing this for vertical line next to the list
         //doing this for vertical line next to the list
        
    }
    
    } ,[])
    

    const handleMouseEnter= () =>{
        props.setCurrentSection()
        setHoverState(true)
    }

    const handleMouseLeave = () =>{
        props.unsetCurrentSection()
        setHoverState(false)
    }

    return(
    <div id="AboutMe" className='container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='vl' style={hoverState?(styles.current).hover:(styles.current).default}></div> 
        <div  className="listContainer">
           {listItems}
        </div>
    </div>
    )
}