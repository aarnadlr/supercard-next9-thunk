import Link from 'next/link';
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
import { useRouter } from 'next/router';

const Checkout = ({ optionNum }) => {
  const router = useRouter();

  return (
    <Flex direction={'column'} w={'600px'} h={'90vh'} justifyContent={'space-between'}>
      <Text>Checkout with Stripe API/ Apple Pay will go here.</Text>

      <div>
        <Link href={`/${router.query.theme}/${router.query.selectedCard}`}>
          <Button>⬅️ Go back to the selected card</Button>
        </Link>

        <Link href={`/${router.query.theme}`}>
          <Button>⬅️ Go back to view all {router.query.theme} card options</Button>
        </Link>
      </div>
    </Flex>
  );
};

export default Checkout;
