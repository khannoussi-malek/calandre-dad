import { Box, Flex, Text } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import { Droppable } from "react-beautiful-dnd";
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
        <Droppable
          droppableId={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "00"
          }
        >
          {(provided, snapshot) => (
            <GridItem
              {...provided.droppableProps}
              ref={provided.innerRef}
              bgColor={snapshot.isDraggingOver ? "pink.100" : `gray.50`}
              maxH="40px"
              onClick={(event) =>
                addtaks(
                  event,
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "00",
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
                    <Task
                      key={taskvalue.id}
                      task={task}
                      setTask={setTask}
                      taskvalue={taskvalue}
                    />
                  ) : (
                    ``
                  )
                )}
                {provided.placeholder}
              </Flex>
            </GridItem>
          )}
        </Droppable>
        <Droppable
          droppableId={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "15"
          }
        >
          {(provided, snapshot) => (
            <GridItem
              {...provided.droppableProps}
              ref={provided.innerRef}
              bgColor={snapshot.isDraggingOver ? "pink.100" : `gray.100`}
              maxH="40px"
              onClick={(event) =>
                addtaks(
                  event,
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "15",
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
                "15"
              }
              //   bgColor="gray.50"
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
                    <Task
                      key={taskvalue.id}
                      task={task}
                      setTask={setTask}
                      taskvalue={taskvalue}
                    />
                  ) : (
                    ``
                  )
                )}
                {provided.placeholder}
              </Flex>
            </GridItem>
          )}
        </Droppable>
        <Droppable
          droppableId={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "30"
          }
        >
          {(provided, snapshot) => (
            <GridItem
              {...provided.droppableProps}
              ref={provided.innerRef}
              bgColor={snapshot.isDraggingOver ? "pink.100" : `gray.200`}
              maxH="40px"
              onClick={(event) =>
                addtaks(
                  event,
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "30",
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
                "30"
              }
              //   bgColor="gray.50"
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
                    <Task
                      key={taskvalue.id}
                      task={task}
                      setTask={setTask}
                      taskvalue={taskvalue}
                    />
                  ) : (
                    ``
                  )
                )}
                {provided.placeholder}
              </Flex>
            </GridItem>
          )}
        </Droppable>
        <Droppable
          droppableId={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "45"
          }
        >
          {(provided, snapshot) => (
            <GridItem
              {...provided.droppableProps}
              ref={provided.innerRef}
              bgColor={snapshot.isDraggingOver ? "pink.100" : `gray.300`}
              maxH="40px"
              onClick={(event) =>
                addtaks(
                  event,
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "45",
                  value.toISOString().slice(0, 10) +
                    "T" +
                    (parseInt(HoursValue.slice(0, 2)) < 9)
                    ? `0${parseInt(HoursValue.slice(0, 2)) + 1}:00`
                    : parseInt(HoursValue.slice(0, 2)) + 1 + ":00"
                )
              }
              borderBottom="1px"
              id={
                value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "45"
              }
              //   bgColor="gray.50"
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
                    <Task
                      key={taskvalue.id}
                      task={task}
                      setTask={setTask}
                      taskvalue={taskvalue}
                    />
                  ) : (
                    ``
                  )
                )}
                {provided.placeholder}
              </Flex>
            </GridItem>
          )}
        </Droppable>
      </Grid>
    </Box>
  );
};
export default TimeElement;
