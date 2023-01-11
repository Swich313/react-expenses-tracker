import './chartBar.css';

const chartBar = props => {
    const {label, value, maxValue} = props;

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill"></div>
            </div>
            <div className="chart-bar__label"></div>
        </div>
    );
}

export default chartBar;