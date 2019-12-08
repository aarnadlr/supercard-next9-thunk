import { Box, Heading, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';

const Home = ({ query }) => {
  return (
    <div>
      <Stack spacing={3}>
        <Stack spacing={-6}>
          <Heading as="h2" size="xl">
            Supercard
          </Heading>

          {/*<h2>H2 QUERY: {query && query.name}</h2>*/}
          <Heading as="h3" size="lg">
            Digital Greetings
          </Heading>
        </Stack>

        <Text fontSize="2xl">Choose from these options below:</Text>

        {/*<Link prefetch href="/post?slug=something" as="/post/something">*/}

        <Link href="/happy-birthday">
          <a href="#">
            <Text fontSize="2xl">Happy Birthday cards</Text>
          </a>
        </Link>

        <Link href="/valentines">
          <a href="#">
            <Text fontSize="2xl">Valentine's Day cards</Text>
          </a>
        </Link>
      </Stack>
    </div>
  );
};

export default Home;