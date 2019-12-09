import React, { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Image,
  Input,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useTheme,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/core';

// ROUTER OBJ: `router` object data:
// {
// 	"pathname": "/happy-birthday/[option]",
// 	"route": "/happy-birthday/[option]",
// 	"query": {
// 		"cardId": "001",			<--query string!!
// 		"option": "option1" 	<--route/path param!!
// 	},
// 	"asPath": "/happy-birthday/option1?cardId=001",
// 	"components": {
// 		"/happy-birthday/[option]": {
// 			"props": {
// 				"pageProps": {},
// 				"initialReduxState": {
// 					"lastUpdate": 0,
// 					"light": false,
//
// 					"count": 0
// 				}
// 			}
// 		},
//
// 		"/_app": {}
// 	},
// 	"events": {}
// }

const V1 = () => {
  // const router = useRouter();
  const theme = useTheme();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [customName, setCustomName] = useState('');

  const headingRef = useRef();
  const handleChange = e => setCustomName(e.target.value);

  useEffect(() => {
    onOpen();
    headingRef.current.style.transform = 'rotate(-6deg)';
  }, []);

  return (
    <div>
      {/*<Box>Happy birthday {router.query.name}</Box>*/}
      <Text color={'gray.500'}>(This is a cool Valentine's Day card)</Text>
      <Heading ref={headingRef} fontSize={'64px'} color={'red.400'}>
        Happy Valentine's Day {customName}!
      </Heading>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={theme.fonts.body}>
            Customize the card!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection={'column'}>
              <Text mb="8px">
                Type in your friend's name below to see it displayed in the
                selected card:
              </Text>

              <form onSubmit={onClose}>
                <Input
                  onChange={handleChange}
                  placeholder="Recipient's name"
                  w={'initial'}
                  value={customName}
                  // size="sm"
                />
                <Button variantColor="blue" mr={3} onClick={onClose}>
                  Submit
                </Button>
              </form>
            </Flex>
          </ModalBody>

          {/*<ModalFooter>*/}
          {/*<Button variant="ghost">Secondary Action</Button>*/}
          {/*</ModalFooter>*/}
        </ModalContent>
      </Modal>

      <div className={'footer'}>
        <Link href={'/happy-birthday'}>
          <div>⬅️ Go back to options</div>
        </Link>
        <div onClick={onOpen}>Reopen the modal to customize the name</div>

        <Link href={'/checkout?selectedCard=v1&theme=valentines'}>
          <div>Yes, I want this card ➡️</div>
        </Link>
      </div>

      <style>{`
			.footer{
        display:flex;
        justify-content: space-between;
				background: gray;
				height: 40px;
				width: 100%;
				position: absolute;
				bottom:0;
				left:0;
				flex-wrap: wrap;
			}
			button{
        font-size: 14px;
			`}</style>
    </div>
  );
};

export default V1;
