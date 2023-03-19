import { Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const Navbar = () =>  (
    <Stack direction="row" alignItems="center" p={2} 
    sx={{ position: 'sticky', 
    border:'2px solid rgba(0,0,0,0.5)',
    backdropFilter:'blur(10px)',
    boxShadow:'0 0 10px rgba(8,7,16,0.6)',
    background:'linear-gradient(270deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
    justifyContent: 'space-between'}}>

      <Typography variant="h2" fontWeight='bold' ml={0} sx={{backgroundImage: 'linear-gradient(45deg, rgba(200,200,200,1) 0%, rgba(255,255,255,1) 100%)',backgroundClip:'text',WebkitTextFillColor:'transparent', fontSize: {sm:'42px', xs:'26px'}, userSelect: 'none', textDecoration:'underline'}}>
          <a href="https://viewtubee.netlify.app">ViewTubee</a>
      </Typography>
      <SearchBar/>

    </Stack>
  )


export default Navbar


