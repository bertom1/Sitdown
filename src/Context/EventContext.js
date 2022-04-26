import React, {useContext, useState} from 'react'
/**
 * Context setup to be used as a mock DB.
 * data/actions are bundled as an object, required action/data can be extracted
 * via destructuring with a call to the useEvent hook.
 * ex. Const {addEvent, delEvent} = useEvent()
 */
export const EventContext = React.createContext({events: [], 
    addEvent: () => {}, 
    delEvent: () => {} })

const InviteContext = React.createContext({invites: [],
    addInvite: () => {},
    delInvite: () => {}
})

export function useEvent() {
    return useContext(EventContext)
}

export function useInvite() {
    return useContext(InviteContext)
}

export const EventProvider = ({children}) => {
    let [events, setEvents] = useState([{
        title: `Rachel's birthday`,
        date: '2022-10-11',
        time: '19:00',
        myItems: ['Nachos', 'item', 'Cats'],
        guests: [{name: 'John', items:['Avocado', 'forks']}, {name: 'Dylan', items: ['banana', 'something random']}],
        items: ['cups', 'plates', 'doughnuts'],
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ip has been the industry's standard dummy text ever since the 1500s`,
        address:'1600 Pennsylvania Avenue NW, Washington, DC 20500',
        geolocation:{lat: 38.8977, lng: -77.0365},
    }])
    const removeItem = (targetEvent, targetItem) => {
        let te = events[targetEvent]
        let item = te.myItems[targetItem]
        let updatedItems = te.myItems.filter((_, index) => index !== targetItem)
        te.myItems = updatedItems
        te.items = [...te.items, item]
        let updatedEvents = [...events]
        updatedEvents[targetEvent] = te
        setEvents(updatedEvents)
    }
    const addItem = (targetEvent, targetItem) => {
        let te = events[targetEvent]
        let item = te.items[targetItem]
        let updatedItems = te.items.filter((_, index) => index != targetItem)
        te.myItems = [...te.myItems, item]
        te.items = updatedItems
        let updatedEvents = [...events]
        updatedEvents[targetEvent] = te
        setEvents(updatedEvents)
    }
    const addOther = (targetEvent, newItem) => {
        let te = events[targetEvent]
        te.myItems = [...te.myItems, newItem]
        let updatedEvents = [...events]
        updatedEvents[targetEvent] = te
        setEvents(updatedEvents)
    }
    const invUser = (targetEvent, user) => {
        let te = events[targetEvent]
        te.guests = [...te.guests, {name: user, items:['Invite Pending']}]
        let updatedEvents = [...events]
        updatedEvents[targetEvent] = te
        setEvents(updatedEvents)
    }
    const updateEvent = (targetEvent, newEvent) => {
        let updatedEvents = [...events]
        updatedEvents[targetEvent] = newEvent
        setEvents(updatedEvents)
    }
    const contextVals = {
        events: events,
        addEvent: (e) => setEvents([...events, e]),
        delEvent: (targetIndex) => setEvents(events.filter((item, index) => index !== targetIndex)),
        removeItem: (te, ti) => removeItem(te, ti),
        addItem: (te, ti) => addItem(te, ti),
        addOther: (te, ti) => addOther(te, ti),
        invUser: (te, u) => invUser(te, u),
        updateEvent: (te, ne) => updateEvent(te, ne)
    }
    return <EventContext.Provider value={contextVals} >
        {children}
    </EventContext.Provider>
}

export const InviteProvider = ({children}) => {
    let [invites, setInvites] = useState([{
        title: `Jack's Birthday Party`,
        date: '2023-09-21',
        time: '18:00',
        myItems: [],
        guests: [{name: 'Adam', items:['Plates', 'Forks', 'Cups']}, {name: 'Dylan', items: ['Brownies', 'Candles']}, {name:'Jessica', items:['Pizza, Breadsticks']}, {name:'Tom', items:['Chicken Wings']}],
        items: ['Soda', 'Potato Chips', 'Mac and Cheese', 'Hummus'],
        address:'1600 Pennsylvania Avenue NW, Washington, DC 20500',
        geolocation:{lat: 38.8977, lng: -77.0365},
        description: `Celebrating Jack's 23rd birthday! Gifts are optional.`
    }])
    const contextVals = {
        invites: invites,
        addInv: (e) => setInvites([...invites, e]),
        delInv: (targetIndex) => setInvites(invites.filter((item, index) => index !== targetIndex))
    }
    return <InviteContext.Provider value={contextVals} >
        {children}
    </InviteContext.Provider>
}