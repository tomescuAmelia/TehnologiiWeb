import React, {Component} from 'react';
import SearchZone from './SearchZone';
import request from 'superagent';
import TheList from './TheList';


class Books extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }
//Pentru preluarea datelor am folosit libraria superagent. Preluarea putea fi realizata si prin utilizarea metodei fetch.
    bookSearch = (e) => {
        e.preventDefault();
        request.get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.state.searchField })
        .then( (data) => {
            console.log(data);
            const clearInfo = this.clearInfo(data);
            this.setState({books: clearInfo})
        })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value})
    }

    handleSort = (e) => {
        this.setState({sort: e.target.value })
    }

    clearInfo = (data) => {
        const clearedData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty['publishedDate'] === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }
            else if(book.volumeInfo.hasOwnProperty['imageLinks'] === false) {
                book.volumeInfo['imageLinks'] = {thumbnail: 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6'}
            }
            return book;
        })

        return clearedData;
    }

    render() {
        // eslint-disable-next-line
        const sortedBooks = this.state.books.sort((a,b) => {
            if(this.state.sort === 'Newest') {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            }
            else if (this.state.sort === 'Oldest') {
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
            }
        });
        return (
            <div>
              <SearchZone bookSearch={this.bookSearch} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
              <TheList books= {sortedBooks}/>
            </div>
          );
        }
    }

export default Books;
