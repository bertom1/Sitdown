import React, {useContext, useState} from 'react'
/**
 * Context setup to be used as a mock DB.
 * data/actions are bundled as an object, required action/data can be extracted
 * via destructuring with a call to the useEvent hook.
 * ex. Const {addEvent, delEvent} = useEvent()
 */
var evCounter = 1;
var invCounter = 1;

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
        id: 0,
        title: `Rachel's birthday`,
        date: '10/11/2022',
        time: '19:00',
        guests: 'Chelsea, Aseeb',
        description: `Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ip has been the industry's standard dummy text ever since the 1500s`
    }])
    const contextVals = {
        events: events,
        addEvent: (e) => setEvents([...events, {...e, id:evCounter++}]),
        delEvent: (targetId) => setEvents(events.filter((item) => item.id !== targetId))
    }
    return <EventContext.Provider value={contextVals} >
        {children}
    </EventContext.Provider>
}

export const InviteProvider = ({children}) => {
    let [invites, setInvites] = useState([{
        id: 0,
        title: `Random Event`,
        date: '01/01/2023',
        time: '12:00',
        guests: 'Chelsea, Aseeb',
        description: `Random event placeholder used for testing`
    }])
    const contextVals = {
        invites: invites,
        addInv: (e) => setInvites([...invites, {...e, id:invCounter++}]),
        delInv: (targetId) => setInvites(invites.filter((item) => item.id !== targetId))
    }
    return <InviteContext.Provider value={contextVals} >
        {children}
    </InviteContext.Provider>
}