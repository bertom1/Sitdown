//Reusable component for displaying events on the dashboard page.
//Include details about the event and each card should take its respective detailed event page

import { BsThreeDotsVertical } from 'react-icons/bs'
import Celebration from '../../image/celebration.svg'
import './EventCard.css'

//replace hardcoded text with data from mock DB
const EventCard = () => {
    return <div className='w-full h-40 border-2 border-black rounded-xl px-2 mb-2 active:bg-gray-400 hover:cursor-pointer'>
        <div className='flex relative justify-center'>
            <h3 className=''>Filler</h3>
            <BsThreeDotsVertical size={22} className='absolute right-2 top-0.5 ' />
        </div>
        <div className='flex'>
            <div className='w-30 h-30'>
                <img className='w-full h-full' src={Celebration} alt='celebration' />
            </div>
            <div className='w-full h-16 mx-2'>
                <p className=' w-full h-full text-left leading-tight line-clamp'>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ip has been the industry's standard dummy text ever since the 1500s
                </p>
                <div
                className='text-left'>
                    <p>Date: 00/00/0000</p>
                    <p>Time: 00:00pm</p>
                </div>
            </div>
        </div>
    </div>
}

export default EventCard