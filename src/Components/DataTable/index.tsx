interface Props {
  data: Record<string, any>[];
}

export const DataTable = ({ data }: Props) => {
  return (
    <div className="data-table">
      {/* <table>
        <tbody>
          {data.map((row, key: number) => {
            return (
              <tr key={key}>
                {row.map((cell: any, key: number) => {
                  return <td key={key}>{String(cell)}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
};
