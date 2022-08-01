import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  FormLabel,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
let url = "https://bookstorebackend12.herokuapp.com/books/create";

function Addbooks() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });
  const [updatedbook, setUpadatedbook] = useState([]);
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    e.preventDefault();
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    var response = await axios.post(url, {
      bookname: String(book.bookname),
      author: String(book.author),
      description: String(book.description),
      image: String(book.image),
      price: Number(book.price),
      available: Boolean(checked),
    });
    var res = response.data.data;
    setUpadatedbook(res);
    navigate("/");

    setBook({
      bookname: "",
      author: "",
      description: "",
      image: "",
      price: "",
      available: "",
    });
  };
  console.log(updatedbook);
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
          <Button variant="contained" type="submit" onClick={handleCreate}>
            Add Book
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Addbooks;
