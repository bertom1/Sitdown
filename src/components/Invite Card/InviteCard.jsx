import { BsThreeDotsVertical } from 'react-icons/bs'
import { useEvent, useInvite } from '../../Context/EventContext'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuItem, MenuButton, MenuGroup } from '@szhsin/react-menu'
import "@szhsin/react-menu/dist/index.css";
import Celebration from '../../image/celebration.svg'
import '../Event Card/EventCard.css'

//replace hardcoded text with data from mock DB
const InviteCard = ({invite, id}) => {
    const {delInv} = useInvite()
    const {addEvent} = useEvent()
    const nav = useNavigate()
    const layerButton = (e) => {
        e.stopPropagation()
    }
    const handleAdd = () => {
        addEvent(invite)
        delInv(id)
    }
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to decline the invite? \nYou will need to request a new invite if you decide change your mind after deleting.'))
        delInv(id)
    }
    return <div className='w-full h-40 border-2 border-black rounded-xl px-2 mb-2 relative' onClick={()=>nav(`/invite/${id}`, {replace: true})}>
            <div className='flex justify-center'>
                <h3 className='max-w-xs truncate'>{invite.title}</h3>
            </div>
            <div className='absolute right-2 top-0.5 '>
                <Menu onClick={layerButton} direction={'left'} align={'start'} menuButton={<MenuButton onClick={layerButton} ><BsThreeDotsVertical size={22}/></MenuButton>}>
                    <MenuGroup>
                        <MenuItem onClick={handleAdd}>Accept Invite</MenuItem>
                        <MenuItem onClick={handleDelete}>Decline Invite</MenuItem>
                    </MenuGroup>
                </Menu>
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
            {/* <div className='flex justify-center'>
                    <button type='button' onClick={handleAdd}className='bg-green rounded-lg text-white px-5 py-1 mr-8'>Accept</ button>
                    <button type='button' onClick={handleDelete}className='rounded-lg px-5 py-1 bg-red-500 text-white'>Decline</ button>
            </div>  */}
    </div>
}

export default InviteCard