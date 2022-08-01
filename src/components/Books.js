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
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import ModeEditIcon from "@mui/icons-material/ModeEdit";
// import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
let url = "https://bookstorebackend12.herokuapp.com/books";

function Books() {
  const [book, setBook] = useState([]);
  // useEffect(() => {}, []);
  const getBooks = async () => {
    let response = await axios.get(url);
    var res = response.data.data;
    setBook(res);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handeleDelete = async (id) => {
    await axios.delete(
      `https://bookstorebackend12.herokuapp.com/books/delete/${id}`
    );
    // console.log(response.data);
    getBooks();
    // book(user);
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark" id="navbar">
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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {book.map((val) => {
            return (
              <>
                <Grid item xs={4} key={val._id} className="gridcontainer">
                  <Card id="grid">
                    <CardMedia
                      component="img"
                      image={val.image}
                      sx={{ backgroundColor: "black" }}
                      className="img"
                      height="fit-content"
                    />

                    <CardContent className="maincontainer">
                      {/* <img src={val.image} className="img" /> */}

                      <Typography gutterBottom variant="h5" component="div">
                        <h3>
                          <b>{val.bookname}</b>
                        </h3>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h4>
                          <b> BY:{val.author}</b>
                        </h4>
                      </Typography>
                    </CardContent>
                    <CardActions className="buttons">
                      <Link to={`/editbook/${val._id}`}>
                        <Button size="small" variant="contained">
                          {/* <ModeEditIcon
                            sx={{ fontSize: 50 }}
                            className="button"
                          /> */}
                          <b>EditBook</b>
                        </Button>
                      </Link>

                      <Button
                        size="small"
                        onClick={() => handeleDelete(val._id)}
                        variant="contained"
                      >
                        {/* <DeleteIcon sx={{ fontSize: 50 }} /> */}
                        <b> DeleteBook </b>
                      </Button>
                      <Link to={`/viewbook/${val._id}`}>
                        <Button
                          size="small"
                          variant="contained"
                          className="links"
                        >
                          {/* <VisibilityIcon
                            sx={{ fontSize: 50 }}
                            className="button"
                          /> */}
                          <b> Read Book </b>
                        </Button>
                      </Link>
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
