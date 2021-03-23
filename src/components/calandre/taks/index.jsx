import { IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { CloseIcon } from "@chakra-ui/icons";
const Task = (props) => {
  const { taskvalue, task, setTask } = props;
  const remove = (event) => {
    event.stopPropagation();

    task.splice(task.indexOf(taskvalue), 1);
    setTask([...task]);
  };
  return (
    <Box mx={3} px={2}>
      <IconButton
        onClick={(event) => remove(event)}
        size="xs"
        m={1}
        colorScheme="teal"
        variant="outline"
        fontSize="10px"
        icon={<CloseIcon />}
      />
      just test
    </Box>
  );
};
export default Task;
