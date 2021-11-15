const CardUser = ({ user }) => {
  return (
    <article>
      <img src={user.imgage} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <p>{user.age}</p>
      <p>amigos </p>
      <p>enemigos</p>
    </article>
  );
};
export default CardUser;
