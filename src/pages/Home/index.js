import React, { useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { LikedIcon, LikeIcon } from '../../component/Icons';
import Loading from '../../component/Loading';
import { useVideo } from '../../hooks/hooks';
import adminAvater from '../../assets/images/adminAvater.png';
import styles from './index.less';

// eslint-disable-next-line react/prop-types
const LikeContainer = ({ like, unlike, liked, likes }) => {
  const [likeStatus, setLikeStatus] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes || 0);
  return (
    <div
      className={styles.likeContainer}
      onClick={async () => {
        likeStatus ? unlike() : like();
        likeStatus ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
        setLikeStatus(!likeStatus);
      }}
    >
      {likeStatus ? <LikedIcon /> : <LikeIcon />}
      <div className={styles.likes}>
        <div className={styles.likeTxt}>Likes</div>
        <div>{likeCount || 0}</div>
      </div>
    </div>
  );
};

export default () => {
  const { videos, loading, like, unlike } = useVideo();
  return (
    <div className={styles.home}>
      <div className={styles.videos}>
        {videos.map(({ guid, hlsUrl, likes, srcVideo, liked }) => {
          return (
            <div className={styles.video} key={guid}>
              <div className={styles.av}>
                <img className={styles.img} src={adminAvater} />
                <div className={styles.username}>admin</div>
              </div>
              <ReactHlsPlayer
                src={hlsUrl}
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
              />
              <div className={styles.tools}>
                <LikeContainer
                  like={() => {
                    like({ guid });
                  }}
                  unlike={() => {
                    unlike({ guid });
                  }}
                  liked={liked}
                  likes={likes}
                />
                <div className={styles.fileName}>{srcVideo}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Loading loading={loading} />
    </div>
  );
};

//
// const xxx = videos.map(i => {
//   if (i.guid === guid) {
//     return {
//       ...i,
//       likes: 0,
//     };
//   }
//   return i;
// });
// setVideos(xxx);
// // item.like ? (item.like = item.like + 1) : (item.like = 1);
