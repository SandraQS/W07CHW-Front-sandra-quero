import "./CardUser.css";

const CardUser = ({
  user: { image, name, username, age, friends, enemies, id },
}) => {
  return (
    <article
      className="section-user  col-md-6 col-lg-3 col-12 row justify-content-center"
      key={id}
    >
      <div className="section-user__container-image">
        <img src={image} alt={name} className="section-user__image" />
      </div>
      <div className="section-user__container-info row justify-content-between">
        <h2 className="section-user__name col-12">{name}</h2>
        <p className="section-user__username  col-md-6 col-12">{username}</p>
        <p className="section-user__age col-md-6 col-1">Edad: {age}</p>
        <p className="section-user__friends col-md-6 col-1">
          Amigos: {friends.length}
        </p>
        <p className="section-user__enemies col-md-6 col-1">
          Enemigos: {enemies.length}
        </p>
        <button
          type="button"
          className="section-user__button-friends btn btn-outline-light"
        >
          Añadir como amigo
        </button>
        <button
          type="button"
          className="section-user__button-enemies btn btn-outline-light"
        >
          Añadir como enemigo
        </button>
      </div>
    </article>
  );
};
export default CardUser;
