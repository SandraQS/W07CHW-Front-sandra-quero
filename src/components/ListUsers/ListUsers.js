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
        <li>
          {users.map((user) => (
            <CardUser user={user} />
          ))}
        </li>
      </ul>
    </section>
  );
};
export default ListUsers;
