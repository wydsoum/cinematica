import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  primary: {
    main: '#E5BEEC', // Define the primary color for Pagination in dark mode
  },
  background: {
    paper: '#E5BEEC', // Define the background color for Pagination in dark mode
  },
},
});

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  const handlePageChange = (page) => {
      setPage(page);
      window.scroll(0,0);
    };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
       <ThemeProvider theme={darkTheme}>
        <Pagination 
          count={numOfPages} 
          onChange={(e) => handlePageChange(e.target.textContent)} 
          hideNextButton
          hidePrevButton
          color="primary"
        />
       </ThemeProvider>
    </div>
  );
}

