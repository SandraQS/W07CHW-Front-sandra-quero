import { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import CardUser from "../CardUser/CardUser";

const ListUsers = () => {
  const { getUsers, users } = useUsers();
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <section className="section-users">
      <ul className="section-users__users-list">
        <li key={users.id} className="section-users__user">
          {users.map((user) => (
            <CardUser key={user.id} user={user} />
          ))}
        </li>
      </ul>
    </section>
  );
};
export default ListUsers;
