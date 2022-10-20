import {
    useToast,
    Flex,
    Text,
} from '@chakra-ui/react'
import { cores } from '../../styles/colors'
import {WarningIcon, CheckCircleIcon } from '@chakra-ui/icons'

export const CustomToast = () => {
    const toast = useToast();
    // types are: "success", "info", "warning", "error"

    const errorToast = (props:any) => {
        toast({
            render: () => (
                <Flex borderRadius={'md'} p={'2%'} direction={'row'} bg={cores.toastBackgroundErro} w={'50vh'}>
                    <Flex align={'center'} justify={'center'} w={'15%'} color='white'>
                        <WarningIcon  w={7} h={7}/>
                    </Flex>
                    <Flex mt={'2%'} ml={'2%'} direction={'column'} minH={'5vw'}>
                        <Flex  direction={'row'} align={'center'} minH={'2vw'} h={'auto'}>
                            <Text lineHeight={0.9} as={'b'} fontSize='lg' color='white'>{props.title}</Text>
                        </Flex>
                        <Flex direction={'row'} textAlign={'start'} minH={'3vw'} h={'auto'}>
                            <Text fontSize='md' color='white'>{props.message}</Text>
                        </Flex>
                    </Flex>
                </Flex>
              ), 
            position:"bottom", 
            isClosable: true, 
            duration: 5000,
            variant: 'left-accent' 
        })
    }
    const successToast = (props:any) => {
        toast({
            render: () => (
                <Flex borderRadius={'md'} p={'2%'} direction={'row'} bg={cores.toastBackgroundSuccess} w={'50vh'}>
                    <Flex align={'center'} justify={'center'} w={'15%'}color='white'>
                        <CheckCircleIcon  w={7} h={7}/>
                    </Flex>
                    <Flex mt={'2%'} ml={'2%'} direction={'column'} minH={'5vw'}>
                        <Flex direction={'row'} align={'center'} minH={'2vw'} h={'auto'}>
                            <Text lineHeight={0.9} as={'b'} fontSize='lg' color='white'>{props.title}</Text>
                        </Flex>
                        <Flex mt={'1%'} direction={'row'} textAlign={'start'} minH={'3vw'} h={'auto'}>
                            <Text fontSize='md' color='white'>{props.message}</Text>
                        </Flex>
                    </Flex>
                </Flex>
              ), 
            position:"bottom", 
            isClosable: true, 
            duration: 5000,
            variant: 'left-accent' 
        })
    }
    
    return { errorToast, successToast };
}