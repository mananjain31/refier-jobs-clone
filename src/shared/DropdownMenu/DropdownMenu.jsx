import React from 'react';
import {Menu, MenuItem} from '@material-ui/core'


const DropdownMenu = ({items, anchorEl, onClose}) => {
  return  <Menu
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={onClose}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
    >
        {
            items.map(item=>(
                <MenuItem key={item} onClick={onClose}>{item}</MenuItem>
            ))
        }
    </Menu>
};

export default DropdownMenu;
