import React, { useEffect, useState } from "react";
import javascriptBarcodeReader from "javascript-barcode-reader";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: { exact: "environment" },
};

export const PhotoTaker = () => {
  const [data1, setData1] = useState("Not Found");
  const [data2, setData2] = useState("Not Found");

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc =
      // @ts-expect-error
      webcamRef.current && (webcamRef.current.getScreenshot() as string);

    setData1(String(imageSrc));
  }, [webcamRef]);

  useEffect(() => {
    javascriptBarcodeReader({
      /* Image file Path || {data: Uint8ClampedArray, width, height} || HTML5 Canvas ImageData */
      image: data1,
      barcode: "code-93",
      // barcodeType: 'industrial',
      options: {
        // useAdaptiveThreshold: true // for images with sahded portions
        // singlePass: true
      },
    })
      .then((code) => {
        setData1(code);
      })
      .catch((err) => {
        setData2(err);
      });
  }, []);

  return (
    <div className="photo-taker">
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      <>
        <p>{data1}</p>
        <p>{data2}</p>
      </>
    </div>
  );
};
