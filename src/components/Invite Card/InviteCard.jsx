import { BsThreeDotsVertical } from 'react-icons/bs'
import Celebration from '../../image/celebration.svg'
import '../Event Card/EventCard.css'

//replace hardcoded text with data from mock DB
const InviteCard = () => {
    return <div className='w-full h-48 border-2 border-black rounded-xl px-2 mb-2 active:bg-gray-400 hover:cursor-pointer'>
        <div className='flex relative justify-center'>
            <h3 className=''>Invited to: Filler</h3>
            <BsThreeDotsVertical size={22} className='ml-2 absolute right-2 top-0.5 ' />
        </div>
        <div className='flex '>
            <div className='w-30'>
                <img className='w-full h-full' src={Celebration} alt='celebration' />
            </div>
            <div className='w-full mx-2 '>
                <div className='w-full h-16 '>
                    <p className='text-left leading-tight line-clamp'>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ip has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <div className='text-left '>
                        <p>Date: 00/00/0000</p>
                        <p>Time: 00:00pm</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
                <button type='button' className='bg-green rounded-lg text-white px-5 py-1 mr-8 hover:bg-green-900'>Accept</ button>
                <button type='button' className='rounded-lg px-5 py-1 bg-red-500 text-white'>Decline</ button>
        </div> 
    </div>
}

export default InviteCard