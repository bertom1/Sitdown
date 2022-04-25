import Celebration from '../../image/celebration.svg'
import { useEvent, useInvite } from '../../Context/EventContext'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useUser, submitEdit, } from '../../Context/UserContext'

class NameForm extends Component {
    constructor(props) {
    super(props);
    const {user, editUser} = useUser();
    this.state = {
        userName:'',
        bio: '',
        profileImage: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }


        handleSubmit(event) {

            editUser({...this.state})
        }
        render() {
            return (
              <form onSubmit={this.handleSubmit}>
                <label>
                  Username:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <br />
                  <label>
                      Bio:
                      <textarea value={this.state.bio} onChange={this.handleChange} />
                  </label>
                  <label>
                      Image:
                      <input type = "file" value= {this.state.value} onChange={this.handleChange} />
                  </label>
                    <input type="submit" value="Submit" />
              </form>
            );

      }
}