import React from 'react';
import { Grid, Box } from "@chakra-ui/core";

const GridWrapper = () => {

	return (
		<div>
			<Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Box w="100%" h="10" bg="lavender" />
          <Box w="100%" h="10" bg="hotpink" />
          <Box w="100%" h="10" bg="pink.50" />
          <Box w="100%" h="10" bg="Aquamarine" />
          <Box w="100%" h="10" bg="red.400" />
        </Grid>
		</div>
	);
};

export default GridWrapper;
