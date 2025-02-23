import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'

const defaultState={
    inputValue:'Write Something',
    list:[]
}
/**
 * state 指的是原始store的状态
 * action：新传递的状态
 * 这里的主要作用：接受store自动传递过来的state并操作回传store
*/
export default (state=defaultState,action)=>
{
    if(action.type===CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.inputValue = action.value
        return newState
    }

    if(action.type===ADD_ITEM)
    {
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type===DELETE_ITEM)
    {
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)      
        return newState
    }

    if(action.type===GET_LIST )
    {
        let newState=JSON.parse(JSON.stringify(state))
        newState.list=action.data.data.list   
        return newState
    }
    return state
}