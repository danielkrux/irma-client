import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/core';

export interface BottomDrawerProps {
  title: string;
  isOpen: boolean;
  handleClose: () => void;
}

const BottomDrawer: React.SFC<BottomDrawerProps> = ({title, isOpen, handleClose, children}) => {

  return (
    <Drawer onClose={handleClose} closeOnEsc={true} scrollBehavior="inside" placement="bottom" isOpen={isOpen} >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>{title}</DrawerHeader>
        <DrawerBody>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default BottomDrawer
