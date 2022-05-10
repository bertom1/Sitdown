//Reusable component for displaying events on the dashboard page.
//Include details about the event and each card should take its respective detailed event page

import { BsThreeDotsVertical } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuItem, MenuButton, MenuGroup } from '@szhsin/react-menu'
import "@szhsin/react-menu/dist/index.css";
import Celebration from '../../image/celebration.svg'
import './EventCard.css'
import { useEvent } from '../../Context/EventContext';

const EventCard = ({event, id, notificationHandler}) => {
    const nav = useNavigate()
    const {delEvent} = useEvent()
    const layerButton = (e) => {
        e.stopPropagation()
    }
    const handleDelete = () => {
      if (window.confirm('Are you sure you want to decline the invite? \nYou will need to request a new invite if you decide change your mind after deleting.')){
        delEvent(id)
        notificationHandler({
            type: 'Event',
            action: 'delete'
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
    return (
      <div
        onClick={() => nav(`/event/${id}`, { replace: true })}
        className="card-width h-40 shadow-lg m-auto rounded-xl px-2 mb-2 relative bg-white"
      >
        <div className="flex justify-center py-1.5">
          <h3 className="max-w-xs truncate">
            {event.title}
          </h3>
        </div>
        <div className="absolute right-2 top-1 ">
          <Menu
            direction={"left"}
            align={"start"}
            onClick={layerButton}
            menuButton={
              <MenuButton onClick={layerButton}>
                <BsThreeDotsVertical size={22} />
              </MenuButton>
            }
          >
            <MenuGroup>
              <MenuItem onClick={handleDelete}>Leave Event</MenuItem>
            </MenuGroup>
          </Menu>
        </div>
        <div className="flex">
          <div className="w-30">
            <img
              className="w-full h-full"
              src={Celebration}
              alt="celebration"
            />
          </div>
          <div className="w-full h-full mx-2">
            <div className="">
              <p className="h-15 text-left leading-tight line-clamp">
                Description: {event.description || "No description"}
              </p>
                    <div className='text-left'>
                        <p>Date: {formatDate(event.date)}</p>
                        <p>Time: {formatTime(event.time)}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default EventCard