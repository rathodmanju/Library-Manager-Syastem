import { useState } from "react";
import { useNavigate } from "react-router-dom";



const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title, setTitle] = useState("")
    let [categories, setcategories] = useState("")
    let [authors, setAuthors] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [longDescription, setLongDescription] = useState("")
    let [thumbnailUrl, setThumbnailUrl] = useState("")

    let navigate = useNavigate

    let handleSubmit = (e) => {
        e.preventDefault();

        //data to be posted
        let bookData = { title, categories, authors, pageCount, shortDescription, longDescription, thumbnailUrl }

        //posting to server
        fetch('http://localhost:1234/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })
        alert(`Book Added Successfully.! in Book List`)
        navigate('/adminHomePage/bookList')
    }

    return (
        <div className="addbook">
            <h1>Add A Book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e) => setcategories(e.target.value)} type="text" required placeholder="categories of the book" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e) => setAuthors(e.target.value)} type="text" required placeholder="authors of the book" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e) => setPageCount(e.target.value)} type="number" required placeholder="pageCount of the book" />
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} className="" id="" cols="30" rows="10" required placeholder="shortDescription of the book"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e) => setLongDescription(e.target.value)} className="" id="" cols="30" rows="10" required placeholder="longDescription of the book"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} type="text" required placeholder="thumbnailUrl of book" />
                    </div>
                    <button className="btn btn-primary">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;