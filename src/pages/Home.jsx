import React, { useEffect, useState } from "react";
import { getAllUsers } from "../redux/usersReducer";
import { connect } from "react-redux";
import { Users } from "../components/Users";
import { Pagination } from "../components/Pagination";

const Home = ({ getAllUsers, users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    getAllUsers();
  }, []);

  // get current posts
  const indexofLastUser = currentPage * usersPerPage;
  const indexofFirstUser = indexofLastUser - usersPerPage;
  const currentUsers = users.slice(indexofFirstUser, indexofLastUser);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(users);
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
