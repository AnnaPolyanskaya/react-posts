import React, { Component } from 'react';
import EditForm from './EditForm';
import Toogle from './Toogle';
import './style.css';

class PostSingle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
    }

    delete = () => {
        this.props.handleDelete(this.props.id);
    }

    changeRate = () => {
        this.props.handleRatingCount(this.props.id, this.props.rate);
    }


    render(){
        
        return(
            <div class='posts-list container'>
                <div class="card col-md-6">
                    <div className="card-header">
                        {this.props.title}
                    </div>
                    <div className="card-body">
                        <h5 class="card-title">{this.props.author}</h5>
                        <p class="card-text">{this.props.text}</p>
                        <a href="#" class="btn btn-primary" onClick={this.changeRate}>{this.props.rate}</a>
                    </div>
                    <div className='card-footer'>
                        <button type="button" class="btn btn-danger" onClick ={this.delete} >Delete</button>
                        <Toogle 
                            toogleMe = {({open, toogle}) => (
                                <div>
                                    {open && <EditForm open = {open} handleEditPost = {this.props.handleEditPost} id = {this.props.id}/>}
                                    <button type="button" class="btn btn-warning" onClick={toogle}>Edit</button>
                                </div>
                            )}
                        />
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default PostSingle;