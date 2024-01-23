import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

export default function ChannelVideos( {channelId} ) {
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos} = useQuery({
    queryKey: ['videos', channelId],
    queryFn: () => {
      return youtube.searchByChannelId(channelId);
    }
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!</p>}
      {videos && (
        <ul>
          {videos.map((video)=> <VideoCard key={videos.id} video={video} type='list'/>)}
        </ul>
      )}
    </>
  );
}

