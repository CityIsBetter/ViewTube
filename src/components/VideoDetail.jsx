import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items));
  }, [id]);

  if(!videoDetail?.snippet) return 'Loading...'
  const { snippet: { title, channelId, channelTitle}, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box Height='92vh'sx={{background:'linear-gradient(135deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)'}}> 
      <Stack direction={{xs: 'column', md: 'row'}} >
        <Box flex={1}>
          <Box sx={{ width: '80%', position: 'fixed',border:'2px solid rgba(255,255,255,0.1)',borderRadius:'20px',background:'rgba(255,255,255,0.07)',backdropFilter:'blur(10px)',boxShadow:'0 0 10px rgba(8,7,16,0.6)',m:'10px'}}>
            <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} 
            className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{
              color: '#fff'}} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{sm: 'subtitle1', md: 'h6'}} color='#fff'>
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: '12px', color: 'white',ml:'5px'}} />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>
                  <Typography variant="body1" sx={{ opacity: 1}}>
                    {parseInt(viewCount).toLocaleString()} Views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 1}}>
                    {parseInt(likeCount).toLocaleString()} Likes
                  </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1, xs: 5}} justifyContent='center' alignContent='center' sx={{height:'auto',border:'2px solid rgba(255,255,255,0.1)',borderRadius:'20px',background:'rgba(255,255,255,0.07)',backdropFilter:'blur(10px)',boxShadow:'0 0 10px rgba(8,7,16,0.6)',m:'10px'}}>
          <Videos videos={videos} direction='column'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail