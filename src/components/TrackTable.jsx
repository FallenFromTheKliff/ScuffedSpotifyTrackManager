import { tableFeatures, useTable } from '@tanstack/react-table';

export default function TrackTable(props) {
  const columns = [
    { header: "Title", accessorKey: "title" },
    { header: "Genre", accessorKey: "genre" },
    { header: "Artist", accessorKey: "artist" },
    { header: "Rating / BPM", accessorKey: "rating" },
    { header: "Label", accessorKey: "label" },
    { header: "Role", accessorKey: "role" }
  ]

  const features = tableFeatures({});
  const table = useTable({
    features: features,
    data: props.tracks,
    columns: columns
  });

  const headers = [];
  const headerGroups = table.getHeaderGroups();

  const rows = [];
  const currentRows = table.getRowModel().rows;

  for (let i = 0; i < headerGroups.length; i++) {
    const headerGroup = headerGroups[i];

    for (let j = 0; j < headerGroup.headers.length; j++) {
      const header = headerGroup.headers[j];

      headers.push(
        <th key={header.id} className="border border-white px-4 py-2">
          {header.column.columnDef.header}
        </th>
      );
    }
  }
  for (let i = 0; i < currentRows.length; i++) {
    const row = currentRows[i];
    const cells = row.getAllCells();
    const rowCells = [];
    let rowClass = "hover:bg-green-500";

    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];

      rowCells.push(
        <td key={cell.id} className="border border-white px-3 py-2">
          {cell.getValue()}
        </td>
      );
    }

    if (props.creatorHighlight && row.original.role === "Creator") {
      rowClass = "bg-green";
    }

    rows.push(
      <tr
        key={row.id}
        onClick={() => props.onSelectTrack(row.original.title)}
        className={rowClass}
      >
        {rowCells}
      </tr>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Track Registry</h2>
      <table className="w-full border-collapse border border-white bg-white">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}