import './Overview.css';
function Overview (props){
    
    const valuesToCheck = ["2%","19%","12%"];
    const isTextRed = valuesToCheck.includes(props.change);

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
                <span className={isTextRed ? "textred" : "textgreen"}>{props.change}</span>
            </div>
        </div>
        </button>
        </>
        
    );
}
export default Overview;