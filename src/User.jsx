export default function User({ user }) {
  const { name, email, id } = user;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Id:{id}</p>
    </div>
  );
}
