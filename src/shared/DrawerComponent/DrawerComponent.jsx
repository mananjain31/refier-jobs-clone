import { Drawer, IconButton, List, ListItem } from '@material-ui/core';
import React from 'react';
import Button from '../Button/Button'

const Close = React.lazy(()=>import('@material-ui/icons/Close'));
const CloseIcon = ()=>(
    <React.Suspense fallback={<>...</>}>  
    <Close/>
    </React.Suspense>
)

const DrawerComponent = (props) => {
  return <Drawer
        anchor={'right'}
        open={props.open}
        onClose={props.onClose}
    >
        <List>
            <ListItem>
                <IconButton onClick={props.onClose} style={{marginLeft:'auto'}}>
                    <CloseIcon />
                </IconButton>
            </ListItem>
            {
                props.items?.map(item=><ListItem key={item} onClick={props.onClose}>
                    <Button>
                        {item}
                    </Button>
                </ListItem>)
            }
        </List>
    </Drawer>
}

export default DrawerComponent;
