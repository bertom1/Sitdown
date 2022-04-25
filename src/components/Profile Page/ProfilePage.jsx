import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useUser } from '../../Context/UserContext'

const ProfilePage = () => {
    const emptyUser = {
        userName:'',
        bio: '',
        profileImage: '',
        }
    const [curUser, setCurUser] = useState(emptyUser)
    const [editeduser, setEditedUser] = useState({...curUser})
    const [edit, setEdit] = useState(false)
    const {user, submitEdit} = useUser()
    useEffect(() => {
        setCurUser(user)
    }, [user])
    const handleChange = (e) => {
        setEditedUser({...editeduser, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        submitEdit({...editeduser})
        setEdit(false)
    }
    return (<div>
        {edit ? <form className='flex flex-col justify-end' onSubmit={handleSubmit}>
              <label className='mb-2'>
                Username:
                <input className='ml-2 mb-2' type="text" name='userName' value={editeduser.userName} onChange={handleChange} />
                </label>
                <br />
                <label className='mb-2 '>
                    Bio:
                    <textarea className='ml-2 mb-2 align-top' name='bio' value={editeduser.bio} onChange={handleChange} />
                </label>
                <label className='mb-2'>
                    Image:
                    <input className='ml-2 mb-2' type = "file" name='profileImage' defaultValue={''} onChange={handleChange} />
                </label>
                <div>
                  <input className='rounded-lg px-5 py-1 bg-gray-400 mr-4' type="submit" value="Submit" />
                  <button className='rounded-lg px-5 py-1 bg-gray-400 mr-4' onClick={() => {
                      setEditedUser(emptyUser)
                      setEdit(false)
                  }}>Cancel</button>
                </div>
            </form>
        :
        <div className='flex flex-col justify-center'> 
            <div className='w-48 h-40 border-2 m-auto'>
                <img className='w-full h-full ' src={curUser.profileImage} alt={'user profile'}/>
            </div>
            <p>UserName: {`${curUser.userName}`}</p>
            <p>Bio: {`${curUser.bio}`}</p>
            <div>
                <button className='rounded-lg px-5 py-1 bg-gray-400 mr-4' onClick={() => setEdit(true)}>
                    Edit Profile
                </button>
            </div>
        </div>
    }
    </div>
      );
}
export default ProfilePage

// class NameForm extends Component {
//     constructor(props) {
//     super(props);
    
//     this.state = {
//         userName:'',
//         bio: '',
//         profileImage: '',
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({[event.target.name]: event.target.value});
//     }


//         handleSubmit(event) {

//             editUser({...this.state})
//         }
//         render() {
//             return (
//               <form onSubmit={this.handleSubmit}>
//                 <label>
//                   Username:
//                   <input type="text" value={this.state.value} onChange={this.handleChange} />
//                   </label>
//                   <br />
//                   <label>
//                       Bio:
//                       <textarea value={this.state.bio} onChange={this.handleChange} />
//                   </label>
//                   <label>
//                       Image:
//                       <input type = "file" value= {this.state.value} onChange={this.handleChange} />
//                   </label>
//                     <input type="submit" value="Submit" />
//               </form>
//             );

//       }
// }