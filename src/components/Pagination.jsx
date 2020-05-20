import React from "react";
import "../index.css";

export const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++)
    pageNumbers.push(i);
  return (
    <nav className="pagination-wrapper">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item">
            <a onClick={(e) => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
