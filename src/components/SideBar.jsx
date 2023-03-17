import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
      direction="row"
      sx={{
        overflow:'auto',
        height: {sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'},
        padding: '5px'
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && '#70f2c5',
            color: '#9874F7',
          }}
          key={category.name}
        >
          <span style={{ color: category.name === selectedCategory ? 'white' : '#6555E7', 
          marginRight: '15px'}}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )


export default SideBar