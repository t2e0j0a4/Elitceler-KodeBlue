"use client";

// React Icons
import { BsChatLeftText } from 'react-icons/bs';
import { MdCall, MdDocumentScanner, MdOutlineAssignmentTurnedIn } from 'react-icons/md';

const HeadButton = ({bgColor, label}: { bgColor: string, label: string}) => {
    return (
        <button title={label} style={{ backgroundColor: bgColor }} type='button' onClick={(e) => {console.log(e.currentTarget.textContent)}}>
            {
                label === 'Call' ? <MdCall fontSize={17}/> : label === 'Talk' ? <BsChatLeftText fontSize={17}/> : label === 'Documents' ? <MdDocumentScanner fontSize={17}/> : <MdOutlineAssignmentTurnedIn fontSize={17}/>
            }
            <p>{label}</p>
        </button>
    )
}

export default HeadButton;