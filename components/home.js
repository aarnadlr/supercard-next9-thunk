import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';
import { useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

const Home = () => {


  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }, []);


  return (
    <div>
      <Flex direction={'column'}>
        <Stack spacing={0}>
          <Heading as="h2" size="xl">
            Supercard
          </Heading>

          <Heading as="h3" size="lg">
            Digital Greetings
          </Heading>
        </Stack>

        <Text fontSize="2xl">Choose from these options below:</Text>

        <Link href="/happy-birthday">
          <a href="#">
            <Text fontSize={'22px'}>Happy Birthday cards</Text>
          </a>
        </Link>

        <Link href="/valentines">
          <a href="#">
            <Text fontSize="22px">Valentine's Day cards</Text>
          </a>
        </Link>
      </Flex>
    </div>
  );
};

export default Home;
