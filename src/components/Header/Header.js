import React, {Component} from 'react';
import '../App/App.css';



class Header extends Component {


    render() {
        return (
            <div className='container mt-4'>
                <h4 className='display-4 text-center mb-4'>
                <span role="img" aria-label="picture">🖼️</span>
                Upload An Image
                <span role="img" aria-label="picture">🖼️</span>
                </h4>
            </div>
        )
    }
}


export default Header;