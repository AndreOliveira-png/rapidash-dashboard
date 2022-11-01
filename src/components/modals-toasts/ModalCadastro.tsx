import React, { useState, useRef } from 'react';
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
    Text,
} from '@chakra-ui/react'
import '../../styles/styles.css';
import { cores } from '../../styles/colors';
import { useMedia } from 'react-use'
import { Delivery, Product } from '../../types/types'
import TableProducts from '../tables/component/TableProducts';
import { CustomToast } from './Toast';
import { pesquisaEndereco } from '../../apis/shearchApi';
import { ApiRequester } from '../../apis/api-requester';


function ModalCadastro() {
    const inputNameRef = useRef<HTMLInputElement | null>();
    const inputQtdRef = useRef<HTMLInputElement | null>();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [fullName, setFullName] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [district, setDistrict] = useState<string>('');
    const [houseNumber, setHouseNumber] = useState<string>('');
    const [cep, setCep] = useState<string>('');


    const [message,] = useState<string>();
    const [inputValues, setInputValues] = useState<Product[]>([])
    const [isNotValid, setIsNotValid] = useState<boolean[]>([])
    const isMobile = useMedia('(max-width: 40em)')
    const initialRef = React.useRef(null)
    const { errorToast, successToast } = CustomToast();
    const { saveDelivery } = ApiRequester();

    const handleSave = () => {

        if (inputNameRef.current?.value.trim().length === 0 || inputQtdRef.current?.value.trim().length === 0) {
            errorToast({ title: "Erro ao adicionar um novo produto", message: "Por favor preencha os dados do produto" });
            return
        }

        if (inputValues.some((el) => { return el.name === inputNameRef.current?.value })) {
            errorToast({ title: "Erro ao adicionar um novo produto", message: "Este produto já foi cadastrado. Remova-o para cadastrar novamente" });
            return
        }


        let product: Product[] = inputValues
        setInputValues([])

        let prod: Product = {
            name: inputNameRef.current?.value,
            quantity: inputQtdRef?.current?.value
        }
        product.push(prod)
        setInputValues([...product])
    };
    const removeProduct = (id: number) => {
        let product: Product[] = inputValues
        setInputValues([])
        product.splice(id, 1);
        setInputValues([...product])
    }
    const handleSaveDelivery = () => {
        let valid: any = []
        if (fullName.trim().length === 0) {
            valid[0] = [true]

        }
        if (street.trim().length === 0) {
            valid[1] = [true]
        }
        if (houseNumber.trim().length === 0) {
            valid[2] = [true]
        }
        if (district.trim().length === 0) {
            valid[3] = [true]
        }

        if (cep.trim().length === 0) {
            valid[4] = [true]
        }
        if (inputValues.length === 0) {
            console.log('Entrou')
            if (inputNameRef.current?.value.trim().length === 0) {
                valid[5] = [true]

            }
            if (inputQtdRef.current?.value.trim().length === 0) {
                valid[6] = [true]
            }
        }

        setIsNotValid(valid)
        if (inputValues.length === 0 && (!valid[5] || !valid[6])) {
            errorToast({ title: "Erro ao cadastrar uma encomenda", message: `Cadastre ao menos um produto.` });
            return
        }
        if (valid.some((entry: any) => typeof entry[0] === 'boolean')) {
            errorToast({ title: "Erro ao cadastrar uma encomenda", message: `Preencha os campos destacados.` });
            return
        }

        let deliveries: Delivery = {
            destiny: fullName,
            address: {
                street,
                number: houseNumber,
                district,
                cep
            },
            producties: inputValues
        }
        saveDelivery(deliveries)
        successToast({ title: "Sucesso", message: `A encomenda foi cadastrada.` });
    }

    const pesquisarCep = async (text: string) => {
        text = text.trim().replace("-", "")

        setCep(text)

        if (text.length == 8) {
            try {
                const resp = await pesquisaEndereco(text)
                if (resp) {
                    if (resp.localidade) {
                        setStreet(resp.logradouro)
                        setDistrict(resp.bairro)
                        return
                    }
                }
            } catch (error) {
                errorToast({ title: "Erro ao consultar o CEP", message: `Por favor aguarde alguns segundos e tente novamente.` });
            } finally {
            }
        }
    }

    return (
        <>
            {isMobile ?
                <Flex justify='center'>
                    <Button w='60%' p='6%' fontSize='xl' mt='5%' onClick={onOpen} ml='1%' colorScheme='brand'>Cadastrar Entrega</Button>
                </Flex>
                :
                <Button onClick={onOpen} ml='1%' colorScheme='brand'>Cadastrar Entrega</Button>
            }

            <Modal
                size='xl'
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent bg={cores.backgroundSecundario}>
                    <ModalHeader textAlign={'center'} color='white' as='b'>Cadastro de Entregas</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel color='white' as='b'>Nome Completo</FormLabel>
                            <Input
                                color='#cccccc'
                                borderColor={isNotValid[0] ? 'red' : 'white'}
                                onChange={e => { setFullName(e.target.value) }}
                                value={fullName}
                                ref={initialRef}
                                placeholder='Digite o Nome Completo'
                                _placeholder={{ color: '#cccccc' }} />
                        </FormControl>
                        <Flex>
                            <FormControl flex={2}> 
                                <FormLabel mt={3} color='white' as='b'>Rua</FormLabel>
                                <Input color='#cccccc'
                                    borderColor={isNotValid[1] ? 'red' : 'white'}
                                    value={street}
                                    ref={initialRef}
                                    placeholder='Preencha o CEP'
                                    _placeholder={{ color: '#cccccc' }}
                                    readOnly={true}
                                />

                            </FormControl>

                            <FormControl flex={1} ml={3}>
                                <FormLabel mt={3} color='white' as='b'>Numero</FormLabel>
                                <Input color='#cccccc'
                                    onChange={e => { setHouseNumber(e.target.value) }}
                                    borderColor={isNotValid[2] ? 'red' : 'white'}
                                    value={houseNumber}
                                    ref={initialRef}
                                    placeholder='Digite Número'
                                    _placeholder={{ color: '#cccccc' }} />
                            </FormControl>
                        </Flex>
                        <Flex>

                            <FormControl flex={2}>
                                <FormLabel mt={3} color='white' as='b'>Bairro</FormLabel>
                                <Input color='#cccccc'
                                    borderColor={isNotValid[3] ? 'red' : 'white'}
                                    value={district}
                                    ref={initialRef}
                                    placeholder='Preencha o CEP'
                                    _placeholder={{ color: '#cccccc' }}
                                    readOnly={true}
                                />

                            </FormControl>

                            <FormControl flex={1} ml={3}>
                                <FormLabel mt={3} color='white' as='b'>CEP</FormLabel>
                                <Input color='#cccccc'
                                    onChange={e => { setCep(e.target.value) }}
                                    onBlur={e => { pesquisarCep(e.target.value) }}
                                    borderColor={isNotValid[4] ? 'red' : 'white'}
                                    value={cep}
                                    ref={initialRef}
                                    placeholder='Digite o Endereço'
                                    _placeholder={{ color: '#cccccc' }} />
                            </FormControl>
                        </Flex>
                        <FormControl mt={4}>
                            <Flex
                                direction='row'
                                justify='space-between'
                            >
                            </Flex>
                            <Flex
                                mt={3}
                                direction='row'
                                align='flex-end'
                            >
                                <Flex w='100%' direction='column'>
                                    <FormLabel color='white' as='b'>Nome do Produto</FormLabel>
                                    <Input
                                        borderColor={isNotValid[5] ? 'red' : 'white'}
                                        color='#cccccc'
                                        placeholder={`Nome do Produto`}
                                        _placeholder={{ color: '#cccccc' }}
                                        ref={el => inputNameRef.current = el}
                                        type="text"
                                    />
                                </Flex>
                                <Flex w='25%' direction='column'>
                                    <FormLabel ml={3} color='white' as='b'>Quantidade</FormLabel>
                                    <Input
                                        borderColor={isNotValid[6] ? 'red' : 'white'}
                                        ml={3}
                                        color='#cccccc'
                                        placeholder={`Quantidade`}
                                        _placeholder={{ color: '#cccccc' }}
                                        ref={el => inputQtdRef.current = el}
                                        type="text"
                                    />
                                </Flex>
                                <Button w='25%' colorScheme='brand' ml={5} onClick={handleSave}>
                                    Salvar
                                </Button>
                            </Flex>
                        </FormControl>
                        {message && <Text color={'#F95E5E'}>{message}</Text>}
                        <TableProducts data={inputValues} removeProduct={removeProduct} />

                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='close' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme='brand' onClick={() => { handleSaveDelivery() }}>Cadastrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalCadastro;