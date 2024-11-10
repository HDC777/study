import React from 'react';
import { useTable } from 'react-table';

const MainPage = () => {
  // 샘플 데이터
  const data = React.useMemo(
    () => [
      {
        name: 'John Doe',
        age: 28,
        school: 'XYZ University',
        email: 'johndoe@example.com',
      },
      {
        name: 'Jane Smith',
        age: 22,
        school: 'ABC College',
        email: 'janesmith@example.com',
      },
      {
        name: 'Sam Wilson',
        age: 30,
        school: 'LMN Institute',
        email: 'samwilson@example.com',
      },
      // 더 많은 데이터 추가 가능
    ],
    []
  );

  // 테이블 헤더 정의
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // 데이터 객체에서 어떤 필드를 사용할지 지정
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'School',
        accessor: 'school',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
    ],
    []
  );

  // useTable 훅을 사용하여 테이블 설정
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <div>
      <h1>사용자 데이터</h1>
      <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={{ padding: '10px', border: '1px solid black' }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} style={{ padding: '10px', border: '1px solid black' }}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;