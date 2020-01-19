import React from 'react';

const BookSearch = (props) => {
    
    const { volumeInfo } = props.info;
    // eslint-disable-next-line
    const {title, authors, publishedDate} = props.info.volumeInfo;
    const thumbnail = volumeInfo.hasOwnProperty('imageLinks') === false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
    const publishYear = volumeInfo.hasOwnProperty('publishedDate') === false ? volumeInfo['publishedDate'] = "0000" : volumeInfo.publishedDate;
    
    return (
        <div className="book-container">
            <img src={thumbnail} alt="" />
            <div className="desc">
                <h3>{title}</h3>
                <p>Author: {authors}</p>
                <p>Published: {publishYear === "0000" ? "Not available" : publishYear.substring(0,4)}</p> 
            </div>
        </div>
    )
}

export default BookSearch;