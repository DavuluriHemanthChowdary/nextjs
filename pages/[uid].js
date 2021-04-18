const UserProfile = ({user}) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phone}</h1>
      <h1>{user.website}</h1>
    </div>
  );
};

export default UserProfile;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const uid = params.uid
  console.log("making a get request")
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + uid
  );
  const user = await response.json();
  if (Object.keys(user).length === 0) {
    return { notFound: true };
  }
  return {
    props: {
      user
    },
  };
}
