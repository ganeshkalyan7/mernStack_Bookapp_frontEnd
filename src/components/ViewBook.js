import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./viewBook.css";

const ViewBook = () => {
  const id = useParams().id;
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getById = async () => {
      let res = await axios.get(
        `https://bookstorebackend12.herokuapp.com/books/getsingleBook/${id}`
      );
      var response = res.data.getData;

      setBook(response);
    };
    getById();
  }, [id]);

  return (
    <>
      <div className="card text-center">
        <h1 className="card-header">
          <b>{book.bookname}</b>
        </h1>
        <div className="card-body">
          <img src={book.image} alt="book" className="card__img" />
          <h1>
            {" "}
            BY: <b>{book.author} </b>{" "}
          </h1>
          <h5 className="card-text">{book.description}</h5>

          <Button variant="contained">
            <Link
              to="/"
              style={({ textDecoration: "none" }, { color: "white" })}
            >
              Go Back
            </Link>
          </Button>
        </div>
        <div className="card-footer text-muted">
          <h2>
            <b>PRICE</b>:{book.price}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ViewBook;
