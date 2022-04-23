import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useEvent, useInvite } from "../../Context/EventContext";
import EventCard from "../Event Card/EventCard";
import InviteCard from "../Invite Card/InviteCard";

const EventContainer = () => {
    //<----------Hooks---------->
    const [toggleInvite, setToggleInvite] = useState(false)
    const {events} = useEvent()
    const {invites} = useInvite()
    return <div>
        <div className='ml-2 flex items-center py-1' onClick={() => setToggleInvite(!toggleInvite)}>
            {toggleInvite ?
                <AiOutlineArrowUp size={20} className='mt-1' />
                :
                <AiOutlineArrowDown size={20} className='mt-1' />
            }
            <p className='text-left'>
                Invited Events ({invites.length})
            </p>
        </div>
        {toggleInvite && <div>
            {invites.length > 0 ? invites.map((inv, index) => {
                return <InviteCard key={index} invite={inv} id={index} />
            })
            :
            <p>No Invites to display</p>
        }
        </div>
        }
        {
        events.map((ev, index) => {
            return <EventCard key={index} event={ev} id={index} />
        })
        }
    </div>
}

export default EventContainer