import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useEvent, useInvite } from "../../Context/EventContext";
import EventCard from "../Event Card/EventCard";
import InviteCard from "../Invite Card/InviteCard";
import { NotificationManager } from "react-notifications";

const EventContainer = () => {
    //<----------Hooks---------->
    const [toggleInvite, setToggleInvite] = useState(false)
    const {events} = useEvent()
    const {invites} = useInvite()
    const createNotification = ({type, action}) => {
        console.log('notification')
        switch (action) {
            case 'accept':
                console.log('accept')
                NotificationManager.success('', `${type} accepted`, 3000)
                break
            case 'decline':
                NotificationManager.error('', `${type} declined`, 3000)
                break
            case 'delete':
                NotificationManager.error('', `${type} removed`, 3000)
                break
            default:
                console.log('scary error message')
                break
        }
    }
    return <div className='h-full flex flex-col'>
        <div className='pl-2 flex items-center py-1 bg-white' onClick={() => setToggleInvite(!toggleInvite)}>
            {toggleInvite ?
                <BsChevronUp size={20} className='mt-1' />
                :
                <BsChevronDown size={20} className='mt-1' />
            }
            <p className='text-left'>
                {toggleInvite ? 'Hide' : 'Show'} Invited Events ({invites.length})
            </p>
        </div>
        <div className='pt-2 bg-gray-300 flex-auto'>
            {toggleInvite && <div>
                {invites.length > 0 ? invites.map((inv, index) => {
                    return <InviteCard key={index} invite={inv} id={index} notificationHandler={createNotification} />
                })
                :
                <p>No Invites to display</p>
            }
            </div>
            }
            <div>
                {
                    events.length > 0 ? events.map((ev, index) => {
                        return <EventCard key={index} event={ev} id={index} notificationHandler={createNotification} />
                    })
                    :
                    <p>No Events to display</p>
                }
            </div>
        </div>
    </div>
}

export default EventContainer