import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import BiotechIcon from '@mui/icons-material/Biotech';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import CodeIcon from '@mui/icons-material/Code';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import BookIcon from '@mui/icons-material/Book';
import LanIcon from '@mui/icons-material/Lan';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';


export default function NestedList() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  return (
    <Box display="flex">
      <List
        sx={{ width: '25%', bgcolor: '#757ce8' }}
        component="nav"
      >
        <ListItemButton onClick={handleClick1}>
          <ListItemIcon>
            <BiotechIcon/>
          </ListItemIcon>
          <ListItemText primary="Mis Proyectos" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <a href="https://github.com">Github</a>
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <List
        sx={{ width: '25%', bgcolor: '#757ce8' }}
        component="nav"
      >
        <ListItemButton onClick={handleClick2}>
          <ListItemIcon>
            <LaptopChromebookIcon />
          </ListItemIcon>
          <ListItemText primary="mis gustos" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <a href="https://www.euroinnova.co/blog/funciones-de-un-programador">Programar</a>
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <DirectionsBikeIcon/>
              </ListItemIcon>
              <a href="https://definicion.de/ciclismo/">Montar Bicicleta</a>
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <List
        sx={{ width: '25%', bgcolor: '#757ce8' }}
        component="nav"
      >
        <ListItemButton onClick={handleClick3}>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Mis Estudios" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LanIcon />
              </ListItemIcon>
              <a href="https://www.redhat.com/es/topics/management/what-is-network-management#:~:text=La%20gesti%C3%B3n%20de%20la%20red,de%20software%20que%20los%20utilizan./">Redes de Datos</a>
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BuildCircleIcon />
              </ListItemIcon>
              <a href="https://sotein.com.co/mantenimiento-preventivo-y-correctivo-de-computadoras/">Mantenimiento y Reparacion de Computadores</a>
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <DataObjectIcon />
              </ListItemIcon>
              <a href="https://www.freecodecamp.org/espanol/news/que-es-un-desarrollador-full-stack-back-end-front-end-ingeniero-full-stack/#:~:text=Un%20desarrollador%20Full%20Stack%20es,detr%C3%A1s%20de%20escena%20del%20sitio.">Programador</a>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      

      <List
        sx={{ width: '25%', bgcolor: '#757ce8' }}
        component="nav"
      >
        <ListItemButton onClick={handleClick4}>
          <ListItemIcon>
            <ContactPageIcon />
          </ListItemIcon>
          <ListItemText primary="Contactame" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <a href="https://www.linkedin.com/in/esteban05251991/">LinkedIn</a>
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <WhatsAppIcon />
              </ListItemIcon>
              <a href="https://wa.me/573017299398">WhatsApp</a>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}