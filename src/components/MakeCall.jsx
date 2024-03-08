import React from 'react';
import { MdAddCall } from "react-icons/md";

const MakeCall = () => {
    return (
        <>
            <a href='tel:800-209-2709' aria-label='call us at 800-209-2709'>
                <span className='makeCall_icon'><MdAddCall /></span>
            </a>
        </>
    )
};

export default MakeCall;