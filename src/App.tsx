import { useState } from "react";
import { DataTable } from "./Components/DataTable";
import { FileUploader } from "./Components/FileUploader";
import { PhotoTaker } from "./Components/PhotoTaker";
import { Speaker } from "./Components/Speaker";
import "./index.scss";

export const App = () => {
  const [data, setData] = useState<Record<string, any>[]>([]);

  return (
    <div className="app">
      <FileUploader setData={setData} />
      <PhotoTaker />
      <Speaker />
      <DataTable data={data} />
    </div>
  );
};
