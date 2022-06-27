import React, {useState} from 'react';
import { FaAngleDown,FaArrowUp} from 'react-icons/fa';
import './index.css';
    
const Quest = ({title, info}) => {
    const [show, setShow] = useState(false);
  return (
          <main>
            <div className="bar">
             <p className='pee'>{title}</p>
              <button onClick={() => setShow(!show)}>
                {!show? <FaAngleDown/> : <FaArrowUp/> }
              </button>
            </div>
            {show && <p className='info'>{info}</p> }
          </main>
  )
}

export default Quest
