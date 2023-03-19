import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"},background:'linear-gradient(135deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',position:'fixed'}}>

      <Box sx={{ height: { sx: 'auto', md: '88vh' }, border: '2px solid rgba(255,255,255,0.1)', borderRadius:'20px',m:'10px',px: {sx: 0, md: 2},backdropFilter:'blur(10px)',boxShadow:'0 0 10px rgba(8,7,16,0.6)'}}>
        <SideBar
          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
        />
        <Typography className='copyright' varient="body2" sx={{ color: 'rgba(255,255,255,0.6)', m:'5px'}}>
        copyright &copy; 2023 MaheshPaul
        </Typography>
      </Box>

      <Box p={2} sx={{ m:'10px',overflow: 'auto', height: '85vh', flex: 2,border:'2px solid rgba(255,255,255,0.1)',borderRadius:'20px',background:'rgba(255,255,255,0.07)',backdropFilter:'blur(10px)',boxShadow:'0 0 10px rgba(8,7,16,0.6)'}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{ color: '#6555E7',textDecoration:'underline'}}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed