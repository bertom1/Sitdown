import React, {useContext, useState} from 'react'
/**
 * Context setup to be used as a mock DB.
 * data/actions are bundled as an object, required action/data can be extracted
 * via destructuring with a call to the useEvent hook.
 * ex. Const {addEvent, delEvent} = useEvent()
 */
const EventContext = React.createContext({events: [], 
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
        date: '10/11/2022',
        time: '19:00',
        myItems: ['Nachos', 'item', 'Cats'],
        guests: [{name: 'John', items:['Avocado', 'forks']}, {name: 'Dylan', items: ['banana', 'something random']}],
        items: ['cups', 'plates', 'doughnuts'],
        description: `Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ip has been the industry's standard dummy text ever since the 1500s`,
        address:'1600 Pennsylvania Avenue NW, Washington, DC 20500',
        geolocation:{lat: 38.8977, lng: -77.0365},
    }])
    const contextVals = {
        events: events,
        addEvent: (e) => setEvents([...events, e]),
        delEvent: (targetIndex) => setEvents(events.filter((item, index) => index !== targetIndex))
    }
    return <EventContext.Provider value={contextVals} >
        {children}
    </EventContext.Provider>
}

export const InviteProvider = ({children}) => {
    let [invites, setInvites] = useState([{
        title: `Random Event`,
        date: '01/01/2023',
        time: '12:00',
        myItems: [],
        guests: [{name: 'John', items:['Avocado', 'forks']}, {name: 'Dylan', items: ['banana', 'something random']}],
        items: ['cups', 'plates', 'doughnuts'],
        address:'1600 Pennsylvania Avenue NW, Washington, DC 20500',
        geolocation:{lat: 38.8977, lng: -77.0365},
        description: `Random event placeholder used for testing`
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