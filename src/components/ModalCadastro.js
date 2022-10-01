import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
    Flex,
} from '@chakra-ui/react'
import '../styles/styles.css';
import {cores} from '../styles/colors';
import { useMedia } from 'react-use'


function ModalCadastro() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isMobile = useMedia('(max-width: 40em)')
    const initialRef = React.useRef(null)
    return (
        <>
        {isMobile ? 
        <Flex justify='center'>
            <Button w='50%' mt='5%'onClick={onOpen} ml='1%' colorScheme='brand'>Cadastrar Entrega</Button>
        </Flex>
        :
        <Button  onClick={onOpen} ml='1%' colorScheme='brand'>Cadastrar Entrega</Button>
}
            

            <Modal

                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent  bg={cores.backgroundSecundario}>
                    <ModalHeader color='white' as='b'>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel color='white' as='b'>First name</FormLabel>
                            <Input color='#cccccc' ref={initialRef} placeholder='First name' _placeholder={{ color: '#cccccc' }}/>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel color='white' as='b'>Last name</FormLabel>
                            <Input color='#cccccc' placeholder='Last name'  _placeholder={{ color: '#cccccc' }}/>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='close' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme='brand' >Cadastrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalCadastro;