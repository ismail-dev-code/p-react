export default function Foods({ name, isAvailable, price }) {
  console.log(isAvailable);
  return (
    <>
      {isAvailable ? (
        <ol className="card">
          <li>available: {name}</li>
          <li>{price}</li>
        </ol>
      ) : (
        <ol className="card">
          <li>not available: {name}</li>
          <li>{price}</li>
        </ol>
      )}
    </>
  );
}
