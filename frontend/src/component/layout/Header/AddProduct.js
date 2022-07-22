import React from 'react'
import "./Header.css";
import AddCircle from '@material-ui/icons/AddCircle';
// import iconn from "../../../images/iconn.png";

const AddProduct = () => {
    return (
        <div>
        <a href='/addProduct' className='Adder'>
            <AddCircle className='ssvg'/>
            </a>
        </div>
    )
}

export default AddProduct
