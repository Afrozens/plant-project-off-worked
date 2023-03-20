import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Avatar } from "@mui/material"

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.user)

  return (
    <>
      <div className="flex w-full h-12 justify-between">
        <h4 className="text-lg tracking-widest text-gray-500"><Link to="/home" className="cursor-pointer hover:underline hover:text-black">Home</Link> / Search</h4>
        <h4 className="text-lg tracking-widest">Welcome <b className=" underline">{userInfo.username}</b></h4>
      </div>
      <h3 className="font-bold text-3xl tracking-widest my-4">Profile Information</h3>
      <p className="text-lg tracking-wide my-4">Update your account's profile information and email address</p>
      <div className="w-full h-96 shadow-lg bg-white flex flex-col items-start">
        <span>Photo</span>
        
    </div>
    </>
  )
}

export default ProfilePage