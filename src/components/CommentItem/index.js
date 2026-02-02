import './index.css'

const CommentItem = props => {
  const {comment_details, delelteComment, updateIsFavorite} = props
  const {id, name, comment, isFavorite} = comment_details

  const addImage = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const onClickDelete = () => {
    delelteComment(id)
  }

  const onClickIsFavorite = () => {
    updateIsFavorite(id)
  }

  const addLikeclass = isFavorite ? 'like-button2' : 'like-button1'

  return (
    <li>
      <div className="main-comment-container">
        <div className="main-comment-container2">
          <div className="main-comment-container3">
            <button className="firstletter-button">
              <h1 className="first-letter">{name[0]}</h1>
            </button>
            <div className="virat">
              <h1 className="name">{name}</h1>
              <p className="comment">{comment}</p>
            </div>
          </div>
          <div className="both">
            <button
              className={`${addLikeclass} button-rows`}
              onClick={onClickIsFavorite}
            >
              <img className="like-image" src={addImage} /> Like
            </button>
            <br />
            <button className="delete-button" onClick={onClickDelete}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
                className="delete-image"
              />
            </button>
          </div>
        </div>
        <hr className="harizonal-line" />
      </div>
    </li>
  )
}

export default CommentItem
