import React from "react";

// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

// REACT ROUTER
import { Link } from "react-router-dom";

// UTIL
import { smallerImage } from "../util";

const Game = ({ name, released, image, id }) => {
  // LOAD DETAILS
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
        <p>Release Date: {released}</p>
        <img src={smallerImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export default Game;
