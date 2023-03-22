import { CardActionArea } from "@mui/material";

const AvatarPrev = ({ src, handleClose, setPhotoURL}) => {
  const handleIcon = (src) => {
    setPhotoURL(src)
    handleClose()
  }
  return (
    <CardActionArea onClick={() => handleIcon(src)}>
      <img src={src} alt="icon 'organic' about plants" className="w-16 h-16 rounded-full" />
    </CardActionArea>
  )
}

export default AvatarPrev