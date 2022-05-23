import React, { useState } from 'react';
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: auto;
  border-color: red;
  color: 'cyan';
`;

const Loading = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("");

    return (
        <div className="sweet-loading my-6">
            <button onClick={() => setLoading(!loading)}></button>
            <input className='bg-slate-50' value={color} onChange={(input) => setColor(input.target.value)} />

            <PuffLoader className='text-slate-50' color="#00FFFF" loading={loading} css={override} size={150} />
        </div>
    );
};

export default Loading;