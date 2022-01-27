import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const PhotoTaker = () => {
  const [data, setData] = useState("Not Found");

  return (
    <div className="photo-taker">
      <>
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            // @ts-expect-error etcetc
            if (result) setData(result?.text);
            else setData("Not Found");
          }}
        />
        <p>{data}</p>
      </>
    </div>
  );
};
