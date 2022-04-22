import Celebration from '../../image/celebration.svg'
import { useEvent, useInvite } from '../../Context/EventContext'
import { GoogleMap, Marker } from '@react-google-maps/api'

const InvitePage = ({invite}) => {
    const {delInv} = useInvite()
    const {addEvent} = useEvent()
    const handleAdd = () => {
        addEvent(invite)
        delInv(invite.id)
    }
    const handleDelete = () => {
        delInv(invite.id)
    }
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
    return <div>
        <img className='mx-auto' src={Celebration} alt='celebration'/>
        <div className='text-center '>
            <p>{invite.title}</p>
            <p>{invite.date}</p>
            <p>{invite.time}</p>
            <div className='flex flex-col align-center overflow-visible'>
            <p>{invite.address}</p>
            <div className='m-auto'>
                <Map  loc={invite.geolocation} />
            </div>
            </div>
        </div>
        <div>
                <div>
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