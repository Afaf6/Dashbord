
import './Followers.css';
function Followers (props) {
  
  
    return (
    
             <button id="label" className={props.username == "@realnathanf" ? "bgista" : 
                                           props.username =="@nathanf" ? "bgblue" : "bgred" }>
            <div className="div1">
             <img src={props.platform}/>
            <span>{props.username}</span>   
            </div>
            <h1>{props.value}</h1>
            <p>{props.metric}</p>
            <div className="div2">
                <img src={props.icon}/>
                <span className={props.metric == "Subscribers" ? "textred" : "textgreen"}>{props.change}</span>
            </div>
        </button>
    
       
    )
}
export default Followers;