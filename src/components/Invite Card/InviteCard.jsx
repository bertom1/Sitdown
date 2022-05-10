// import { BsThreeDotsVertical } from 'react-icons/bs'
import { useEvent, useInvite } from '../../Context/EventContext'
import { useNavigate } from 'react-router-dom'
// import { Menu, MenuItem, MenuButton, MenuGroup } from '@szhsin/react-menu'
// import "@szhsin/react-menu/dist/index.css";
import Celebration from '../../image/celebration.svg'
import '../Event Card/EventCard.css'

//replace hardcoded text with data from mock DB
const InviteCard = ({invite, id, notificationHandler}) => {
    const {delInv} = useInvite()
    const {addEvent} = useEvent()
    const nav = useNavigate()
    // const layerButton = (e) => {
    //     e.stopPropagation()
    // }
    const handleAdd = (e) => {
        e.stopPropagation()
        addEvent(invite)
        delInv(id)
        notificationHandler({
            type: 'invite',
            action: 'accept'
        })
    }
    const handleDelete = (e) => {
        e.stopPropagation()
        if (window.confirm('Are you sure you want to decline the invite?')){
            delInv(id)
            notificationHandler({
                type: 'Invite',
                action: 'decline'
            })
        }
    }
    const formatDate = (date) => {
        const dateArray = date.split('-')
        const dateString = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
        return dateString
    }
    const formatTime = (time) => {
        const timeArray = time.split(':')
        let hr = Number(timeArray[0])
        const end = hr / 12 >= 1 ? 'PM' : 'AM'
        const timeStr = `${hr % 12 !== 0 ? hr % 12 : '12'}:${timeArray[1]} ${end}`
        return timeStr
    }
    return <div className='card-width h-48 m-auto shadow-lg rounded-xl px-2 mb-2 relative bg-white' 
                onClick={()=>nav(`/invite/${id}`, {replace: true})}
            >
            <div className='flex justify-center'>
                <h3 className='max-w-xs truncate'>{invite.title}</h3>
            </div>
            <div className='flex '>
                <div className='w-30'>
                    <img className='w-full h-full' src={Celebration} alt='celebration' />
                </div>
                <div className='w-full mx-2 '>
                <div className=''>
                        <p className='h-16 text-left leading-tight line-clamp'>Description: 
                            {invite.description || 'No description'}
                        </p>
                    </div>
                    <div className='text-left '>
                            <p>Date: {formatDate(invite.date)}</p>
                            <p>Time: {formatTime(invite.time)}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-2'>
                    <button type='button' onClick={handleAdd}className='bg-green rounded-lg text-white px-5 py-1 mr-8'>Accept</ button>
                    <button type='button' onClick={handleDelete}className='rounded-lg px-5 py-1 bg-red-500 text-white'>Decline</ button>
            </div> 
    </div>
}

export default InviteCard