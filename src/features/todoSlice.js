import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [
    
    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveToDo: (state, action) => {
            state.todoList.push(action.payload)
        },
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

        removeTodo: (state, action) => {
            const filterTodList = state.todoList.filter(todoList => todoList.id !== action.payload)
              
                return {
                    ...state,
                    todoList: filterTodList
                }
            
            },
        
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

export const { saveToDo, toggleCheck, removeTodo, filterDone, filterAll, filterUn } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer