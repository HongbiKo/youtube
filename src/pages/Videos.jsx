import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
// import FakeYoutube from '../api/fakeYoutube';
// import Youtube from '../api/youtube';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const {keyword} = useParams();
  const {youtube} = useYoutubeApi();

  const {isLoading, error, data:videos} = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () =>
      youtube.search(keyword),
    },
  )

  if(isLoading) return <p>loading...</p>
  if(error) return <p>{error}</p>

  return (
    <div>
      Videos {keyword ? `🔍${keyword}` : `🔥`}
      {videos && <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
        {
          videos.map(video => (<VideoCard key={video.id} video={video}/>))
        }</ul>}
    </div>
  );
}

