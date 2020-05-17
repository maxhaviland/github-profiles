import { css } from "@emotion/core";
import React from 'react';
import ClipLoader from "react-spinners/GridLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Spinner({ isLoading }) {
  return <ClipLoader size={25} css={override} loading={isLoading} />
}

export default Spinner;