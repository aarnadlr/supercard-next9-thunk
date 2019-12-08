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

      <Heading size="xl">Valentine's Day Cards</Heading>

      <Box bg={'gray.100'}></Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Link href="/valentines/v1">
          <Flex alignItems={'center'} justifyContent={'center'} direction={'column'} bg="red.100" w={'100%'} h={'200px'}>
            <Text size="m">Valentine's Day Card 1</Text>
              <Text size="m">(CLICK TO VIEW)</Text>
          </Flex>
        </Link>
        <div>
          <br />
          <Text color={'gray.400'}>
            (All the VDay cards will be displayed here in a grid)
          </Text>
        </div>
        {/*<Link href="/valentines/option2">*/}
        {/*  <Flex bg="red.200" w={'100%'} h={'200px'}>*/}
        {/*    <Text size="m">Valentine's Day Card 2</Text>*/}
        {/*  </Flex>*/}
        {/*</Link>*/}

        {/*<Link href="/valentines/option3">*/}
        {/*  <Flex bg="red.300" w={'100%'} h={'200px'}>*/}
        {/*    <Text size="m">Valentine's Day Card 3</Text>*/}
        {/*  </Flex>*/}
        {/*</Link>*/}

        {/*<Link href="/happy-valentines/option4">*/}
        {/*  <Flex bg="red.100" w={'100%'} h={'200px'}>*/}
        {/*    <Text size="m">Happy Birthday Card 4</Text>*/}
        {/*  </Flex>*/}
        {/*</Link>*/}
      </Grid>

              <br />
        <br />
      <Link href={'/'}>
        <button type="button">⬅️ Go back to all card options</button>
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
