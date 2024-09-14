// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachCommentsDetails, clickLiked, clickDelete} = props
  const {id, name, comment, isTrue} = eachCommentsDetails
  const firstLetter = name[0]
  const likeButton = isTrue ? 'colorButton' : 'normalButton'
  const starImgUrl = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLiked = () => {
    clickLiked(id)
  }
  const onClickDelete = () => {
    clickDelete(id)
  }
  return (
    <li className="list">
      <div className="name-con">
        <p className="first-letter">{firstLetter}</p>
        <p className="name">{name}</p>
        <p className="time">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="like-and-delete-con">
        <button onClick={onClickLiked} className="button" type="button">
          <img className="like-image" alt="like" src={starImgUrl} />
          <p className={likeButton}>Like</p>
        </button>
        <button
          onClick={onClickDelete}
          data-testid="delete"
          className="delete-button"
          type="button"
        >
          <img
            className="delete-img"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
