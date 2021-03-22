import { Box, Center, Grid, GridItem } from "@chakra-ui/layout";
import { useState } from "react";

function Calandre(props) {
  const { rowNumber } = props;
  const Hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  //to get format yyy-mm-ddThh:mm:ss
  // .toISOString().slice(0, 19)

  const [date, setDate] = useState(new Date());

  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const headerDates = [];
  //make header
  for (let i = 0; i < rowNumber; i++) {
    i === 0
      ? headerDates.push(date)
      : headerDates.push(addDays(headerDates[headerDates.length - 1], 1));
  }

  const contenu = [];
  for (const [index, value] of headerDates.entries()) {
    contenu.push(
      <Box>
        <Center
          w="100%"
          key={index}
          border="1px"
          borderColor="gray.200"
          bgColor="gray.300"
          h={10}
          align="center"
        >
          {value.toISOString().slice(0, 10)}
        </Center>
        {Hours.map((HoursValue) => (
          <Box h="160px" key={HoursValue} fontSize="20px">
            <Grid h="100%" templateRows="repeat(4, 1fr)" gap={0}>
              <GridItem
                border="1px"
                id={
                  value.toISOString().slice(0, 10) +
                  "T" +
                  HoursValue.slice(0, 3) +
                  "00"
                }
                bgColor="gray.50"
                borderColor="gray.200"
              ></GridItem>
              <GridItem
                border="1px"
                id={
                  value.toISOString().slice(0, 10) +
                  "T" +
                  HoursValue.slice(0, 3) +
                  "15"
                }
                bgColor="gray.50"
                borderColor="gray.200"
              ></GridItem>
              <GridItem
                border="1px"
                id={
                  value.toISOString().slice(0, 10) +
                  "T" +
                  HoursValue.slice(0, 3) +
                  "30"
                }
                bgColor="gray.50"
                borderColor="gray.200"
              ></GridItem>
              <GridItem
                border="1px"
                id={
                  value.toISOString().slice(0, 10) +
                  "T" +
                  HoursValue.slice(0, 3) +
                  "45"
                }
                bgColor="gray.50"
                borderColor="gray.200"
              ></GridItem>
            </Grid>
          </Box>
        ))}
      </Box>
    );
  }
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={0}>
      <GridItem colSpan={1}>
        <Box w="100%" bgColor="gray.400">
          <Center h={10} align="center"></Center>
          {Hours.map((value) => (
            <Center
              border="1px"
              borderColor="gray.200"
              bgColor="gray.400"
              h="160px"
              key={value}
              fontSize="20px"
            >
              {value}
            </Center>
          ))}
        </Box>
      </GridItem>
      <GridItem colSpan={5} w="100%">
        <Grid
          w="100%"
          templateColumns={"repeat(" + parseInt(rowNumber) + ", 1fr)"}
          gap={0}
        >
          {contenu}
        </Grid>
      </GridItem>
    </Grid>
  );
}

export default Calandre;
