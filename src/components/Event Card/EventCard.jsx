//Reusable component for displaying events on the dashboard page.
//Include details about the event and each card should take its respective detailed event page

import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Celebration from '../../image/celebration.svg'
import './EventCard.css'

const EventCard = ({event, id}) => {
    return <div className='w-full h-40 border-2 border-black rounded-xl px-2 mb-2 active:bg-gray-400 hover:cursor-pointer'>
        <Link to={`/event/${id}`} >
            <div className='flex relative justify-center'>
                <h3 className=''>{event.title}</h3>
                <BsThreeDotsVertical size={22} className='absolute right-2 top-0.5 ' />
            </div>
            <div className='flex'>
                <div className='w-30'>
                    <img className='w-full h-full' src={Celebration} alt='celebration' />
                </div>
                <div className='w-full h-full mx-2'>
                    <div className=''>
                        <p className='h-16 text-left leading-tight line-clamp'>Description: 
                            {event.description || 'No description'}
                        </p>
                    </div>
                    <div className='text-left'>
                        <p>Date: {event.date}</p>
                        <p>Time: {event.time}</p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
}

export default EventCard