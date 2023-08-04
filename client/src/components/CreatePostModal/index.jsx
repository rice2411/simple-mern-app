import FileBase64 from "react-file-base64";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import { createPost, hideModal } from "../../redux/actions";
import { useTheme } from "@emotion/react";
import { Modal, TextField, TextareaAutosize } from "@mui/material";
import { Button } from "@mui/base";

export default function CreatePostModal() {
  const [data, setData] = React.useState({
    title: "",
    content: "",
    attachment: "",
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const theme = useTheme();

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      }}
      id="simple-modal-title"
    >
      <h2>Create New Post</h2>
      <form
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          sx={{
            marginBottom: "10px",
          }}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          sx={{
            padding: "10px",
            marginBottom: "10px",
          }}
          minRows={10}
          maxRows={15}
          placeholder="Content..."
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
