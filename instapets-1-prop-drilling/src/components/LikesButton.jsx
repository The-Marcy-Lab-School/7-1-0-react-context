import { useState } from 'react';

const LikesButton = ({ incrementTotalLikes }) => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    incrementTotalLikes();
    setLikes(likes + 1)
  }

  return (
    <div className="likes-container">
      <button onClick={handleClick}>❤️ {likes}</button>
    </div>
  )
}

export default LikesButton;