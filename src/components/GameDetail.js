import React from "react";

// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

// REDUX
import { useSelector } from "react-redux";

// REACT ROUTER
import { useHistory } from "react-router-dom";

// UTIL
import { smallerImage } from "../util";

const GameDetail = ({ pathID }) => {
  // eslint-disable-next-line
  const numberPathID = parseInt(pathID);
  const history = useHistory();
  // EXIT DETAIL
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // DATA
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={smallerImage(game.background_image, 1280)}
                alt="screenshot"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screenshots.results.map((image) => (
                <img
                  src={smallerImage(image.image, 1280)}
                  key={image.id}
                  alt="screenshot"
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 154, 21);
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 70%;
    padding: 0.1rem 0rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  img {
    margin-left: 3rem;
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 5rem;
`;

const Gallery = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GameDetail;
