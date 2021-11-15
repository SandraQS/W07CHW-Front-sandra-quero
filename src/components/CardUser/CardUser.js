const CardUser = ({
  user,
  user: { image, name, username, age, friends, enemies, id },
}) => {
  return (
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{age}</p>
      <p>Amigos: {friends.length} </p>
      <p>Enemigos: {enemies.length} </p>
    </article>
  );
};
export default CardUser;
