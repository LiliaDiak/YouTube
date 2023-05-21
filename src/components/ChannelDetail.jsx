import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from "../utils/FetchFromAPI";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos]= useState([]);
  const {id} = useParams();
  console.log(channelDetail, videos);
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items));
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background:'linear-gradient(90deg, rgba(53,106,195,1) 0%, rgba(198,16,75,0.9898809865743172) 50%, rgba(41,211,218,1) 100%)',
      zIndex:10,
      height: '300px'}} >
        <ChannelCard channelDetails={channelDetail}/>

        </div>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail