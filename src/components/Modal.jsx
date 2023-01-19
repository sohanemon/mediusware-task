import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "../assets/scss/modal/modal.scss";
import Table from "./table";
export default function Modal({ us }) {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [isEven, setIsEven] = useState(false);
  useEffect(() => {
    fetchContacts(us);

    return () => {};
  }, [us]);

  async function fetchContacts(us) {
    let url;
    if (us)
      url =
        "https://contact.mediusware.com/api/country-contacts/united%20states/";
    else url = "https://contact.mediusware.com/api/contacts/";

    const res = await fetch(url);
    const data = await res.json();
    setContacts(data.results);
  }
  return (
    <>
      <div className='my-modal' tabIndex={-1} id='myModal'>
        <div className='my-modal-dialog'>
          <div className='my-modal-content'>
            <div className='my-modal-header'>
              <h5 className='my-modal-title'> Contacts</h5>
            </div>
            <div className='my-modal-body'>
              <Table contacts={contacts} isEven={isEven} />
            </div>
            <label style={{ display: "flex", gap: 5, cursor: "pointer" }}>
              <input onChange={() => setIsEven((p) => !p)} type='checkbox' />
              Only Even
            </label>
            <div className='my-modal-footer'>
              <button
                onClick={() => navigate(-1)}
                type='button'
                className='btn btn-secondary'
                data-dismiss='my-modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
