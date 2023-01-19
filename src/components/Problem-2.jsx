import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Problem2 = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [modal, setModal] = useState(false);

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

        <div className='d-flex justify-content-center gap-3'>
          <button
            onClick={() => navigate("/problem-2/all")}
            className='btn btn-lg btn-outline-primary'
            type='button'
          >
            All Contacts
          </button>
          <button
            onClick={() => navigate("/problem-2/us")}
            className='btn btn-lg btn-outline-warning'
            type='button'
          >
            US Contacts
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Problem2;
