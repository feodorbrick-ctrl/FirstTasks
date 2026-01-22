import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.sort}
                onChange={e => setFilter({...filter,sort: e.target.value})}
                placeholder='Search... '
            />
            <MySelect
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                defaultValue='Sort'
                option={[
                    {value: 'title', name: 'By title'},
                    {value: 'body', name: 'By Body'},
                ]}
            />
        </div>
    );
};

export default PostFilter;