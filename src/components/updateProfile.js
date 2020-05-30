// import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'
// import NgFetch from '../utils/gadFetch'
// import axios from 'axios'
// import { connect } from 'react-redux';
// import { changeFetching } from '../store/actions/auth';
// import Spinner from 'react-spinner-material';
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// export class UpdateProfile extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             file:"",
//             fileType: "",
//             fileUrl:"",
//             loading:false,
//         }
//     }
//     fileChangedHandler = event => {
//         if (event.target.files[0].type === "imgae/png") {
//             this.setState({
//                fileType: "profilePic" 
//             })
//         } else {
//             this.setState({
//                 fileType: "profilePic"
//             })
//         }
//         this.setState({ file: event.target.files[0]})
//     }
    
//     UpdateProfileData = async () => {
//         const formData = new FormData();
//         formData.append('file', this.state.file)
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         }
//         try {
//         this.props.fetchingStart()
//         axios.post('http://localhost:3000/students/details/upload_file/profilePic', formData, config)
//         .then((res) => {
//             console.log(res, "Pralhad")
//             this.setState({
//                 fileUrl:res.data.fileUrl,
//                 loading:false,
//             })
//             this.props.fetchingFinish()
//         })
//     }catch(e){
//         console.log(e);
//         this.props.fetchingFinish() 
//     }
//     }
//     render() {
//         return (
//             <div>
//                 <h1> Update your Profile :-</h1>
//                 <h1> Update your Profile :-</h1>
//                 <img style={{height:175,width:190}} src={this.state.fileUrl} />
//                 <input type="file" onChange={this.fileChangedHandler} />
//                 <Dialog
//                 open={this.state.loading}
//             >
//                 <DialogContent style={{container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         flexDirection: 'column',
//         maxWidth: 250,
//         },}}>
//                     <Spinner size={35} spinnerColor={"green"} spinnerWidth={5} visible={this.state.loading} />
//                 </DialogContent>
//             </Dialog>
//                 <button onClick={this.UpdateProfileData}>Upload!</button>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch)=>({
//     fetchingStart: () => dispatch(changeFetching(true)),
//     fetchingFinish: () => dispatch(changeFetching(false))
//   });
  
//   export default connect(undefined, mapDispatchToProps)(UpdateProfile);

