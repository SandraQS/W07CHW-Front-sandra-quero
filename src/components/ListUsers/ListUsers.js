import { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import CardUser from "../CardUser/CardUser";

const ListUsers = () => {
  const { getUsers, users } = useUsers();
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  console.log(`${users} AQUIIII`);
  return (
    <section>
      <ul>
        <li key={users.id}>
          {users.map((user) => (
            <CardUser key={user.id} user={user} />
          ))}
        </li>
      </ul>
    </section>
  );
};
export default ListUsers;
