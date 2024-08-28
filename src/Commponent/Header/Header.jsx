import './Header.css';
function Header () {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-them', 'dark')
    }

    const setlightMode = () => {
        document.querySelector("body").setAttribute('data-them', 'light')
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setlightMode()
    };
    
    return (
        <div id="headerstyl">
        <div id="title">
        <h1 >
            Social Media Dashboard
        </h1>
        <p>
            Total Followers: 23,004
        </p>
        </div>
        <div id='dark-mode'>
          <label>Dark Mode</label>
          <label className="switch">
          <input type="checkbox" onChange={toggleTheme}></input>
          <span className="slider round"></span>
          </label>
        </div>
        </div>
        
    )
};
export default Header;