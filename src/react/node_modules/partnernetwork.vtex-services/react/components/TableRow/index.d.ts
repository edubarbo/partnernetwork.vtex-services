import React from 'react';
interface TableRowProps extends Omit<IClientItem, 'imgURL'> {
    imgURL?: string;
    showEmptyImage?: boolean;
    handler: (id: string) => void;
}
declare const TableRow: React.FC<TableRowProps>;
export default TableRow;
