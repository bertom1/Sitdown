//Reusable component for displaying events on the dashboard page.
//Include details about the event and each card should take its respective detailed event page

import { BsThreeDotsVertical } from 'react-icons/bs'
import Celebration from '../../image/celebration.svg'

const EventCard = () => {
    return <div className='w-full h-40 border-2 border-black rounded-xl px-2'>
        <div className='flex relative justify-center'>
            <h3>filler text</h3>
            <BsThreeDotsVertical className='absolute right-2 top-2 ' />
        </div>
        <div className='flex'>
            <div className='w-32 h-32'>
                <img className='w-full h-full' src={Celebration} alt='celebration image' />
            </div>
            <div className='w-full h-5'>
                <p className=' w-full h-full break-words leading-tight text-ellipsis'>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
        </div>
    </div>
}

export default EventCard