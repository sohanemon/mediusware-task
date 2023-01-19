import React, { useState } from "react";

const Problem2 = () => {
  const [contacts, setContacts] = useState([]);

  async function fetchContacts(us) {
    let url;
    if (us)
      url =
        "https://contact.mediusware.com/api/country-contacts/united%20states/";
    else url = "https://contact.mediusware.com/api/contacts/";

    const res = await fetch(url);
    const data = await res.json();
  }

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

        <div className='d-flex justify-content-center gap-3'>
          <button
            onClick={() => fetchContacts(false)}
            className='btn btn-lg btn-outline-primary'
            type='button'
          >
            All Contacts
          </button>
          <button
            onClick={() => fetchContacts(true)}
            className='btn btn-lg btn-outline-warning'
            type='button'
          >
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
