import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  useTheme
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

const Option = () => {
  const router = useRouter();
  const theme = useTheme();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [customName, setCustomName] = useState('asher');

  const handleChange = e => setCustomName(e.target.value);

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <div>
      {/*<Box>Happy birthday {router.query.name}</Box>*/}
      <Box>Happy birthday {customName}</Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={theme.fonts.body}>
            Customize the card!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
<Flex flexDirection={'column'}>
            <Text mb="8px">This is copy</Text>
            <Input
              onChange={handleChange}
              placeholder="Here is a sample placeholder"
              w={'initial'}
              value={customName}
              // size="sm"
            />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className={'footer'}>
        <button type="button">⬅️GO back to options</button>
        <button type="button">Yes, I want this one ➡️</button>
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
				left:0
			}
			button{
			font-size: 22px;
			`}</style>
    </div>
  );
};

export default Option;
