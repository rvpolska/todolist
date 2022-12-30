import { Component } from "react";
import check from './check.png'


export class ToDoList extends Component{


    state = { 
        userInput:'',
        toDoList: []

}


onChangeEvent(e){
    this.setState({userInput: e})
  
}

addItem(input){
    if(input ===''){
        alert ('Please Enter Your TO DO LIST')
    }
    else{
    let listToDo = this.state.toDoList
    listToDo.push(input)
    this.setState({toDoList: listToDo , userInput:''})
}
}


deleteItem(){
    let listToDo = this.state.toDoList;
    listToDo = [];
    this.setState({toDoList: listToDo});
}

crosseWord(e){
    const li = e.target;
    li.classList.toggle('crossed')
}

onFormSubmit(e){
    e.preventDefault();
}

render(){
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div className="container">
            <input type='text' 
            placeholder="What you wanna do today 🙈" 
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput} />
        </div>
        <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className='doit' >DO IT !</button>
        </div>
        <ul>{this.state.toDoList.map((item, index) =>(
            <li onClick={this.crosseWord} key={index}>
                <img src={check} width='20px' alt='check'/>{ item }</li>
        ))}
        </ul>
        <div className="container">
        <button onClick={() => this.deleteItem()} className='delete'>Delete</button>
        </div>
        </form>
        </div>
    )
}






}