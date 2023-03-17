import { Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const Navbar = () =>  (
    <Stack direction="row" alignItems="center" p={2} 
    sx={{ position: 'sticky', background: '#000', 
    top: 0, justifyContent: 'space-between'}}>
        <Typography variant="h2" fontWeight='bold' ml={0} sx={{color:'#6555E7', fontSize: {sm:'32px', xs:'26px'}, userSelect: 'none', textDecoration:'underline'}}>
          ViewTubee
        </Typography>
      <SearchBar/>

    </Stack>
  )


export default Navbar