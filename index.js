const Button = props => {
  //  Write your code here.
    const {text, class}=props;
    return <button className={class} >{text}</button>
}

const element = (
    <div className="background-image">
        <h1 className="heading">Social Buttons</h1>
        <div className="button-container">
            <Button text="Like" class="type-1"/>
            <Button text="Comment" class="type-2"/>
            <Button text="Share" class="type-3"/>
        </div>
  </div>
  //  Write your code here.
)

ReactDOM.render(element, document.getElementById('root'))
