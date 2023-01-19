import "../assets/scss/table/table.scss";
export default function Table({ contacts, isEven }) {
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Contact</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact) => {
            if (isEven === true && contact?.id % 2 == 1) return null;
            else
              return (
                <tr>
                  <td>{contact?.id}</td>
                  <td>{contact?.phone}</td>
                  <td>{contact?.country?.name}</td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </>
  );
}
