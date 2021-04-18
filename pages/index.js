import Link from "next/link"


function index({users}) {
  
  return (
    <div>
      {users.map((user)=>(
        <Link key={user.id} href={"/"+`${user.id}`}>
            <h1>{user.name}</h1>
        </Link>
      ))}
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}

export default index;
