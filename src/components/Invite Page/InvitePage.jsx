import Celebration from '../../image/celebration.svg'
import { useEvent, useInvite } from '../../Context/EventContext'
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const InvitePage = () => {
    const { invites, delInv } = useInvite()
    const { addEvent } = useEvent()
    const nav = useNavigate();
    let { id } = useParams()
    id = Number(id)
    const loader = {
        title: `Loading event`,
        date: 'mm/dd/yyyy',
        time: 'hh:mm',
        guests: [],
        myItems: [],
        items: [],
        address:'loading address',
        geolocation:{lat: 0, lng: 0},
        description: `...`
    }
    const [invite, setInvite] = useState(loader)
    const handleAdd = () => {
        addEvent(invite)
        delInv(id)
        nav('/', {replace: true})
    }
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to decline the invite? \nYou will need to request a new invite if you decide change your mind after deleting.')){
            delInv(id)
            nav('/', {replace: true})
        }
    }
    useEffect(() => {
        setInvite(invites[id])
    }, [invites, id])
    const Map = ({loc}) => 
    {
        return <GoogleMap 
            mapContainerStyle={{
                height: "125px",
                width: "275px"
            }}
            center={loc}
            zoom={15}
            >
                <Marker position={loc} />
            </GoogleMap>
    }
    const formatAddr = (addr) => {
        const firstComma = addr.indexOf(',')
        const street = addr.substring(0, firstComma)
        const rest = addr.substring(firstComma + 1, addr.length)
        return <p>
            {street} <br />
            {rest}
        </p>
    }
    return <div>
        <img className='mx-auto' src={Celebration} alt='celebration'/>
        <div className='text-center '>
            <p>{invite.title}</p>
            <div className='flex justify-center'>
                <AiOutlineCalendar size={18} className='mt-1 mr-2' />
                <p>{invite.date}</p>
            </div>
            <div className='flex justify-center' >
                <AiOutlineClockCircle size={18} className='mt-1 mr-2' />
                <p>{invite.time}</p>
            </div>
            <div className='flex flex-col '>
            <div className='flex justify-center' >
                <AiOutlineClockCircle size={18} className='mt-1 mr-1' />
                {formatAddr(invite.address)}
            </div>
            <div className='m-auto'>
                <Map  loc={invite.geolocation} />
            </div>
            </div>
        </div>
        <div>
            Items: 
            <select className='ml-1'>
                <option value='' selected disabled hidden>Available Item</option>
                {
                    invite.items.map((item, index) => {
                        return <option value={index} key={index} > 
                            {item}
                        </option>
                    })
                }
                <option >Other (Please specify)</option>
            </select>
            <div className='mt-2'>
                <p>Guests:</p>
                {
                    invite.guests.map((guest, index) => {
                        return <div className='text-left ml-4' key={index}>{`${guest.name}:  ${guest.items.join(', ')}`}</div>
                    })
                }
            </div>
        </div>
        <div className='flex justify-center mt-4'>
                <button type='button' onClick={handleAdd}className='bg-green rounded-lg text-white px-5 py-1 mr-8'>Accept</ button>
                <button type='button' onClick={handleDelete}className='rounded-lg px-5 py-1 bg-red-500 text-white'>Decline</ button>
        </div> 
    </div>
}

export default InvitePage