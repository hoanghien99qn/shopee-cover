import React from 'react';
import DoneImage from '../assets/img/done.png'

import '../assets/css/DoneComponent.css'

function DoneComponent(props) {
    const { hide } = props
    return (
        <div className={`done-cpn ${hide ? 'hide' : ''}`}>
            <img src={DoneImage} alt="done-img" />
            <div className="done-cpn-message">Bạn đã mua hàng thành công!</div>
        </div>
    );
}

export default DoneComponent;