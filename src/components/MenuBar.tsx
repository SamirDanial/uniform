import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const MenuBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          My Product Page
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
