import { IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { CloseIcon } from "@chakra-ui/icons";
import { Draggable } from "react-beautiful-dnd";
const Task = (props) => {
  const { taskvalue, task, setTask } = props;
  const remove = (event) => {
    event.stopPropagation();

    task.splice(task.indexOf(taskvalue), 1);
    setTask([...task]);
  };
  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
    userSelect: "none",
    padding: 3,
    margin: `0 0 0px 0`,
  });
  return (
    <Draggable
      key={taskvalue.id}
      draggableId={taskvalue.id.toString()}
      index={taskvalue.id}
    >
      {(provided, snapshot) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={
            ("none",
            getItemStyle(snapshot.isDragging, provided.draggableProps.style))
          }
          border="2px"
          borderRadius="20px"
          bgColor={snapshot.isDragging ? `cyan.200` : `cyan.400`}
          borderColor="gray.300"
          mx={3}
          px={2}
        >
          <IconButton
            onClick={(event) => remove(event)}
            size="xs"
            m={1}
            bg="red.300"
            colorScheme="teal"
            // variant="outline"
            fontSize="10px"
            icon={<CloseIcon />}
          />
          just test
        </Box>
      )}
    </Draggable>
  );
};
export default Task;
