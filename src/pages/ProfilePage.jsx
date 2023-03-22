import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { AvatarPrev } from "@/components"
import getAvatarString from "@/utilities/getAvatarString"
import { Avatar, Button, TextField, Modal, Box, Typography } from "@mui/material"
import { updateUser } from "../services/AuthServices"
import { userUpdate } from "../app/features/user/userSlice"
import { isAsyncThunkAction } from "@reduxjs/toolkit"

const UrlIcons = ["https://i.imgur.com/dJNKfX8.png", "https://i.imgur.com/vH3vFQ2.png", "https://i.imgur.com/a3Pha6o.png", "https://i.imgur.com/E96uxEG.png"]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
  textAlign: "center"
};

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialStateUsername = userInfo.username
  const [open, setOpen] = useState(false);
  const [photoURL, setPhotoURL] = useState("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [username, setUsername] = useState(initialStateUsername)

  const handleUpdate = async (username, photoURL) => {
    const user = {
      username,
      photoURL
    }
    await updateUser(username, photoURL)
    dispatch(userUpdate(user))
    navigate("/home")
  }

  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Select organic icon!
          </Typography>
          <div id="keep-mounted-modal-description" className="my-2 flex flex-col items-center sm:flex-row gap-2 justify-center">
            {UrlIcons.map((src, i) => (
              <AvatarPrev src={src} handleClose={handleClose} setPhotoURL={setPhotoURL} key={i} />
            ))}
          </div>
        </Box>
      </Modal>
      <div className="flex w-full h-12 justify-between">
        <h4 className="text-lg tracking-widest text-gray-500"><Link to="/home" className="cursor-pointer hover:underline hover:text-black">Home</Link> / Search</h4>
        <h4 className="text-lg tracking-widest">Welcome <b className=" underline">{userInfo.username}</b></h4>
      </div>
      <h3 className="font-bold text-3xl tracking-widest my-4">Profile Information</h3>
      <p className="text-lg tracking-wide my-4">Update your account's profile information and email address</p>
      <div className="w-full h-[480px] my-4 p-8 shadow-xl bg-white flex flex-col items-start">
        <span className="font-bold">Photo: </span>
        {userInfo.photoURL ? <Avatar src={userInfo.photoURL} alt={`profile icon of ${userInfo.username}`} sx={{ width: 56, height: 56, margin: "16px 0" }} /> : <Avatar {...getAvatarString(`${userInfo.username}`)} sx={{ width: 56, height: 56, margin: "16px 0" }} />}
        <Button variant="outlined" onClick={handleOpen} >Change photo</Button>
        <span className="font-bold my-4">Username:</span>
        <TextField name="username" size="small" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Button variant="contained" onClick={() => handleUpdate(username, photoURL)} color="success" sx={{ alignSelf: "flex-end", margin: "16px 0" }}>Save</Button>
      </div>
    </>
  )
}

export default ProfilePage