import ChartBar from './ChartBar';

import './chart.css';

const Chart = props => {
    const {dataPoints} = props;
    const dataPointsValue = dataPoints.map(item => item.value);
    const totalMax = Math.max(...dataPointsValue);

    const renderChart = dataArray => {
        dataArray.map(item => <ChartBar key={item.label} value={item.value} maxValue={totalMax} label={item.label} />)
    };

    return (
        <div className="chart">
            {renderChart(dataPoints)}
        </div>
    );
}

export default Chart;