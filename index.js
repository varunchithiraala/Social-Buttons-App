const Button = props => {
  //  Write your code here.
  const {className, buttonText} = props;
  return (<button className={`button ${className}`}>{buttonText}</button>)
}

const element = (
  //  Write your code here.
  <div className="social-buttons-container">
      <div class="content-container">
          <h1 className="social-buttons-heading">Social Buttons</h1>
          <div className="social-buttons-card">
              <Button className="like-button" buttonText="Like" />
              <Button className="comment-button" buttonText="Comment" />
              <Button className="share-button" buttonText="Share" />
          </div>
      </div>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
