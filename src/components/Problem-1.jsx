import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [problems, setProblems] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };
  function handleSubmit(e) {
    e.preventDefault();
    const newProblem = {
      name: e.target.name.value,
      status: e.target.status.value,
    };
    const array = [...problems, newProblem];
    const sortedProblem = array.sort(sortProblems);
    setProblems(sortedProblem);
  }
  function sortProblems(a, b) {
    if (a.status === b.status) {
      return 0;
    }
    if (a.status === "active") {
      return -1;
    }
    if (a.status === "completed" && b.status !== "active") {
      return -1;
    }
    return 1;
  }

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
        <div className='col-6 '>
          <form
            onSubmit={handleSubmit}
            className='row gy-2 gx-3 align-items-center mb-4'
          >
            <div className='col-auto'>
              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Name'
              />
            </div>
            <div className='col-auto'>
              <input
                name='status'
                type='text'
                className='form-control'
                placeholder='Status'
              />
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='col-8'>
          <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type='button'
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type='button'
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type='button'
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className='tab-content'></div>
          <table className='table table-striped '>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => {
                if (show === "all")
                  return (
                    <tr>
                      <td>{problem.name}</td>
                      <td>{problem.status}</td>
                    </tr>
                  );
                if (problem.status === show)
                  return (
                    <tr>
                      <td>{problem.name}</td>
                      <td>{problem.status}</td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
