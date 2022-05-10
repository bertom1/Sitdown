import Celebration from '../../image/celebration.svg'
import { useEvent, useInvite } from '../../Context/EventContext'
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { NotificationManager } from "react-notifications"

const InvitePage = () => {
    const createNotification = ({type, action}) => {
        console.log('notification')
        NotificationManager.clear()
        switch (action) {
            case 'accept':
                console.log('accept')
                NotificationManager.success('', `${type} accepted`, 3000)
                break
            case 'decline':
                NotificationManager.error('', `${type} declined`, 3000)
                break
            default:
                console.log('scary error message')
                break
        }
    }
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
    const { invites, delInv } = useInvite()
    const { addEvent } = useEvent()
    const nav = useNavigate();
    let { id } = useParams()
    id = Number(id)
    const [invite, setInvite] = useState(loader)
    const handleAdd = () => {
        addEvent(invite)
        delInv(id)
        createNotification({
            type: 'Invite',
            action: 'accept'
        })
        nav('/home', {replace: true})
    }
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to decline the invite?')){
            delInv(id)
            createNotification({
                type: 'Invite',
                action: 'decline'
            })
            nav('/home', {replace: true})
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
    const formatDate = (date) => {
        const dateArray = date.split('-')
        const dateString = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
        return <p>{dateString}</p>
    }
    const formatTime = (time) => {
        const timeArray = time.split(':')
        let hr = Number(timeArray[0])
        const end = hr / 12 >= 1 ? 'PM' : 'AM'
        const timeStr = `${hr % 12 !== 0 ? hr % 12 : '12'}:${timeArray[1]} ${end}`
        return <p>{timeStr}</p>
    }
    return <div>
        <img className='mx-auto' src={Celebration} alt='celebration'/>
        <div className='text-center '>
            <p>{invite.title}</p>
            <div className='flex justify-center'>
                <AiOutlineCalendar size={18} className='mt-1 mr-2' />
                <p>{formatDate(invite.date)}</p>
            </div>
            <div className='flex justify-center' >
                <AiOutlineClockCircle size={18} className='mt-1 mr-2' />
                <p>{formatTime(invite.time)}</p>
            </div>
            <div className='flex flex-col '>
            <div className='flex justify-center' >
                <GoLocation size={18} className='mt-1 mr-1' />
                {formatAddr(invite.address)}
            </div>
            <div className='m-auto'>
                <Map  loc={invite.geolocation} />
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-center'>
            <div className='flex justify-center'>
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
            </div>
            <div className='m-auto mt-2'>
                <p>Guests:</p>
                {
                    invite.guests.map((guest, index) => {
                        return <div className='text-left' key={index}>{`${guest.name}:  ${guest.items.join(', ')}`}</div>
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