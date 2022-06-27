import React, {useState} from 'react';
import { FaAngleDown,FaArrowUp} from 'react-icons/fa';


    
const Quest = ({title, info}) => {
    const [show, setShow] = useState(false);
  return (
          <main>
            <div className="bar">
             <h2>{title}</h2>
              <button onClick={() => setShow(!show)}>
                {!show? <FaAngleDown/> : <FaArrowUp/> }
              </button>
            </div>
            {show && <p>{info}</p> }
          </main>
  )
}

export default Quest
