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

const HappyBirthday = () => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4
  };

  return (
    <div>
      <Text size="m">This is the page with all the</Text>

      <Heading size="xl">Happy Birthday Cards</Heading>

      <Box bg={'gray.100'}></Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={6}>

        <FlexCard>
          <Text size="m">Happy Birthday Card 3</Text>
        </FlexCard>

        <FlexCard>
          <Text size="m">Happy Birthday Card 3</Text>
        </FlexCard>

        <FlexCard>
          <Text size="m">Happy Birthday Card 3</Text>
        </FlexCard>

      </Grid>
    </div>
  );
};

import React from 'react';

const FlexCard = ({ children }) => {
  return (
    <div>
      <Flex justifyContent="center" alignItems="center" w="100%" h="200px" bg="lavender">
        {children}
      </Flex>
    </div>
  );
};

// export default FlexCard;

export default HappyBirthday;
