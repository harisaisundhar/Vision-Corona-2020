import _ from 'lodash';
import React from 'react';
import createClass from 'create-react-class';
import { BarChart, Legend, chartConstants } from 'lucid-ui';

const data = [
  { x: 'Delhi', cases: 1707, deaths: 72, recovered: 42 },
  { x: 'Maharashtra', cases: 1707, deaths: 331, recovered: 201 },
  { x: 'Madhya Pradesh', cases: 1355, deaths: 69, recovered: 69 },
  { x: 'Telengana', cases: 791, deaths: 186, recovered: 18 },
];
const yAxisFields = ['cases', 'deaths', 'recovered'];
const palette = chartConstants.PALETTE_7;

const style = {
  paddingTop: '10rem',
};

export default createClass({
  render() {
    return (
      
      <div style={style}>
        <BarChart
          width={750}
          data={data}
          yAxisFields={yAxisFields}
          yAxisMin={0}
          yAxisTitle='Corona Count'
          palette={palette}
        />

        <Legend style={{ verticalAlign: 'top' }}>
          {_.map(yAxisFields, (field, i) => (
            <Legend.Item
              key={field}
              hasPoint
              color={palette[i % palette.length]}
            >
              {field}
            </Legend.Item>
          ))}
        </Legend>
      </div>
    );
  },
});