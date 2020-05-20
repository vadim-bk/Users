import React, { useEffect, useState } from "react";
import { getAllUsers } from "../redux/getUsersReducer";
import { connect } from "react-redux";
import { Users } from "../components/Users";
import { Pagination } from "../components/Pagination";

const Home = ({ getAllUsers, users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

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
  users: state.getUsersReducer.users,
});

const mapDispatchToProps = {
  getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
