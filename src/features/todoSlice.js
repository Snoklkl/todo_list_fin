import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [
    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //Pushes a new "todo" to todoList creating a new object with its own values for its state:
        saveToDo: (state, action) => {
            state.todoList.push(action.payload)
        },
        //Checks to ensure that the id of the "todo" and the one that the payload has sent are the same. If they are, the state of done is toggled from true to false or false to true:
        toggleCheck: (state, action) => {
            void(
            state.todoList.map(item => { 
                if (action.payload === item.id) 
                    {
                    if (item.done === true) {
                        item.done = false;
                    }
                    else { 
                        item.done = true;
                    } 
                }
            return(item.done);
            }))
        },
        //Matches the id of a "todo" to the one being interacted with through the payload, then filters out that "todo" and updates the todoList without it:
        removeTodo: (state, action) => {
            const filterTodList = state.todoList.filter(todoList => todoList.id !== action.payload)
                return {
                    ...state,
                    todoList: filterTodList
                }
            },
            //Each filter changes the state of a "todos" "visible" state based on the state of their "done", whether that visible is set to true or false is dependent on which filter it is:
            filterDone: (state, action) => {
                void(
                state.todoList.map(item => { 
                    if (true) 
                        {
                        if (item.done === true) {  
                            item.visible = true;
                        }
                        else if (item.done === false) {
                            item.visible = false
                        }
                    }
                return(item.done);
                }))
            },
            filterAll: (state, action) => {
                void(
                state.todoList.map(item => { 
                    if (true) 
                        {
                        if (true) {
                            item.visible = true;
                        }
                    }
                return(item.done);
                }))
            },
            filterUn: (state, action) => {
                void(
                state.todoList.map(item => { 
                   
                    if (true) 
                          
                        {
                        if (item.done === false) {
                            
                            item.visible = true;
                        }
                        else if (item.done === true) {
                            item.visible = false
                        }

                    }
                return(item.done);
                }))
            },
}
});
//Exports reducers to handle the logic of changing the state of "todos":
export const { saveToDo, toggleCheck, removeTodo, filterDone, filterAll, filterUn } = todoSlice.actions
export const selectTodoList = state => state.todos.todoList
export default todoSlice.reducer