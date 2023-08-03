import axios from "axios";
import React, { useState, useEffect } from "react";

// Import hooks provided by react-redux
import { useSelector, useDispatch } from "react-redux";

// Import all actions and bind them
import { listCharacters } from "../../state/actions/characterActions";

import Loader from "../Loader/loader";

const BasicDetails = () => {
  const charactersData = useSelector(
    (state) => state?.characters?.charactersData
  );
  const dispatch = useDispatch();

  const fetchCharacters = async () => {
    await axios.get("http://localhost:3000/character").then((res) => {
      dispatch(listCharacters(res.data));
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <h1>Characters:</h1>
      {!charactersData && charactersData == undefined ? (
        <>
          <Loader />
        </>
      ) : (
        charactersData.map((characterData) => {
          return (
            <>
              <h3>Name: {characterData.name}</h3>
            </>
          );
        })
      )}
    </>
  );
};

export default BasicDetails;
