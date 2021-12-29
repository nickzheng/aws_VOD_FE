import { useEffect, useState } from 'react';
import { createVideo, getVideos, likeVideos, unlikeVideos } from '../services';

export const useVideo = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const fetch = async () => {
    setLoading(true);
    const response = await getVideos();
    setVideos(response || []);
    setLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);

  const like = async ({ guid }) => {
    await likeVideos({ guid });
  };

  const unlike = async ({ guid }) => {
    await unlikeVideos({ guid });
  };

  const upload = async file => {
    setUploadLoading(true);
    const result = await createVideo(file);
    setUploadLoading(false);
    return result;
  };
  return {
    videos,
    loading,
    uploadLoading,
    like,
    unlike,
    upload,
  };
};
