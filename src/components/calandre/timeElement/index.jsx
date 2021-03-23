import { Box, Flex, Text } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import Task from "./../taks";

const TimeElement = (props) => {
  const { HoursValue, value, addtaks, task, setTask } = props;
  return (
    <Box h="160px" fontSize="20px" border="1px">
      <Grid
        h="100%"
        templateRows="repeat(4, 1fr)"
        border="3px"
        borderColor="red.200"
        gap={0}
      >
        <GridItem
          bgColor="gray.50"
          maxH="40px"
          onClick={() =>
            addtaks(
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "00",
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "00"
            )
          }
          borderBottom="1px"
          id={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "00"
          }
          //   bgColor="gray.50"
          borderColor="gray.200"
        >
          <Flex>
            <Text fontSize="xs">{HoursValue.slice(0, 3) + "00"}</Text>
            {task.map((taskvalue) =>
              taskvalue.start ===
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "00" ? (
                <Task task={task} setTask={setTask} taskvalue={taskvalue} />
              ) : (
                ``
              )
            )}
          </Flex>
        </GridItem>
        <GridItem
          onClick={() =>
            addtaks(
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "15",
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "15"
            )
          }
          borderBottom="1px"
          id={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "15"
          }
          bgColor="gray.100"
          borderColor="gray.200"
        >
          <Flex>
            <Text fontSize="xs">{HoursValue.slice(0, 3) + "15"}</Text>
            {task.map((taskvalue) =>
              taskvalue.start ===
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "15" ? (
                <Task />
              ) : (
                ``
              )
            )}
          </Flex>
        </GridItem>
        <GridItem
          onClick={() =>
            addtaks(
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "30",
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "30"
            )
          }
          borderBottom="1px"
          id={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "30"
          }
          bgColor="gray.200"
          borderColor="gray.200"
        >
          <Flex>
            <Text fontSize="xs">{HoursValue.slice(0, 3) + "30"}</Text>
            {task.map((taskvalue) =>
              taskvalue.start ===
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "30" ? (
                <Task />
              ) : (
                ``
              )
            )}
          </Flex>
        </GridItem>
        <GridItem
          onClick={() =>
            addtaks(
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "45",
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "45"
            )
          }
          borderBottom="1px"
          id={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "45"
          }
          bgColor="gray.300"
          borderColor="gray.200"
        >
          <Flex>
            <Text fontSize="xs">{HoursValue.slice(0, 3) + "45"}</Text>
            {task.map((taskvalue) =>
              taskvalue.start ===
              value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "45" ? (
                <Task start={taskvalue.start} />
              ) : (
                ``
              )
            )}
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default TimeElement;
