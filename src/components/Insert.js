import { useState, useCallback } from 'react';
import { ImPlus } from "react-icons/im";

const Insert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            onInsert(value);
            setValue('');
        },
    );

    return (
        <form className="Insert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <ImPlus />
            </button>
        </form>
    );
};

export default Insert;