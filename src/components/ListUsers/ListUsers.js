import { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import CardUser from "../CardUser/CardUser";

const ListUsers = () => {
  const { getUsers, users } = useUsers();
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <section className="section-users row justify-content-between">
      {users.map((user) => (
        <CardUser key={user.id} user={user} />
      ))}
    </section>
  );
};
export default ListUsers;
