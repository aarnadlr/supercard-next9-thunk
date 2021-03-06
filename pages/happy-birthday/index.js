import Link from 'next/link';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Image,
  Badge
} from '@chakra-ui/core';

const Index = () => {
  return (
    <div>
      <Text size="m">This is the page with all the</Text>

      <Heading size="xl">Happy Birthday Cards</Heading>

      <Box bg={'gray.100'}></Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Link href="/happy-birthday/hbd1">
          <Flex alignItems={'center'} justifyContent={'center'} direction={'column'} bg="green.100" w={'100%'} h={'200px'}>
            <Text size="m">Happy Birthday Card 1</Text>

            <Text size="m">(CLICK TO VIEW)</Text>
          </Flex>
        </Link>

        <div>
          <br />
          <Text color={'gray.500'}>
            (All the HBD cards will be displayed here in a grid)
          </Text>
        </div>
        {/*<Link href="/happy-birthday/option2?cardId=002&name=Emmett">*/}
        {/*  <Flex bg="teal.200" w={'100%'} h={'200px'}>*/}
        {/*    <Text size="m">Happy Birthday Card 2</Text>*/}
        {/*  </Flex>*/}
        {/*</Link>*/}

        {/*<Link href="/happy-birthday/option3?cardId=003&name=Emmett">*/}
        {/*  <Flex bg="blue.300" w={'100%'} h={'200px'}>*/}
        {/*    <Text size="m">Happy Birthday Card 3</Text>*/}
        {/*  </Flex>*/}
        {/*</Link>*/}

        {/*<Link href="/happy-birthday/option1">*/}
        {/*  <Flex bg="cyan.100" w={'100%'} h={'200px'}>*/}
        {/*    <Text size="m">Happy Birthday Card 4</Text>*/}
        {/*  </Flex>*/}
        {/*</Link>*/}
      </Grid>

        <br />
        <br />


      <Link href={'/index'}>
        <button>⬅️ Go back to all card options</button>
      </Link>


    </div>
  );
};

// const FlexCard = forwardRef((({ children }) => {
//   return (
//     <div>
//       <Flex
//         justifyContent="center"
//         alignItems="center"
//         w="100%"
//         h="200px"
//         bg="lavender"
//       >
//         {children}
//       </Flex>
//     </div>
//   )
// });

// export default FlexCard;

export default Index;
