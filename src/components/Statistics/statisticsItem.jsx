import styles from '../Statistics/Statistics.module.css';    
    
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    };


function StatisticsItem () 
    {
    return (
        <li className={styles.item} style={{backgroundColor: getRandomHexColor() }}>
            <span className={styles.label}>.docx</span>
            <span className={styles.percentage}>4%</span>
        </li>
    )};


    export default StatisticsItem;