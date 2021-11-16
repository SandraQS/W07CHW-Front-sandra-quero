import ReactTestRenderer from "react-test-renderer";
import CardUser from "./CardUser";

describe("Given", () => {
  describe("WHen", () => {
    test("Then it should", () => {
      const user = {
        name: "Carl",
        username: "Carlitus",
        password:
          "$2b$10$s3c31JSTdrwRMwW5jLaE6.ridoUF4lXQpSTQtECectp/aCmMNXswK",
        friends: [
          {
            $oid: "618ecc54008088cc372842c6",
          },
          {
            $oid: "618fa76a5b619d1c20dbc17c",
          },
        ],
        enemies: [],
        age: 33,
        image:
          "https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-user-14.png",
      };
      const cardUser = ReactTestRenderer.create(
        <CardUser key={user.id} user={user} />
      );

      expect(cardUser.toJSON()).toMatchSnapshot();
    });
  });
});
