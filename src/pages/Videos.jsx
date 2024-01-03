import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

export default function Videos() {
  const {keyword} = useParams();
  const {isLoading, error, data:videos} = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => 
      axios.get(`/videos/${keyword ? "search" : "popular"}.json`)
        .then((res) => {
          console.log(res);
          return res.data.items;
        })
      ,
  })

  if(isLoading) return <p>loading...</p>
  if(error) return <p>{error}</p>

  return (
    <div>
      Videos {keyword ? `🔍${keyword}` : `🔥`}
      {videos && <ul>
        {
          videos.map(video => <VideoCard key={video.id} video={video}/>)
        }</ul>}
    </div>
  );
}

