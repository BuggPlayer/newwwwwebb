import React , {useState} from 'react'
import menuItem from './MenuItems'
import "./Navbar.css"

const Nav = () => {

  const [state, setstate] = useState(false)

  const handleClick =()=>{
    setstate(!state)
  }
  return (
    <nav >
  
    <p style={{   fontFamily:"Inter" , fontSize:24, fontWeight:600  }}>Compasslry</p>
    <div className="menu-icon" onClick={handleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
    
    <ul className={state ? "nav-menu active" : "nav-menu"}>
      {menuItem.map((item, index) => {
        return (
          <li key={index}>
            <a   style={{
               color:"black",
               fontFamily:"Inter", textDecoration:"none"
            }}  href={item.url}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
    
    <p className='signup' >Sign up >>>></p>
  </nav>
  )
}

export default Nav