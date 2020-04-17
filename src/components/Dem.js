import * as React from 'react';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { EventTracker, HoverState, SelectionState } from '@devexpress/dx-react-chart';

const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.920 },
];

const compare = (
  { series, point }, { series: targetSeries, point: targetPoint },
) => series === targetSeries && point === targetPoint;

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
      selection: [],
      hover: undefined,
    };

    this.click = ({ targets }) => {
      const target = targets[0];
      if (target) {
        this.setState(({ selection }) => ({
          selection: selection[0] && compare(selection[0], target) ? [] : [target],
        }));
      }
    };
    this.changeHover = hover => this.setState({ hover });
  }

  render() {
    const { data: chartData, selection , hover } = this.state;

    return (

      <div>
        <span>
          Selected value:
          {' '}
          {selection.length ? data[selection[0].point].population : undefined}
        </span>
        <div className="card">
          <Chart
            data={chartData}
          >
            <ArgumentAxis />
            <ValueAxis />

            <BarSeries
              valueField="population"
              argumentField="year"
            />
            <EventTracker onClick={this.click} />
            <SelectionState selection={selection} />
            <HoverState hover={hover} onHoverChange={this.changeHover} />
          </Chart>
        </div>
      </div>
    );
  }
}
