import { useEffect, useState } from "react";
import BarCodeScanner from "barcode-react-scanner";

export const PhotoTaker = () => {
  const [data1, setData1] = useState("Not Found");
  const [data2, setData2] = useState("Not Found");

  const handleScan = (data: any) => {
    setData1(data);
  };

  const handleClick = async () => {
    // scanner = await BarcodeScanner.createInstance();
    // scanner.onFrameRead = (results: TextResult[]) => {
    //   if (results.length > 0) console.log(results);
    // };
    // scanner.onUnduplicatedRead = (txt: string, result: TextResult) => {
    //   alert(txt);
    // };
    // await scanner.show();
  };

  return (
    <div className="photo-taker">
      <button id="btn-show-scanner" onClick={handleClick}>
        Show Barcode Scanner
      </button>
      <>
        {/* <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            // @ts-expect-error etcetc
            if (result) setData(result?.text);
            else setData("Not Found");
          }}
        /> */}
        <BarCodeScanner
          onUpdate={(err, resp): void => {
            if (resp) {
              setData1(resp.getText());
            }
          }}
        />
        <p>{data1}</p>
        <p>{data2}</p>
      </>
    </div>
  );
};
