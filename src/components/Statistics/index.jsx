import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticsItem from './statisticsItem'


function Statistics({ title, stats }) {
    return (
    <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>

        <ul className={styles.statList}>
            {stats.map(({ id, label, percentage }) => {
                return (
                    <StatisticsItem key={id} label={label} percentage={percentage} />
                    )
            })}
        </ul>
    </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape ({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
),
};

export default Statistics;