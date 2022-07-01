import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  CardMedia,
  CardActions,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
let url = "http://localhost:4000/books";

function Books() {
  const [book, setBook] = useState([]);
  // useEffect(() => {}, []);
  const getBooks = async () => {
    let response = await axios.get(url);
    var res = response.data.data;
    setBook(res);
  };
  // console.log(book);
  // console.log(id);

  useEffect(() => {
    getBooks();
  }, []);

  const handeleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/books/delete/${id}`);
    // console.log(response.data);
    getBooks();
    // book(user);
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <h1 className="container-fluid">
              <b className="text"> BOOKS STORE </b>
            </h1>
          </div>

          <div className="d-flex justify-content-end">
            <Link to="/addbook">
              <button type="button" className="btn btn-warning">
                <h3>ADD BOOKS </h3>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <br /> <br /> <br />
      <div>
        <Grid container spacing={4}>
          {book.map((val) => {
            return (
              <>
                <Grid item xs={4} key={val._id}>
                  <Card sx={{ maxWidth: 345, backgroundColor: "" }} id="grid">
                    <CardMedia
                      component="img"
                      image={val.image}
                      sx={{ backgroundColor: "black" }}
                      className="img"
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h2>
                          <b>{val.bookname}</b>
                        </h2>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h4>
                          <b> BY:{val.author}</b>
                        </h4>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {val.description}
                      </Typography>
                      <Typography variant="body2">
                        <h3>
                          <AttachMoneyIcon sx={{ fontSize: 35 }} />
                          {val.price}
                        </h3>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/editbook/${val._id}`}>
                        <Button size="small">
                          <ModeEditIcon
                            sx={{ fontSize: 50 }}
                            className="button"
                          />
                        </Button>
                      </Link>

                      <Button
                        size="small"
                        onClick={() => handeleDelete(val._id)}
                      >
                        <DeleteIcon sx={{ fontSize: 50 }} />
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Books;
