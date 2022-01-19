import React from 'react';
import ReactDOM from 'react-dom';


class Test {
  constructor(name) {
    this.name = name
    // 绑定作用域
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick(v) {
    console.log('click:',this.name)
  }

  handleClick2 = () => {
    console.log('click2:',this.name)
  }
  render() {
    // const f = this.handleClick
    setTimeout(this.handleClick)
    setTimeout(() => this.handleClick(),1000)
    setTimeout(this.handleClick.bind(this), 2000)
    setTimeout(this.handleClick2, 3000)


    var btn = document.createElement('button')
    var t =document.createTextNode('ClickME2')
    btn.appendChild(t)
    btn.addEventListener('click', this.handleClick)
    document.getElementById('root2').appendChild(btn)
    
  }
}
const t = new Test('china')
t.render()


class App extends React.Component{
  constructor( props ){
    super( props );
  }

  handleClick(event){
    console.log(this); // 'this' 值为 undefined
  }



  render(){
    return (
      <button onClick={this.handleClick}>
        Click Me
      </button>
    );
  }
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);