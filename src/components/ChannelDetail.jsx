import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh" sx={{background:'linear-gradient(135deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)'}}>
      <Box>
      <div style={{
          height:'300px',
          background: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
          zIndex: 10,
        }} />
        <ChannelCard  channelDetail={ChannelDetail} marginTop='-110px'/>
      </Box>
      <Box display="flex" p='2' sx={{ m:'20px 40px 0px 40px',p:'5px',overflow: 'auto', height: '85vh',border:'2px solid rgba(255,255,255,.1)',borderRadius:'20px',background:'rgba(255,255,255,0.07)',backdropFilter:'blur(10px)',boxShadow:'0 0 10px rgba(8,7,16,0.6)'}}>
        <Box sx={{mr: { sm: '100px'}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail