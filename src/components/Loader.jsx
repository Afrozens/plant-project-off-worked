import { CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 flex justify-center items-center">
        <CircularProgress color="primary" sx={{margin: "0 auto"}}/>
    </div>
  )
}

export default Loader