import React from 'react'
import './ButtonCustom.scss'    

const ButtonCustom = () => {
    return (
        <button className='button-custom' onClick={() => {
            alert('Nút của Duy')
        }}>Nút của Duy</button>
    )
}

export default ButtonCustom