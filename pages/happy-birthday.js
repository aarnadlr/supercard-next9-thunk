import Link from 'next/link';
import { Box, Heading, Stack, Text, Image, Badge } from '@chakra-ui/core';

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

      {/*<h2>H2 QUERY: {query && query.name}</h2>*/}
      {/*<Heading as="h3" size="lg">*/}
      {/*  Digital Greetings*/}
      {/*</Heading>*/}

      <Link href="/">



        <Box bg={'gray.200'} maxW={'200px'} h={'400px'} borderWidth="1px" rounded="lg" overflow="hidden">


          <Box p="6">
            <Box d="flex" alignItems="baseline">
                <Badge rounded="full" px="2" variantColor="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => '⭐️')}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>


      </Link>
    </div>
  );
};

export default HappyBirthday;
