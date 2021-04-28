import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
// import avatar from '../img/avatar.jpg'

function Navigation(){
    return(
      <NavigationStyled>
          <div className="avatar">
              <img src='https://stackblitz.com/files/react-kbk777/github/MrGanesh/react-portfolio/master/src/img/ganesh.jpg' alt=" "/>
          </div>

          <ul className="nav-items">
              <li className="nav-items">
                  <NavLink to="/home" activeClassName="active "> Home </ NavLink>
              </li>    
              <li className="nav-items">
                  <NavLink to="/about" activeClassName="active "> About </ NavLink>
              </li>    
              <li className="nav-items">
                  <NavLink to="/resume" activeClassName="active "> Resume </ NavLink>
              </li>    
              <li className="nav-items">
                  <NavLink to="/projects" activeClassName="active "> Projects </ NavLink>
              </li>    
              <li className="nav-items">
                  <NavLink to="/experience" activeClassName="active "> Experience </ NavLink>
              </li>    
              <li className="nav-items">
                  <NavLink to="/contact" activeClassName="active "> Contact </ NavLink>
              </li>    
          </ul>

          <footer className="footer">
                <p> @2021 My Portfolio </p>
          </footer>
      </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    algn-items:center;
    height:100%;
    width:100%;
    border-right:1px solid var(--border-color);
    .avatar{
      width:100%;
      border-bottom:8px solid var(--border-color);
      text-align:center;
      padding:2rem 0;

      img{
        width:50%;
        border-radius:50%;
        border:8px solid var(--border-color);
      }


    }
`;

export default Navigation