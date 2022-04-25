import Celebration from '../../image/celebration.svg'
import { AiOutlineClose, AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEvent } from '../../Context/EventContext'

const EventPage = () => {
    const e = {
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
    const {events, delEvent, removeItem, addItem, addOther } = useEvent()
    let { id } = useParams()
    id = Number(id)
    const [event, setEvent] = useState(e)
    const [selectedItem, setSelectedItem] = useState('')
    const [otherInput, setOther] = useState('')
    useEffect(() => {
        setEvent(events[id])
    }, [events, id])
    console.log(event)
    const Map = ({loc}) => 
    {return <GoogleMap 
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
        const rest = addr.substring(firstComma + 1)
        return <p>
            {street} <br />
            {rest}
        </p>
    }
    return <div>
        <img className='mx-auto' src={Celebration} alt='celebration'/>
        <div className='text-center flex flex-col justify-center'>
            <p>{event.title}</p>
            <div className='flex justify-center'>
                <AiOutlineCalendar size={18} className='mt-1 mr-2' />
                <p>{event.date}</p>
            </div>
            <div className='flex justify-center' >
                <AiOutlineClockCircle size={18} className='mt-1 mr-2' />
                <p>{event.time}</p>
            </div>
            <div className='flex flex-col '>
            <div className='flex justify-center' >
                <AiOutlineClockCircle size={18} className='mt-1 mr-1' />
                {formatAddr(event.address)}
            </div>
            <div className='m-auto'>
                <Map  loc={event.geolocation} />
            </div>
            </div>
        </div>
        <div>
            <p>My Items: </p>
            <div className='flex justify-center' >Item: 
                {
                    selectedItem === '-1' ? <>
                    <div className='relative' >
                        <input className='border-2 border-black ml-1'type='text' onChange={(e) => setOther(e.target.value)}/>
                        <AiOutlineClose onClick={() =>{
                            setSelectedItem('')
                            setOther('')
                        }} className='absolute right-1 top-1' size={20}/>
                    </div>
                    <button className='bg-gray-400 rounded-lg ml-2 px-2 py-1 disabled:opacity-80' disabled={otherInput === '' ? true : false} onClick={() => {
                        addOther(id, otherInput)
                        setSelectedItem('')
                        setOther('')
                    }}>Add Item</button>
                    </>
                    :<>
                    <select className='ml-1' value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                        <option value='' selected disabled hidden>Add an Item</option>
                        {
                            event.items.map((item, index) => {
                                return <option value={index} key={index} > 
                                    {item}
                                </option>
                            })
                        }
                        <option value='-1'>Other (Please specify)</option>
                    </select>
                    <button className='bg-gray-400 rounded-lg ml-2 px-2 py-1 disabled:opacity-80' disabled={selectedItem === '' ? true : false} onClick={() => {
                        addItem(id, selectedItem)
                        setSelectedItem('')
                    }}>Add Item
                    </button>
                    </>
                }
                </div>
                <div className='m-auto flex mt-4 overflow-x-auto max-w-xs'>
                    {
                        event.myItems.map((item, index) => {
                            return <div key={index} className='h-min whitespace-nowrap bg-gray-400 rounded-xl pl-2 pr-5 py-2 mx-1 relative'>
                                    {item}
                                    <AiOutlineClose onClick={() => removeItem(id, index)}size={12} className='absolute top-1 right-0.5 mr-0.5' />
                                </div>
                        })
                    }
                </div>
                <div>
                    <p>Guests:</p>
                    {
                        event.guests.map((guest, index) => {
                            return <div className='text-left ml-4' key={index}>{`${guest.name}:  ${guest.items.join(', ')}`}</div>
                        })
                    }
                </div>
        </div> 
        <div className='mt-5'>
            <button className='rounded-lg px-5 py-1 bg-gray-400 mr-4' >
                Edit Event
            </button>
            <button type='button' onClick={() => {}} className='rounded-lg px-5 py-1 bg-red-500 text-white'>
                Leave Event
            </button>
        </div>
    </div>
}

export default EventPage