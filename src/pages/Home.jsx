import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Users from "../components/Users";
import { Pagination } from "../components/Pagination";
import { getAllUsers } from "../redux/usersReducer";

const Home = ({ getAllUsers, users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    getAllUsers();
  }, []);

  // get current posts
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Users users={currentUsers} />
      <Pagination
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        paginate={paginate}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
});

const mapDispatchToProps = {
  getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
