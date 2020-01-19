import React from 'react';
import BookSearch from './BookSearch';


const TheList = (props) => {
    return (
        <div className="list">
            {
                props.books.map((book) => {
                return <BookSearch key={book.id} info={book} />
            })
        }
        </div>
    );
}

export default TheList;