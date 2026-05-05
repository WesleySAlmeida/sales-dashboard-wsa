import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { pxToRem } from '@/utils';
const TableWrapper = styled.div `
  overflow-x: auto;
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;

    .ellipsis {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ellipsis-sm {
      width: ${pxToRem(300)};
    }

    .ellipsis-xs {
      width: ${pxToRem(150)};
    }

    th,
    td {
      height: ${pxToRem(48)};
      padding: 0 ${pxToRem(8)} 0 0;
      text-align: left;
      &:last-child {
        text-align: right;
        padding: 0;
      }
    }

    th {
      color: ${(props) => props.theme.typographies.subtitle};
      font-weight: 600;
    }

    tr {
      border-bottom: ${pxToRem(1)} solid
        ${(props) => props.theme.appDefaultStroke};
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
function CustomTable(props) {
    const { headers, rows } = props;
    return (_jsx(TableWrapper, { children: _jsxs("table", { children: [_jsx("thead", { children: _jsx("tr", { children: headers.map((header, index) => (_jsx("th", { children: header }, index))) }) }), _jsx("tbody", { children: rows.map((row, rowIndex) => (_jsx("tr", { children: row.map((cell, cellIndex) => (_jsx("td", { children: cell }, cellIndex))) }, rowIndex))) })] }) }));
}
export default CustomTable;
