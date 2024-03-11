import Image from 'next/image';
import './sendProfile.css';
import profile from '../../../images/profile.svg';
import { AiFillLike } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { TbMicrophone2 } from "react-icons/tb";
import { MdOutlineLocationSearching  } from "react-icons/md";
import profileCenter from '../../../images/profile-center.svg'
import { FaRegEdit , FaShare } from "react-icons/fa";

const SendProfile = () => {
  return (
    <div className='sendProfile'>
        <div className="sendProfile-content">
       <div className="sendProfile-content-up">
      <div className="sendProfile-left">
        <Image src={profile} alt='profile' />
      </div>
      <div className="sendProfile-center">
        <h1>Dr. Ahmed Hassan</h1>
        <h2>Senior Veterinary Consultant at Animalz Story Zoo</h2>
       <div className="h">
       <div>
            <AiFillLike/>
            <p>Likes</p>
         </div>
         <div>
           <FaShareAlt/>
            <p>Share</p>
        </div>
        <div>
            <TbMicrophone2/>
            <p>14.5k</p>
        </div>
        <button>
            <MdOutlineLocationSearching  />
            Featured
         </button>

       </div>

    <Image src = {profileCenter} className='profile-center' alt='profile-center' />
         
        
      </div>
      </div>
      
    </div>
    <hr />
    <div className="buttons">
        <button>
          <FaRegEdit/>
          Edit
        </button>
        <button>
          <FaShare/>
          Sahre
        </button>
      </div>

    </div>
  )
}

export default SendProfile
