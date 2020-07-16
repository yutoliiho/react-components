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
//     this.state = {
//       done: false
//     };
//   }
//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }
//   render() {
//     var style = {
//       textDecoration: this.state.done ? 'bold' : 'none'
//     }
//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );
//   }
// }


// ReactDOM.render(<App />, document.getElementById("app"));




// EXAMPLE 6: Making applications interactive with state
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
//     this.state = {
//       done: false
//     };
//   }
//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }
//   render() {
//     var style = {
//       textDecoration: this.state.done ? 'bold' : 'none'
//     }
//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));

// REFACTOR GROCERY LIST WITH CLASS COMPONENT:
// super class:
// var App = () => (
//   <div>
//     <h2>My GroceryList</h2>
//     <GroceryList items={['stake', 'orange', 'veggies']} />
//   </div>
// )

// // Defining:
// var GroceryList = (props) => {
//   console.log(props)
//   return (
//     < ul >
//       {props.items.map(item => <GroceryListItem item={item} />)}
//     </ul >
//   )
// }
// // functional:
// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <li>{this.props.item}</li>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'))

// class Counter extends React.Component {
//   // bind method with constructor:
//   constructor(props) {
//     super(props);
//     this.handleAddOne = this.handleAddOne.bind(this);
//     // setup state for things:
//     this.state = {
//       count: 0
//     }
//   }
//   // add a method:
//   handleAddOne() {
//     console.log('handleAddOne')
//   }
//   // render the view:
//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button>-1</button>
//         <button>reset</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById('app'))


// // EXAMPLE 7: ADD EVENT TO COMPONENTS:
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
//     this.state = {
//       done: false
//     };
//   }
//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }
//   render() {
//     var style = {
//       fontWeight: this.state.done ? 'bold' : 'none'
//     }
//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));



// EXAMPLEE 7: REFACTOR ABOEVE:

// super class:
var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList items={['stake', 'orange', 'veggies']} />
  </div>
)

// Defining:
var GroceryList = (props) => {
  console.log(props)
  return (
    < ul >
      {props.items.map(item => <GroceryListItem item={item} />)}
    </ul >
  )
}
// functional:
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }
  onMouseClick(el) {
    console.log(el)
  }
  render() {
    return (
      <li onClick={this.onMouseClick.bind(this)}>{this.props.item}</li>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))