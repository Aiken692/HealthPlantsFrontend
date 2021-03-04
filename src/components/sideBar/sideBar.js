import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Sidebar.css';
import { Link } from 'react-router-dom';



function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <> 
            
            
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    

                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.iconic}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            
        </>
        
    )
}
// class Sidebar extends Component{
//     render(){
        // const [sideBar, setSideBar] = useState(false)
        // return(
            // <link to = '#' className></link>
//             <div>
//                 <Link to='#'>

//                     <nav className='NavbarItems'>
//                         <h1 className='healthPlantsUgLogo'>Health Plants of Uganda</h1>
                        
//                         <ul className='navMenu'>
//                             {MenuItems.map((item, index) => {
//                                 return (
//                                     <li className='menuButton' key={index}>
//                                         <Link className={item.cName} to={item.path}>
//                                         {item.iconic}
//                                         <span>{item.title}</span>
//                                         </Link>
//                                     </li>

//                                 )
//                             })}
//                         </ul>
//                     </nav>
//                 </Link>
//             </div>
//         )
//     }
// }

export default Sidebar