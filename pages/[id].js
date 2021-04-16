const UserDetails = ({ user }) => {
 
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phone}</h1>
      <h1>{user.website}</h1>
    </div>
  );
};

export async function getStaticProps(context) {
    console.log("revalidating")
  const { params } = context;
  const userID = params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/"+ userID);
  const user = await res.json()
  if(Object.keys(user).length===0){
      return { notFound : true}
  }
  return {
    props: {
      user,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" }}],
    fallback: "blocking",
  };
}

export default UserDetails;
