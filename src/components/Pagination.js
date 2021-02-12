import React from "react";

const Pagination = ({ postsPerPage, pageNumber, totalPosts, paginate }) => {
  const pageNumbers = [];
  console.log(postsPerPage);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <div>
      <ul style={{ height: "40px" }}>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
