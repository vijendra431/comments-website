import {Component} from 'react'
import CommentItem from '../CommentItem'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onClickButton = () => {
    const {name, comment, commentsList} = this.state

    const newCommentList = {
      id: uuidv4(),
      name,
      comment,
      isFavorite: true,
    }

    this.setState({
      commentsList: [...commentsList, newCommentList],
      name: '',
      comment: '',
    })
  }

  delelteComment = id => {
    const {commentsList} = this.state
    const delteFilted = commentsList.filter(
      each_comment => each_comment.id !== id,
    )

    this.setState({commentsList: delteFilted})
  }

  updateIsFavorite = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each_comment => {
        if (id === each_comment.id) {
          return {...each_comment, isFavorite: !each_comment.isFavorite}
        }
        return each_comment
      }),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Comments</h1>
        <div className="container2">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
          </div>
          <div className="comments-container">
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              type="search"
              placeholder="Your Name"
              className="input"
              onChange={this.onChangeName}
              value={name}
            />
            <br />
            <textarea
              cols="22"
              rows="6"
              className="textarea"
              placeholder="Your Comment"
              onChange={this.onChangeComment}
              value={comment}
            ></textarea>
            <br />
            <button className="button" onClick={this.onClickButton}>
              Add Comment
            </button>
          </div>
        </div>
        <hr className="line" />
        <div className="bottom-container">
          <h3 className="count-heading">
            <span className="count">{commentsList.length}</span> Comments
          </h3>
        </div>
        <ul className="comments-container">
          {commentsList.map(each_comment => (
            <CommentItem
              key={each_comment}
              comment_details={each_comment}
              delelteComment={this.delelteComment}
              updateIsFavorite={this.updateIsFavorite}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
