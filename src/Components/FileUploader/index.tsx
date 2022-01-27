import readXlsxFile from "read-excel-file";

interface Props {
  setData: (data: Record<string, any>[]) => void;
}

export const FileUploader = ({ setData }: Props) => {
  return (
    <div className="file-uploader">
      <input
        type="file"
        id="input"
        onChange={(a) => {
          console.log(a);
          const aa = a.target.files && a.target.files[0];

          if (aa) {
            readXlsxFile(aa).then((rows) => {
              // `rows` is an array of rows
              // each row being an array of cells.

              console.log(rows);
              setData(rows);
            });
          }
        }}
      />
    </div>
  );
};
