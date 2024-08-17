
import './Overview.css';
function Overview (props){
    

    return (
        <>
        <button id="stylemini">
        <div id='mini1'>
            <p id="name">{props.metric}</p>
            <h3>{props.value}</h3>
        </div>
        <div id='mini2'>
            <img src={props.platform}/>
            <div className="div">
                <img src={props.icon}/>
                <span>{props.change}</span>
            </div>
        </div>
        </button>
        </>
        
    );
}
export default Overview;