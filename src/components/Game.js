import React from "react";

// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image, id }) => {
  return (
    <StyledGame key={id}>
      <h3>{name}</h3>
      <p>Released Date: {released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export default Game;