import { Dict, TableProps } from "../types";

const Table = ({ columns, data }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.name}>{column.description}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: Dict) => {
          // todo: fix warnings
          return (
            <tr key={item.id}>
              {columns.map((column) => (
                
                <td width={column.width} key={`column_${column.name}`} className={column.name=="name"?"nameItem":""}>{item[column.name]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
