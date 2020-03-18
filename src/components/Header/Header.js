import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../App/App.css';


//using this class component to stay visable no mater what page user is in. contains links to other components
class Header extends Component {


    render() {
        return (
            <>
            {/* these are all links to pages in two different navabars */}
            <div className="nav">
                <Link to="/" className="navLink">Function Component Upload</Link>
                <Link to="/imageUpload" className="navLink">Class Component Upload</Link>
                <Link to="/reduxUpload" className="navLink">Redux Enabled Upload</Link>
                <Link to="/postgresUpload" className="navLink">Redux Enabled Postgres Upload</Link>
                <Link to="/mongoUpload" className="navLink">Redux Enabled MongoDB Upload</Link>
            </div>
            <div className="nav">
                <Link to="/reduxDisplayImages" className="navLink">Redux Display Images</Link>
                <Link to="/postgresDisplayImages" className="navLink">Postgres Display Images</Link>
                <Link to="/mongoDisplayImages" className="navLink">MongoDB Display Images</Link>
                <Link to="/infiniteScroll" className="navLink">Infinite Scroll</Link>
                <Link to="/reduxInfinitly" className="navLink">Redux Infinite Scroll</Link>
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