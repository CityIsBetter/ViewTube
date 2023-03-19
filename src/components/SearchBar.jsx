import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm,setSearchTerm] = useState('');

  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');

    }
  };
  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '5px solid rgba(255,255,255,0.1)',
        pl: 2,
        boxShadow: '0 0 10px 0 rgba(157,96,212,.5)',
        mr: { sm: 5 }
      }}
    >
      <input 
        className='search-bar'
        placeholder='search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{width:{xs:'100px',sm:'100px',md:'150px'}}}
      />
      <IconButton type='submit' sx={{p: {xs:'5px',sm:'10px'}, color: '#6555E7'}}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar