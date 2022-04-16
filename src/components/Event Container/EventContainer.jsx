import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import EventCard from "../Event Card/EventCard";
import InviteCard from "../Invite Card/InviteCard";

const EventContainer = () => {
    //<----------Hooks---------->
    const [toggleInvite, setToggleInvite] = useState(false)

    return <div>
        <div className='ml-2 flex items-center py-1' onClick={() => setToggleInvite(!toggleInvite)}>
            {toggleInvite ?
                <AiOutlineArrowUp size={20} className='mt-1' />
                :
                <AiOutlineArrowDown size={20} className='mt-1' />
            }
            <p className='text-left'>
                Invited Events (0)
            </p>
        </div>
        {toggleInvite && <div>
            {/**Logic for mapping through all invited events 
             * ternary to check if invited events arr from db/mock db is empty
             * map through array if not empty, otherwise display note that no events available
            */}
            <InviteCard />
        </div>
        }
        {/**logic for mapping array of events 
         * same ternary as invited logic but check arr of accepted events
        */
        <EventCard />
        }
    </div>
}

export default EventContainer