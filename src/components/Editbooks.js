import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FormLabel,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";

function Editbooks() {
  const id = useParams().id;
  const [book, setBook] = useState({});
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const getById = async () => {
      let res = await axios.get(
        `http://localhost:4000/books/getsingleBook/${id}`
      );
      var response = res.data.getData;
      console.log(response);
      setBook(response);
    };
    getById();
  }, [id]);

  const updateData = async (e) => {
    e.preventDefault();
    var response = await axios.put(`http://localhost:4000/books/update/${id}`, {
      bookname: String(book.bookname),
      author: String(book.author),
      description: String(book.description),
      image: String(book.image),
      price: Number(book.price),
      available: Boolean(checked),
    });
    var res = response.data.getData;
    setBook(res);
    navigate("/");
  };
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>bookname</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="bookname"
            value={book.bookname}
            onChange={onChange}
          />
          <FormLabel>author</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
            value={book.author}
            onChange={onChange}
          />
          <FormLabel>description</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
            value={book.description}
            onChange={onChange}
          />
          <FormLabel>image</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
            value={book.image}
            onChange={onChange}
          />
          <FormLabel>price</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
            value={book.price}
            onChange={onChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Available"
          />
          <Button variant="contained" type="submit" onClick={updateData}>
            Update Book
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Editbooks;
