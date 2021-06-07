/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';

const Engage = () => {
  const [colorImg, setColorImage] = useState();

  useEffect(() => {
    const fetchColorImage = async () => {
      const res = await fetch(`/api/engage`);
      if (res.ok) {
        const json = await res.json();
        setColorImage(json);
      } else {
        console.log('something broke', res.statusText);
      }
    };

    fetchColorImage();
  }, []);

  return <>{colorImg && (
    <img
      id="image"
      alt="Logo"
      title="So many colors!"
      width="256px"
      height="128px"
      src={colorImg}
    />
  )}
  </>
};

export default Engage;
