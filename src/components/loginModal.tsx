import React, { useContext } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Box } from '@chakra-ui/core'
import { LoginForm } from './loginForm'
import { observer } from "mobx-react"
import { AppStoreContext } from '../stores/AppStore'

export interface LoginModalProps {
  styles: Object
}

export const LoginModal: React.SFC<LoginModalProps> = observer(({ styles }) => {
  let { loginModal, toggleLoginModal } = useContext(AppStoreContext)
  return (
    <Box style={styles}>
      <Modal isOpen={loginModal} onClose={toggleLoginModal} closeOnOverlayClick={false} isCentered={true}>
        <ModalOverlay />
        <ModalContent p={3} rounded="md">
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
})