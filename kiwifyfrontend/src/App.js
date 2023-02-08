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
import edit from "../src/img/edit.png";
import inbox from "../src/img/envelope.png";
import settings from "../src/img/settings.png";
import help from "../src/img/question.png";
import logout from "../src/img/log-out.png";
import footer from "../src/img/footer.png";
import React, { useState, useEffect, useRef } from "react";
import Player from "./video";
import ReviewCard from "./Reivew";
import { Image, NavLink } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useFormAction } from "react-router-dom";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import Userdropdown from "./Userdropdown";
import Select from "react-select";
const Checkbox = ({ children, ...props }: JSX.IntrinsicElements[]) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);
function App() {
  const [userData, setUserdata] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  useEffect(() => {
    const getUserdata = async () => {
      const reqData = await fetch(
        "https://6320710a9f82827dcf2cd53e.mockapi.io/api/v1/course/user"
      );
      const resData = await reqData.json();
      setUserdata(resData);
      console.log(resData);
    };
    getUserdata();
  }, []);
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const percentage = 45;
  return (
    <>
      <div class="">
        <div>
          {userData.map((userData, index) => (
            <div key={index}>
              <div class="topbar">
                <div class="col-lg-8 col-sm-4">
                  <h1
                    style={{
                      color: "white",
                      fontSize: "2.25rem",
                      margin: "0px",
                    }}
                  >
                    {" "}
                    {userData.coursetitle}
                  </h1>
                </div>
                <div class="col-lg-3">
                  <div className="percentage">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                </div>
                <div class="col-lg-1">
                  <Userdropdown />
                </div>
              </div>
              <div class="row ">
                <button
                  className="seeClassesBtn"
                  style={{
                    color: sidebarOpen ? "black" : "blue",
                    background: sidebarOpen ? "white" : "blue",
                  }}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  {sidebarOpen ? (
                    "X"
                  ) : (
                    <h5>
                      <FaBars></FaBars>
                    </h5>
                  )}
                  <h6 style={{ display: !sidebarOpen ? "block" : "none" }}>
                    See classes
                  </h6>
                </button>

                <div className={sidebarOpen ? "col-lg-9" : "col-lg-12"}>
                  <Player />
                </div>
                {sidebarOpen && (
                  <div class="col-lg-3 ">
                    <div className="top_section">
                      <h1
                        style={{ display: sidebarOpen ? "block" : "none" }}
                        className="logo"
                      >
                        Classes
                      </h1>
                    </div>

                    <MDBDropdown
                      style={{
                        width: "321px",
                        marginTop: "-4px",
                        background: "white",
                        marginLeft: "-6px",
                      }}
                    >
                      <div className="moduletitle1">{userData.moduletitle}</div>
                      <MDBDropdownToggle
                        tag="a"
                        style={{ float: "right", background: "transparent" }}
                      >
                        <button
                          onClick={() => setOpen(!open)}
                          style={{
                            float: "right",
                            background: "transparent",
                            border: "none",
                            marginTop: "-32px",
                          }}
                        >
                          {open ? (
                            <Image
                              src={up}
                              rounded
                              style={{
                                width: "40px",
                                height: "57px",
                                borderRadius: "100%",
                                float: "right",
                                marginTop: "-21px",
                              }}
                              className=" rounded-circle"
                            />
                          ) : (
                            <Image
                              src={down}
                              rounded
                              style={{
                                width: "40px",
                                borderRadius: "100%",
                                float: "right",
                                marginTop: "-10px",
                              }}
                              className=" rounded-circle"
                            />
                          )}
                        </button>
                      </MDBDropdownToggle>

                      <MDBDropdownMenu
                        style={{
                          width: "344px",
                          marginTop: "-4px",
                          background: "#dee5ff",
                          border: "none",
                          borderRadius: "0%",
                          height: "53px",
                          paddingTop: "10px",
                          fontSize: "17px",
                        }}
                      >
                        <MDBDropdownItem>
                          <div
                            style={{
                              color: "hsl(0, 0%, 40%)",
                              display: "inline-block",
                              fontSize: 12,
                              fontStyle: "italic",
                              marginTop: "1em",
                            }}
                          >
                            <Checkbox></Checkbox>
                          </div>
                          {userData.modulename}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {userData.id}/{userData.id}
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </div>
                )}
              </div>
              <div class="row">
                <div className={sidebarOpen ? "col-lg-12" : "col-lg-12"}>
                  <div class="col-lg-6 ">
                    <div className="moduletitle">
                      <div className="">{userData.moduletitle}</div>
                    </div>
                  </div>
                  <div class="col-lg-4  ">
                    <div className="moduletitle">
                      <ReviewCard />
                    </div>
                  </div>
                  <div class="col-lg-4  ">
                    <div className="forward">
                      <img src={forward} alt="icons" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 ">
                  <div className="subheading">{userData.modulename}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <hr className="hr"></hr>
        <div className="row">
          <div className="col-lg-2">
            <div className="footertext">
              <img src={footer} style={{ width: "13rem", float: "right" }} />
            </div>
          </div>
          <div className="col-lg-2">
            <div class="ml-4 text-gray-500 text-sm">
              Copyright © 2021 Kiwify.
            </div>
          </div>
          <div className="col-lg-2">
            <div class="ml-4 text-gray-500 text-lm">MyCourses</div>
          </div>
          <div className="col-lg-2">
            <div class="ml-4 text-gray-500 text-hm">Help & Support</div>
          </div>
          <div className="col-lg-4">
            <div class="text-gray-500 text-dm">
              <img src={swap} style={{ width: "3rem", height: "30px" }} />
              <p>Switch to Producer Dashboard</p>
            </div>
          </div>
          <div className="footertext">
            <div>{/* MyCourses */}</div>
          </div>
        </div>
      </div>
    </>
  );
}
function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}
export default App;
