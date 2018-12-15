import React, { Component } from 'react';
import PostSingle from './PostSingle';
import Toogle from './Toogle';
import AddForm from './AddForm';
import V4 from 'uuid/v4';

class PostsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFormOpen: false,
            posts: [],
        }
        this.deletePost = this.deletePost.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }
     
    content = [
        {
            id: V4(),
            title: "Title1",
            content: 'content1',
            author: 'person1',
            rate: '4'
        },
        {
            id: V4(),
            title: "Title2",
            content: 'content2',
            author: 'person2',
            rate: '3'
        },
        {
            id: V4(),
            title: "Title3",
            content: 'content3',
            author: 'person3',
            rate: '6'
        },{
            id: V4(),
            title: "Title4",
            content: 'content4',
            author: 'person4',
            rate: '7'
        }
    ]

    componentWillMount(){
        this.setState({posts: this.content})
    }

// DELETING POSTS

    deletePost = (id) => {
        
        this.setState({ 
            posts: this.state.posts.filter(t => t.id !== id),
        }); 
        console.log(id);
    }

    handleClickDelete = (id) =>{
        this.deletePost(id);
    }
//Ends DELETING POSTS

// ADDING POSTS

    addPost = (id, title, content, author, open, rate) =>{
        this.content.push({id, title, content, author, rate});
        this.setState({ posts: this.content});
    }
    

    handleAddPost = (id, title, author, content, open, rate) =>{
        this.addPost(id, title, author, content, open, rate);
    }
// Ends ADDING POSTS

    showForm = () => {
        this.setState({isFormOpen: !this.state.isFormOpen});
    }


 // EDITING POSTS

    handleEditPost = (id, title, content, isFormOpen) => {
        this.editPost(id, title,  content, isFormOpen);
    }

    editPost = (id, title, content) =>{
        const res = this.state.posts.map( item => {
            if (item.id === id) {
                 return Object.assign({}, item, { 
                    title: title, 
                    content: content, 
                }); 
            } else { 
                return item;
            } 
        })
        this.setState({posts: res}); 
    }

// Ends EDITING POSTS

// Counting Rating

    handleRatingCount = (id, rate) => {
        this.rating (id, rate);
    }

    rating = (id, rate) => {
        const newRate = Number(rate) + 1;
        const changed = this.state.posts.map (it => {
            if(it.id === id){
                return Object.assign({}, it, {
                    rate: newRate,
                });
            } else {
                return it;
            }
        });
        this.setState({ posts: changed});
    }    
// Ends Counting Rating
    
    render(){
        const posts = this.state.posts.map(it => (
            <PostSingle 
                id = {it.id}
                title = {it.title}
                text = {it.content}
                author = {it.author}
                rate = {it.rate}
                handleDelete = {this.handleClickDelete}
                handleEditPost = {this.handleEditPost}
                handleRatingCount = {this.handleRatingCount}
            />
        ));
        return(
            <div class='posts-list container'>
                <Toogle 
                    toogleMe = {({open, toogle}) => (
                        <div>
                            {open && <AddForm handleAddPost = {this.handleAddPost} open = {this.state.isFormOpen} />}
                            <button className ='btn btn-success' onClick = {toogle} >Add Post</button>
                        </div>
                    )}
                />
                {posts}
            </div>
        )
    }
}

export default PostsList;