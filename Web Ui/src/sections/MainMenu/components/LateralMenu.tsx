import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ReactElement, Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

interface NavItem {
  title: string;
  path: string;
  icon: ReactElement;
}
interface NavLateralMenuProps {
  navArrayLinks: NavItem[];
  NavLink: React.ComponentType<any>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NavLateralMenu({
  navArrayLinks,
  NavLink,
  setOpen,
}: Readonly<NavLateralMenuProps>) {
  const location = useLocation();
  
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          <Typography sx={{ marginLeft: "14px", marginBottom: "10px", fontWeight: "bold", color: "#052845" }}>TDDLab</Typography>

          {navArrayLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem disablePadding key={item.title}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  sx={{
                    backgroundColor: isActive ? "#e3f2fd" : "transparent",
                    borderLeft: isActive ? "4px solid #052845" : "4px solid transparent",
                    "&:hover": {
                      backgroundColor: isActive ? "#e3f2fd" : "#f5f5f5",
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: isActive ? "#052845" : "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.title}
                    sx={{ 
                      color: isActive ? "#052845" : "inherit",
                      fontWeight: isActive ? "bold" : "normal"
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/login"
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText>Iniciar sesión</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
