import React, {useContext, useState} from 'react'

const UserContext = React.createContext({user: {},
    editUser: () => {}
    })

export function useUser() {
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        userName: 'UserName',
        bio: 'Description about You',
        profileImage: ''
    })
    const submitEdit = (updatedUser) => {
        setUser(updatedUser)
    }

    const contextVals = {
        user: user,
        submitEdit: (uu) => submitEdit(uu)
    }
    return <UserContext.Provider value={contextVals} >
        {children}
    </UserContext.Provider>
}
