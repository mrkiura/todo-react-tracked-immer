import React, { useState } from 'react';

import { useAddTodo } from '../hooks/useAddTodo';
import { useFlasher } from '../utils';


const NewTodo = () => {
    const dispatch = useAddTodo();
    const [text, setText] = useState('');
    const addTodo = () => {
        dispatch({ type: 'ADD_TODO', title: text});
        setText('');
    }
    return (
        <li ref={useFlasher()}>
            <input
                value={text}
                placeholder="Enter title..."
                onChange={ e => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    addTodo(text);
                    setText('')
                }}
            >
                Add</button>
        </li>
    );
};

export default React.memo(NewTodo);

