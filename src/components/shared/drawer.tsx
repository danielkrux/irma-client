import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/core';

export interface MyDrawerProps {
  title?: string;
  placement: "bottom" | "left" | "top" | "right" | undefined;
  isOpen?: boolean;
  noOverlay?: boolean;
  handleClose?: () => void;
}

const MyDrawer: React.SFC<MyDrawerProps> = ({ title, isOpen, handleClose, children, placement, noOverlay}) => {
  return (
    <Drawer onClose={handleClose} closeOnEsc={true} scrollBehavior="inside" placement={placement} isOpen={isOpen ?? true} >
      {noOverlay && <DrawerOverlay />}
      <DrawerContent>
        <DrawerCloseButton />
        {title && <DrawerHeader>{title}</DrawerHeader>}
        <DrawerBody>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MyDrawer
