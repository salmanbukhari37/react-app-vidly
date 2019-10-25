import React, { Component } from "react";

class PaginationComponent extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item active">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default PaginationComponent;
