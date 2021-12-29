import request from '@/utils/request';

export function getVideos() {
  return request(`${BASE_API}/videos`);
}

export function createVideo(file) {
  let formData = new FormData();
  formData.append('file', file);
  return request(`${BASE_API}/videos`, {
    method: 'post',
    body: formData,
    upload: true,
  });
}

export function likeVideos({ guid }) {
  return request(`${BASE_API}/videos/${guid}/like`, {
    method: 'patch',
  });
}

export function unlikeVideos({ guid }) {
  return request(`${BASE_API}/videos/${guid}/unlike`, {
    method: 'patch',
  });
}

export function login(value) {
  return request(`${BASE_API}/auth/signin`, {
    method: 'post',
    body: JSON.stringify(value),
  });
}
