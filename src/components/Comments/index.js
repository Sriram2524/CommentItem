import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const commentsDetails = []
// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', initialDetails: commentsDetails}

  onInputNameChange = event => {
    this.setState({name: event.target.value})
  }

  onTextAreaChange = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isTrue: false,
    }
    this.setState(prevState => ({
      initialDetails: [...prevState.initialDetails, newComment],
      name: '',
      comment: '',
    }))
  }

  clickLiked = id => {
    this.setState(prevState => ({
      initialDetails: prevState.initialDetails.map(each => {
        if (id === each.id) {
          return {...each, isTrue: !each.isTrue}
        }
        return each
      }),
    }))
  }

  clickDelete = id => {
    const {initialDetails} = this.state
    const filteredComments = initialDetails.filter(each => each.id !== id)
    this.setState({initialDetails: filteredComments})
  }

  render() {
    const {name, comment, initialDetails} = this.state
    const lenghtOfComments = initialDetails.length
    return (
      <div className="bg-container">
        <div className="comment-card">
          <h1 className="heading">Comments</h1>
          <div className="comment-img-and-input-con">
            <div className="text">
              <p className="para">Say something about 4.O Technologies</p>
              <form
                onSubmit={this.onAddComment}
                className="comment-form-container"
              >
                <input
                  onChange={this.onInputNameChange}
                  value={name}
                  className="text-input"
                  type="text"
                  placeholder="Your Name"
                />
                <textarea
                  value={comment}
                  placeholder="Your Comment"
                  onChange={this.onTextAreaChange}
                  rows="7"
                  cols="20"
                  className="text-area"
                >
                  {comment}
                </textarea>
                <div>
                  <button type="submit" className="buton">
                    Add Comment
                  </button>
                </div>
              </form>
            </div>
            <div className="comment-img-con">
              <img
                className="comment-img"
                alt="comments"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              />
            </div>
          </div>
        </div>
        <p className="num-of-commments">
          <span className="count">{lenghtOfComments}</span> Comments
        </p>
        <ul className="unordered-list">
          {initialDetails.map(eachComment => (
            <CommentItem
              clickDelete={this.clickDelete}
              clickLiked={this.clickLiked}
              eachCommentsDetails={eachComment}
              key={eachComment.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
