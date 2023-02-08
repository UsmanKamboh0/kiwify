import user from "../src/img/user.png";
import forward from "../src/img/forward.png";
import swap from "../src/img/switch.png";
import swap1 from "../src/img/switch1.png";
import course from "../src/img/course.png";
import down from "../src/img/down.png";
import up from "../src/img/up.png";
import "./App.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaBook,
} from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import edit from '../src/img/edit.png';
import inbox from '../src/img/envelope.png';
import settings from '../src/img/settings.png';
import help from '../src/img/question.png';
import logout from '../src/img/log-out.png';
import footer from "../src/img/footer.png";
import React, { useState, useEffect, useRef } from "react";
import Player from "./video";
import ReviewCard from "./Reivew";
import { Image, NavLink } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { useFormAction } from "react-router-dom";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import './Userdropdown.css';
const Userdropdown = () => {
  return (
<>
<Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic" style={{ float: 'right', background: 'transparent' }}
                    >
                      <Image
                        src={'https://github.com/mshaaban0.png'}
                        rounded
                        style={{ width: '40px', borderRadius: '100%', float: 'right' }}
                        className='img-fluid rounded-circle'
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <div className="email">ubaber59@gmail.com</div>
                      <DropdownItem img={course} text={"My courses"} />
                      <DropdownItem img={swap1} text={"Switch to Producer Dashboard"} />
                      <DropdownItem img={logout} text={"Logout"} />
                    </Dropdown.Menu>

                  </Dropdown>

</>



    )
}
function DropdownItem(props) {
    return (
      <li className="dropdownItem">
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }
export default Userdropdown