
import './RecentWork.css'
import WorkCard from "./WorkCard"
export default function RecentWork(props){

    
    const projectCards = props.projects.map(proj =>{
        return <WorkCard key={proj.projectTitle} project={proj}/>    
    })

    const handleMouseEnter= () =>{
        props.setCurrentSection()
        
    }

    const handleMouseLeave = () =>{
        props.unsetCurrentSection()
       
    }

    
    return(
        <div id="Work"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
            <span className='smallText'>Happy Clients {"<3"}</span>
            <h2 className="h2Titles">Recent Work</h2>
            <div id='workCardsContainer'>
               
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />

            </div>
        </div>

    )
}