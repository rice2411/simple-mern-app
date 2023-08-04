import React from "react";
import { useDispatch } from "react-redux";

import Header from "../components/Header";
import PostList from "../components/PostList";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";
import { useTheme } from "@emotion/react";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function HomePage() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        }}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
