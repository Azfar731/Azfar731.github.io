import './Services.css'




export default function ServiceCard(){
    return(
        <div className='serviceCard'>
            <div className='serviceCardNumber'>
                <span className='greyLine'>⎯⎯⎯⎯⎯</span>
                <span className='serviceNumber'>   01</span>
            </div>
            <div className='serviceTitle'>
                <h3 className='serviceTitleLine'>WEBFLOW</h3>
                <h3 className='serviceTitleLine'>DEVELOPMENT</h3>
            </div>
            <div className='serviceDescription'>
                <p className='serviceDescriptionText'>
                Bring your design from Figma, XD, or any other tool, and we'll turn your layout into a kickass website, super organized and following the top standards of the Webflow market.
                </p>
            </div>
        </div>
    )
}