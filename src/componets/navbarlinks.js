import React from 'react';
import {NavLink} from 'react-router-dom'
const Navbarslinks = ({navs}) => {
    return(
        <ul className=" navbar-nav  mx-auto">
            {   
                navs.map(nav => {
                return nav.name !== '' ? (
                <li className="nav-item nav-item-a" key={nav.id}>
                    <NavLink exact to={nav.url} className="nav-link text-center" >
                    <span>
                            {nav.name}
                    </span>
                    </NavLink>
                </li>
                ) : null;
                })
            }
        </ul>
    )

    // const navlist = navs.map(nav => {

    //     return (
            
    //     <li className="nav-item nav-item-a" key={nav.id}>
    //         <a href={nav.url} className="nav-link text-center" >
    //            <span>
    //                 {nav.name}
    //            </span>
    //         </a>
    //     </li>
    //     )
    // });
    // return(
    //     <ul className=" navbar-nav  mx-auto">
    //         {   navlist    }
    //     </ul>
    // )
}

export default Navbarslinks