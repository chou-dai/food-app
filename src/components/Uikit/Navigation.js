import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = () => {
  return (
    <div>
      <AppBar position="fixed" className="bg-transparent">
        <div className="text-right bg-blue-900 opacity-95">
          <IconButton edge="start" color="inherit" aria-label="menu" className="p-3">
            <MenuIcon />
          </IconButton>
        </div>
      </AppBar>
    </div>
  )
}

export default Navigation
