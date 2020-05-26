import React, { Component } from 'react'

export class UpdateProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    UpdateProfileData = async () => {
        const opts = {
            "data": {
                idToken: response.tokenObj.id_token
            }
        }
        const res = await NgFetch('/students/details/upload_file/{uploadType}', "POST", opts);
        localStorage.setItem('jwt', res.data.userToken)
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default UpdateProfile;
