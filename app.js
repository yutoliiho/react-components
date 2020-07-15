// EXAMPLE (1):
// var App = () => (
//   <p>Some cliche salutation</p>
// );

// ReactDOM.render(<App />, document.getElementById("app"));

// PRACTICE:
// var GroceryList = () => (
//   <div>
//     <h2>Groceries:</h2>
//     <Cucumbers cucumbers='cucumbers' />
//     <Kale kale='kale' />
//   </div>
// )

// var Cucumbers = (props) => (
//   <li>{props.cucumbers}</li>
// )
// var Kale = (props) => (
//   <li>{props.kale}</li>
// )

// ReactDOM.render(<GroceryList />, document.getElementById("app"));


// EXAMPLE (2):
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['learn react', 'Maia lecture', 'crush recast.ly', 'lunch']} />
//   </div>
// )

// var TodoList = (props) => (
// <div>
//   <li>{props.todos[0]}</li>
//   <li>{props.todos[1]}</li>
//   <li>{props.todos[2]}</li>
//   <li>{props.todos[3]}</li>
// </div>
// )

// ReactDOM.render(<App />, document.getElementById("app"));

// EXAMPLE (3):
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['learn react', 'Maia lecture', 'crush recast.ly', 'lunch']} />
//   </div>
// )

// var TodoList = (props) => {
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//   return (
//     <div>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//       <li>{props.todos[3]}</li>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("app"));



// EXAMPLE (4):  INTERACTIVE WITH STATE:
// React makes this possible with class components. To demonstrate this, we'll refactor each <li> of our TodoList into a TodoListItem class component:

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['learn react', 'Maia lecture', 'crush recast.ly', 'lunch']} />
//   </div>
// )

// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo => <TodoListItem todo={todo} />)}
//   </ul>
// )

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <li>{this.props.todo}</li>
//     );
//   }
// }


// ReactDOM.render(<App />, document.getElementById("app"));


// EXAMPLE (5):  STATE:

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['learn react', 'Maia lecture', 'crush recast.ly', 'lunch']} />
  </div>
)

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo => <TodoListItem todo={todo} />)}
  </ul>
)

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'bold' : 'none'
    }
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("app"));
