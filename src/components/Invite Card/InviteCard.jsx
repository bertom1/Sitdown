import { BsThreeDotsVertical } from 'react-icons/bs'
import { useEvent, useInvite } from '../../Context/EventContext'
import { useNavigate } from 'react-router-dom'
import Celebration from '../../image/celebration.svg'
import '../Event Card/EventCard.css'

//replace hardcoded text with data from mock DB
const InviteCard = ({invite, id}) => {
    const {delInv} = useInvite()
    const {addEvent} = useEvent()
    const nav = useNavigate()
    const handleAdd = (e) => {
        e.cancelBubble = true
        e.stopPropagation()
        addEvent(invite)
        delInv(id)
    }
    const handleDelete = (e) => {
        e.cancelBubble = true
        e.stopPropagation()
        if (window.confirm('Are you sure you want to decline the invite? \nYou will need to request a new invite if you decide change your mind after deleting.'))
        delInv(id)
    }
    return <div className='w-full h-48 border-2 border-black rounded-xl px-2 mb-2' onClick={()=>nav(`/invite/${id}`, {replace: true})}>
            <div className='flex relative justify-center'>
                <h3 className=''>Invited to: {invite.title}</h3>
                <BsThreeDotsVertical size={22} className='ml-2 absolute right-2 top-0.5 ' />
            </div>
            <div className='flex '>
                <div className='w-30'>
                    <img className='w-full h-full' src={Celebration} alt='celebration' />
                </div>
                <div className='w-full mx-2 '>
                    <div className='w-full h-16 '>
                        <p className='text-left leading-tight line-clamp'>Description: {invite.description}
                        </p>
                    </div>
                    <div className='text-left '>
                            <p>Date: {invite.date}</p>
                            <p>Time: {invite.time}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                    <button type='button' onClick={handleAdd}className='bg-green rounded-lg text-white px-5 py-1 mr-8'>Accept</ button>
                    <button type='button' onClick={handleDelete}className='rounded-lg px-5 py-1 bg-red-500 text-white'>Decline</ button>
            </div> 
    </div>
}

export default InviteCard