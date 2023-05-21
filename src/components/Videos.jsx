import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard, Loader } from './index'
const Videos = ({ videos, direction }) => {

    if (!videos?.length){
        return <div><Loader/></div>
    }
    // console.log(videos)
    return (
        <Stack direction= {direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, index) =>
            (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetails={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos