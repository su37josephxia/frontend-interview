import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    // debugger
    console.log("click", this); // 'this' 值为 undefined
  }

  render() {
    return (
      <button onClick={() => this.handleClick}>
        Click Me
      </button>
    );
  }

  renderDom() {
    var btn = document.createElement("button");
    var t = document.createTextNode("Click Me Dom");
    btn.appendChild(t);
    function createCallback(fn) {
      const context = undefined
      return () => fn.apply(context);
    }
    btn.addEventListener("click", createCallback(this.handleClick));
    // btn.addEventListener("click", createCallback(() => this.handleClick())); // 写法一
    // btn.addEventListener("click", this.handleClick.bind(this));// 写法二
    document.getElementById("root2").appendChild(btn);
    return;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// 模拟Render
const app = new App();
app.renderDom();
