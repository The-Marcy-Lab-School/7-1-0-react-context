import LikesButton from './LikesButton'

const InstagramPost = ({ picture, incrementTotalLikes }) => {
  return (
    <li className="insta-pic">
      <img alt={picture.caption} src={picture.src} />
      <p>{picture.caption}</p>
      <LikesButton incrementTotalLikes={incrementTotalLikes} />
    </li >
  );
};

export default InstagramPost;