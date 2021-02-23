import React from 'react';
import { Provider} from './store';
import TodoList from './todos/TodoList';
require('./style.css');



const App = () => (
    <Provider>
        <TodoList />
    </Provider>
);


export default App;