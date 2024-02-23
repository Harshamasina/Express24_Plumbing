import React from 'react';
import { VscCallOutgoing } from "react-icons/vsc";
import { MdAddCall } from "react-icons/md";

const MakeCall = () => {
    return (
        <>
            <a href='tel:800-209-2709'>
                <span className='makeCall_icon'><MdAddCall /></span>
            </a>
        </>
    )
};

export default MakeCall;