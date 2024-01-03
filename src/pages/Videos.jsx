import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import FakeYoutube from '../api/fakeYoutube';

export default function Videos() {
  const {keyword} = useParams();
  const {isLoading, error, data:videos} = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      const youtube = new FakeYoutube();
      return youtube.search(keyword);
    }},
  )

  if(isLoading) return <p>loading...</p>
  if(error) return <p>{error}</p>

  return (
    <div>
      Videos {keyword ? `🔍${keyword}` : `🔥`}
      {videos && <ul>
        {
          videos.map(video => (<VideoCard key={video.id} video={video}/>))
        }</ul>}
    </div>
  );
}

