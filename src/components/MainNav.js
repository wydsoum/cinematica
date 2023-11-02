import * as React from 'react';
import Paper from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();

  React.useEffect(() => {
    if (value === 0) {
      navigate('/')
  } else if (value === 1) {
      navigate('/movies')
  } else if (value === 2) {
      navigate('/tv-series')
  } else if (value === 3) {
      navigate('/search')
  }
  }, [value, navigate]);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          "& .Mui-selected, .Mui-selected > svg": {
            color: "white",
          },
          backgroundColor: "#101110",
        }}
      >
        <BottomNavigationAction sx={{color:'#E5BEEC',fontSize:'20px'}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction sx={{color:'#E5BEEC',fontSize:'20px'}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction sx={{color:'#E5BEEC',fontSize:'20px'}} label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction sx={{color:'#E5BEEC',fontSize:'20px'}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Paper>
  );
}