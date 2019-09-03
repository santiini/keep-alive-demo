import React, {FC, useState} from 'react'
import { RouteComponentProps } from 'react-router';
import {Table, Input} from 'antd'
import { Link } from 'react-router-dom';
// import { useKeepAliveEffect } from 'react-keep-alive';

const columns = [
  {title: 'id', dataIndex: 'id', render: (id: string) => <Link to="/list/detail">{id}</Link>},
  {title: 'name', dataIndex: 'name'},
  {title: 'weight', dataIndex: 'weight', editable: true},
  {title: 'operation', dataIndex: 'operation'},
];

const list = [
  {id: 1, name: 'test11', weight: 10},
  {id: 2, name: 'test22', weight: 10},
  {id: 3, name: 'test33', weight: 10},
  {id: 4, name: 'test44', weight: 10},
  {id: 5, name: 'test44', weight: 10},
  {id: 6, name: 'test44', weight: 10},
  {id: 7, name: 'test44', weight: 10},
  {id: 8, name: 'test44', weight: 10},
  {id: 9, name: 'test44', weight: 10},
  {id: 10, name: 'test44', weight: 10},
  {id: 11, name: 'test44', weight: 10},
  {id: 12, name: 'test44', weight: 10},
  {id: 13, name: 'test44', weight: 10},
  {id: 14, name: 'test44', weight: 10},
  {id: 15, name: 'test44', weight: 10},
  {id: 16, name: 'test44', weight: 10},
  {id: 17, name: 'test44', weight: 10},
  {id: 18, name: 'test44', weight: 10},
  {id: 19, name: 'test44', weight: 10},
  {id: 20, name: 'test44', weight: 10},
  {id: 21, name: 'test44', weight: 10},
  {id: 22, name: 'test44', weight: 10},
  {id: 23, name: 'test44', weight: 10},
];

const TableList: FC<RouteComponentProps> = props => {
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  // useKeepAliveEffect(() => {
  //   console.log('activated');

  //   return () => {
  //     console.log('unactivated');
  //   };
  // });
  return (
    <div>
      <Input value={value} onChange={handleChange} />
      <Table
        rowKey="id"
        columns={columns}
        dataSource={list}
        pagination={{pageSize: 20}}
      />
    </div>
  )
}

export default TableList