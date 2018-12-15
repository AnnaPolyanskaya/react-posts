import React, { Component } from 'react';
import V4 from 'uuid/v4';
import './style.css';

export default class AddForm extends Component {
  state = {
    title: '',
    author:'',
    content: '',
    open: this.props.open,
  }

  handleInputTitle = (event) => {
     this.setState({title: event.target.value});
     console.log(this.state.title)
  }
  handleInputAuthor = (event) => {
    this.setState({author: event.target.value});
  }
  handleInputContent = (event) => {
    this.setState({content: event.target.value});
  }
  handleAddPost = () =>{
    const id = V4();
    this.props.handleAddPost(id, this.state.title, this.state.author, this.state.content, false, 0);
    this.setState({open: !this.state.open})
  }

  render() {
    if (!this.state.open){
      return (
        <div>
          <input type="text" class="form-control" placeholder='Title' onChange={this.handleInputTitle}></input>
          <input type="text" class="form-control" placeholder='Content' onChange={this.handleInputContent}></input>
          <input type="text" class="form-control" placeholder='Author' onChange={this.handleInputAuthor}></input>
          <button className='btn btn-success' onClick={this.handleAddPost}>Add</button>
        </div>
      )
    }else{
      return(
        <br />
      )
    }
   
  }
}
