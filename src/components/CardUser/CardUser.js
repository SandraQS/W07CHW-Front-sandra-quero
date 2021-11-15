const CardUser = ({
  user: { image, name, username, age, friends, enemies },
}) => {
  return (
    <article className="section-user">
      <img src={image} alt={name} className="section-user__image" />
      <h2 className="section-user__name">{name}</h2>
      <p className="section-user__username">{username}</p>
      <p className="section-user__age">{age}</p>
      <p className="section-user__friends">Amigos: {friends.length} </p>
      <p className="section-user__enemies">Enemigos: {enemies.length} </p>
    </article>
  );
};
export default CardUser;
