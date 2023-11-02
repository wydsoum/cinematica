import { Chip, ThemeProvider, createTheme } from '@mui/material';
import axios from "axios";
import { useEffect } from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set to 'dark' for dark mode, 'light' for light mode
    primary: {
      main: '#ffffff', // Define the primary color for Pagination in dark mode
    },
    background: {
      paper: '#121212', // Define the background color for Pagination in dark mode
    },
  },
});


export default function Genres({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) {

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

const fetchGenres = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
    };

    console.log(genres);

    useEffect(() => {
      fetchGenres();

      return () => {
        setGenres([]);
      }
      // eslint-disable-next-line
    }, []);

    return (
      <div style={{ padding: "6px 0" }}>
          {selectedGenres.map((genre) => (
          <Chip style={{ margin: 2 ,backgroundColor:'#E5BEEC',color:'#101110'}} label={genre.name} key={genre.id} color="primary" clickable size="small" onDelete={() => handleRemove(genre)} />
        ))}
          {genres && genres?.map((genre) => (
          <ThemeProvider theme={darkTheme} >
              <Chip variant="outlined" style={{ margin: 2,color:'#E5BEEC' }} label={genre.name} key={genre.id} clickable size="small"  onClick={() => handleAdd(genre)}/>
          </ThemeProvider>
          ))}
      </div>
    )
  }
