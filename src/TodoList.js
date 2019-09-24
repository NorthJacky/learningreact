
import React, { Component } from 'react';
import store from './store'
import {getTodoList ,changeInputAction,addItemAction,deleteItemAction}from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    //构造函数
    constructor( props)
    {
        //负责绑定数据
        super(props)
        {
            this.state=store.getState();

            this.changeInputValue= this.changeInputValue.bind(this)
            this.storeChange = this.storeChange.bind(this)            
            this.clickBtn = this.clickBtn.bind(this)
            this.deleteItem = this.deleteItem.bind(this)

            //关键代码------------end----------
            store.subscribe(this.storeChange) //订阅Redux的状态
        }
    }
    //渲染html
    render() { 
      
        return (  
           <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
           ></TodoListUI>
        );
    }
  
    componentDidMount(){
        const action=getTodoList()
        store.dispatch(action)
    }
    //方法---接受textbox value的改变值，并将value传送给store`
    changeInputValue(e)
    {
       const action=changeInputAction(e.target.value)        
       store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action=addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action=deleteItemAction(index)
        store.dispatch(action)
    }
}

 
export default TodoList;