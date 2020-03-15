import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';



class Header extends Component {


    render() {
        return (
            <>
            <div className="nav">
                <Link to="/imageUpload" className="navLink">Class Component Upload</Link>
                <Link to="/reduxUpload" className="navLink">Redux Enabled Upload</Link>
                <Link to="/reduxDisplayImages" className="navLink">Redux Display Images</Link>
            </div>
            <div className='container mt-4'>
                <h4 className='display-4 text-center mb-4'>
                    <span role="img" aria-label="picture">🖼️</span>
                    Upload An Image
                    <span role="img" aria-label="picture">🖼️</span>
                </h4>
            </div>
            </>
        )
    }
}


export default Header;