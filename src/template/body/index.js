import React, { Component } from "react";
import { ListDosen, ListJurusan, RegisterPage } from "../../page";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userEdit: {},
    };
  }

  renderPage = () => {
    const { currentPage } = this.props;
    const { users, userEdit } = this.state;

    if (currentPage === "list-dosen") return <ListDosen />;

    if (currentPage === "list-jurusan") return <ListJurusan />;

    return "";
    console.log("currentPage", currentPage);
  };

  updateUsers = (newUser) => {
    console.log(newUser);
    if (newUser.id === "") {
      const oldUsers = this.state.users;
      oldUsers.push({
        id: oldUsers.length
          ? Math.max(...oldUsers.map((user) => user.id)) + 1
          : 1,
        name: newUser.name,
        address: newUser.address,
      });
      return this.setState(
        {
          userList: oldUsers,
        },
        () => this.props.goToPage("list")
      );
    }

    const oldUsers = this.state.users;
    const idxUser = oldUsers.map((user) => user.id).indexOf(newUser.id);
    console.log(idxUser);
    oldUsers.splice(idxUser, 1, newUser);
    this.setState(
      {
        userList: oldUsers,
      },
      () => this.props.goToPage("list")
    );
  };

  setUserEdit = (userEdit) =>
    this.setState({ userEdit }, () => this.props.goToPage("form"));

  clearUserEdit = () => this.setState({ userEdit: {} });

  render() {
    return this.renderPage();
  }
}

export default Body;
