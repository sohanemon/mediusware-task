import "../assets/scss/table/table.scss";
export default function Table({ contacts }) {
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>Contact</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact) => (
            <tr>
              <td>{contact?.phone}</td>
              <td>{contact?.country?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
