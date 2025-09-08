import "./Profile.css";

import { uploads } from "../../utils/config";

// components
import Message from "../../components/Message/Message";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

// Hooks
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// redux


export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
