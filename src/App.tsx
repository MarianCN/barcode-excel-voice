import { DataTable } from "./Components/DataTable";
import { FileUploader } from "./Components/FileUploader";
import { PhotoTaker } from "./Components/PhotoTaker";
import { Speaker } from "./Components/Speaker";
import "./index.scss";

export const App = () => {
  return (
    <div className="app">
      <FileUploader />
      <PhotoTaker />
      <Speaker />
      <DataTable />
    </div>
  );
};
