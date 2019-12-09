import Link from 'next/link';
import {useEffect, useState, useCallback} from 'react'
import { useRouter } from 'next/router';
const uuidv1 = require('uuid/v1');

import {
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Image,
  Badge,
  Button
} from '@chakra-ui/core';

const Checkout = () => {
  const router = useRouter();

  const [uuidString, setUuidString] = useState('123');

  const handlePurchase = ()=>{


    router.push(`/purchased/${uuidString}`)
    //
    // useCallback(
    //
    // ,[uuidString]);

    // setTimeout()

  };

  // useEffect(()=>{
  //   router.push(`/purchased/${uuidString}`)
  // }, [uuidString]);

  useEffect(()=>{
    let newUuid = uuidv1();

    setUuidString(newUuid);
  },[]);


  return (
    <Flex
      direction={'column'}
      w={'600px'}
      h={'90vh'}
      justifyContent={'space-between'}
    >
      <Text>Checkout with Stripe API/ Apple Pay will go here.</Text>

      {/*<Link href={`/${uuidString}`}>*/}
        <Button onClick={handlePurchase}>Purchase Card</Button>
      {/*</Link>*/}

      <div>
        <Link href={`/${router.query.theme}/${router.query.selectedCard}`}>
          <Button>⬅️ Go back to the selected card</Button>
        </Link>

        <Link href={`/${router.query.theme}`}>
          <Button>
            ⬅️ Go back to view all {router.query.theme} card options
          </Button>
        </Link>
      </div>
    </Flex>
  );
};

export default Checkout;
