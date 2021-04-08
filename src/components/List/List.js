import React from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style/index.css';
import './List.css';

const List = ({ loading, error, data }) => {
  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>{error}</h3>;
  return (
    <div className="list">
      {data.map((item) => (
        <Card
          key={item.node_id}
          title={item.name}
          bordered={false}
          className="card"
        >
          <p>{item.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default List;
