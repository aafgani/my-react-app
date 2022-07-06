import React, { Component } from "react";
import "../Style/comment.css";
// import { comments } from "../Res/comments.json";

const Comments = [
  {
    name: "John Smith",
    text: "This is an awesome page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    time: "Oct 02, 2019",
    comments: [
      {
        name: "Karen Michaels",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
        image:
          "https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?auto=format&fit=crop&w=200&q=80",
        time: "Oct 10, 2019",
      },
      {
        name: "Tim Parker",
        text: "Tullam elementum vulputate lectus sed pellentesque. Maecenas convallis orci at elit consectetur tempus ac id.",
        image:
          "https://images.unsplash.com/photo-1505247964246-1f0a90443c36?auto=format&fit=crop&w=200&q=80",
        time: "Oct 05, 2019",
      },
    ],
  },
  {
    name: "Sarah James",
    text: "Nice! Nullam elementum vulputate lectus sed pellentesque. Maecenas convallis orci at elit consectetur tempus ac id.",
    image:
      "https://images.unsplash.com/photo-1552607676-17f088307dce?auto=format&fit=crop&w=200&q=80",
    time: "Sept 22, 2019",
  },
];
const Comment = ({ comment, level }) => (
  <div className="comment">
    <div className="comment_container">
      <img className="comment_profile" src={comment.image} alt={comment.name} />
      <div className="comment_content">
        <h2 className="comment_name">{comment.name}</h2>
        <strong className="comment_time">{comment.time}</strong>
        <p>{comment.text}</p>
        {level === 1 && <button className="comment_button">Reply</button>}
      </div>
      {comment.comments &&
        comment.comments.map((comment, key) => (
          <Comment key={`comment_${key}`} comment={comment} />
        ))}
    </div>
  </div>
);
class CommentSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { comments } = this.props;
    if (!comments || comments.length === 0) {
      return null;
    }
    return (
      <section className="comments">
        <h1>Comments</h1>
        {comments.map((comment, key) => (
          <Comment key={`comment_${key}`} comment={comment} level={1} />
        ))}
      </section>
    );
  }
}
class Activity501 extends Component {
  render() {
    return (
      <div className="container">
        <CommentSection comments={Comments} />
      </div>
    );
  }
}

export default Activity501;
