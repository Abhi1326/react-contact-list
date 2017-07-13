
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'



class Header extends Component{
    render(){
        return(
            <header className="header">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="nav-header">
                            <a href="" className="navbar-brand hidden-xs">React Contact List</a>
                        </div>
                    </div>
                </nav>
            </header>


        )
    }
}

export default Header

