const Header = ({ likes }) => {
  return (
    <header>
      <h1>My Pet Pics</h1>
      <h2>My pictures have been liked {likes} times!</h2>
    </header>
  );
};

export default Header;