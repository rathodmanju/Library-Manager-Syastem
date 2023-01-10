import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ReadBook = () => {
    let [book, setBook] = useState([])

    //to get route parameter
    let params = useParams()
    useEffect(() => {
        let fetchData = async () => {
            let responce = await fetch(`http://localhost:1234/books/${params.id}`)
            let data = await responce.json()
            setBook(data)
        }
        fetchData()
    })

    return (
        <div className="readBook">
            <h1>Read book </h1>
            <h2>{book.title}</h2>
            <div className="read">
                <p>{book.shortDescription}</p>
                <p>{book.longDescription}</p>
            </div>
        </div>
    );
}

export default ReadBook;