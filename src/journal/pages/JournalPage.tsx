import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView></NothingSelectedView> */}
      <NoteView></NoteView>

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {backgroundColor: "error.main", opacity: 0.7},
          position: "fixed",
          right: 50,
          bottom: 50
        }}>
          <AddOutlined
            sx={{fontSize: 30}}></AddOutlined>
        </IconButton>
    </JournalLayout>
  )
}
