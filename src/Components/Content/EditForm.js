import React, { Component } from 'react'

export default class EditForm extends Component {
    state = {
        title: '',
        content: '',
    }


    handleInputTitle = (event) => {
        this.setState({title: event.target.value});
     }

    handleInputContent = (event) => {
       this.setState({content: event.target.value});
     }

    handleEditPost = () => {
        this.props.handleEditPost(this.props.id, this.state.title, this.state.content, false);
    }

    render() {
        if (this.props.open){
            return (
            <div>
                <input type="text" class="form-control" placeholder='Title' onChange={this.handleInputTitle}></input>
                <input type="text" class="form-control" placeholder='Content' onChange={this.handleInputContent}></input>
                <button className='btn btn-success' onClick={this.handleEditPost}>Edit</button>
            </div>
            )
        }else{
            return(
            <br />
            )
        }
    }
}
