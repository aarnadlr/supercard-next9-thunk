import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetch from 'isomorphic-unfetch';


const Home = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('abc');

  // const selectName = await useSelector(state => state.mongo.users[0].name);
  // setName(selectName);
  // const selectName = useSelector(state => state.mongo.users[0].name);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({ type: 'DATA FETCHED', payload: data });
      });
  }, []);

  // useEffect(() => {
  // setName(selectName);
  // }, [name]);

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

          <Heading as="h3" size="lg">
            Name: {name && name}
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
