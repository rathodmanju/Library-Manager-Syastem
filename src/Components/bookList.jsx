import { useState, useEffect } from "react";
import '../Styles/BookList.css';
import { useNavigate } from "react-router-dom";

const BookList = () => {
    let [books, setbooks] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let responce = await fetch('http://localhost:1234/books')
            let data = await responce.json()
            setbooks(data)
        }
        fetchData()
    }, [books])

    let handleDelete = (id, title) => {
        fetch(`http://localhost:1234/books/${id}`, {
            method: "DELETE"
        });
        alert(`${title}Will Be Deleted Permenently`)
    }

    // let handleDelete = (id, title) => {
    //     setbooks(books.filter(x => x.id != id))
    //     alert(`${title}has been deleted`)
    // }

    let navigate = useNavigate()
    let handleRead = (id) => {
        navigate(`/admin/bookList/${id}`)
    }

    return (
        <div className="books">
            <h1>Book List : {books.length}</h1>
            <div className="books_section">
                {books.map(data => (
                    <div className="book_card">
                        <div className="image">
                            <img src="{data.thumbnailUrl}" alt="" />
                            <div className="heading">
                                <h1>Title : {data.title}</h1>
                                <h6><b>Authors</b>  : {data.authors.toString()} </h6>
                                <h6>ThumbnailUrl : {data.thumbnailUrl} </h6>
                                <h6>PageCount : {data.pageCount} </h6>
                                <button onClick={() => handleRead(data.id)}>Read more</button>
                                <button onClick={() => handleDelete(data.id, data.title)} className="delete" >Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <BookList />
        </div>
    );
}

export default BookList;