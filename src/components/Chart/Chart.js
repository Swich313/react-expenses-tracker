import ChartBar from './ChartBar';

import './chart.css';

const Chart = props => {
    const {dataPoints} = props;
    const dataPointsValue = dataPoints.map(item => item.value);
    const totalMaxValue = Math.max(...dataPointsValue);

    const renderChart = (dataArray, maxValue) => {
        return dataArray.map(item => {
            return (
                <ChartBar key={item.label} value={item.value} maxValue={maxValue} label={item.label} />
            )
        })
    };

    return (
        <div className="chart">
            {renderChart(dataPoints, totalMaxValue)}
        </div>
    );
}

export default Chart;