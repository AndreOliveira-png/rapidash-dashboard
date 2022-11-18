import React, { useState, useRef } from "react";
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
} from "@chakra-ui/react";
import "../../styles/styles.css";
import { cores } from "../../styles/colors";
import { useMedia } from "react-use";
import { Delivery, Product } from "../../types/types";
import TableProducts from "../tables/component/TableProducts";
import { CustomToast } from "./Toast";
import { pesquisaEndereco } from "../../apis/shearchApi";
import { ApiRequester } from "../../apis/api-requester";

function ModalProdutos<props>(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useMedia("(max-width: 40em)");
  const { saveDelivery } = ApiRequester();
  console.log(props.data);

  return (
    <>
      {isMobile ? (
        <Flex justify="center">
          <Button
            w="60%"
            p="6%"
            fontSize="xl"
            mt="5%"
            onClick={onOpen}
            ml="1%"
            colorScheme="brand"
          >
            Produtos Cadastrados
          </Button>
        </Flex>
      ) : (
        <Button onClick={onOpen} ml="1%" colorScheme="brand">
          Clique Aqui
        </Button>
      )}

      <Modal
        size="xl"
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg={cores.backgroundSecundario}>
          <ModalHeader textAlign={"center"} color="white" as="b">
            Produtos{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableProducts data={props.data} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="close" mr={3} onClick={onClose}>
              Sair
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalProdutos;
