import React,{Component} from "react";
import { Link } from "react-router-dom";
class LaptopsNav extends Component{
    render(){
        const {brands}=this.props;
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    Laptops</Link>
                    <div className="" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        
                   
{brands.map((m,index)=>
         <li className="nav-item" key={index}>
            
            <Link className="nav-link" to={`/all/1?brand=${m}`}>{m}</Link>
                        </li>
)}
                       
                        </ul>
                    </div>
                    </nav>
        );
    }
}
export default LaptopsNav;