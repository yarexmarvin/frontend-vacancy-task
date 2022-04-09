import { Box, Button, SvgIcon } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { menu } from '../menu'

const getButtonStyles = (index: number) => {
  if (index) {
    return {
      color: '#FFF',
    }
  } else {
    return {
      color: '#6347F5',
      backgroundColor: '#FFF',
      padding: '16px 24px',
      boxSizing: 'border-box',
      borderRadius: '16px',
      textAlign: 'left',
      marginBottom: '40px',
      ':hover': {
        opacity: 0.5,
        background: '#FFF',
      },
    }
  }
}

const Navigation = () => {
  return (
    <Box className="app" display="flex">
      <div className="menu">
        <div>
          {menu.map((item, index) => (
            <Button
              key={index}
              sx={getButtonStyles(index)}
              startIcon={<SvgIcon>{item.icon}</SvgIcon>}
              variant={index === 0 ? 'contained' : 'text'}
            >
              {item.title}
            </Button>
          ))}
        </div>
        <p>Русский</p>
      </div>
      <Outlet />
    </Box>
  )
}

export default Navigation
