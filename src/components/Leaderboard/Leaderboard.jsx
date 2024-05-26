import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./Leaderboard.module.css"; // Import CSS module
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

const Leaderboard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get('http://your-api-url');
                setScores(response.data);
            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
            }
        };

        fetchLeaderboard();

        const intervalId = setInterval(fetchLeaderboard, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    return (
        <div className={styles.leaderboard_wrapper}>
            <div className={styles.navigation_header_wrapper}>
                <div className={styles.navigation}>
                    <Link to="../GamePage">
                        <span className={styles.back_bracket}>&lt;</span>
                    </Link>
                    <Link to="../Home">
                        <span className={styles.home}>Home</span>
                    </Link>
                </div>
                <div className={styles.header}>
                    <img src="/images/Rectangle30.png" alt="guard" className={styles.guard} />
                    <h1 className={styles.title}>Leaderboard</h1>
                    <img src="/images/Rectangle30.png" alt="guard" className={styles.guard} />
                </div>
            </div>
            <div className={styles.container}>
                <table className={styles['leaderboard-table']}>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>TIME</th>
                            <th>USERNAME</th>
                            <th>POINT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores.map((item, index) => (
                            <tr key={item._id} className={styles['leaderboard-row']}>
                                <td className={styles['leaderboard-cell']}>{index + 1}</td>
                                <td className={styles['leaderboard-cell']}>{formatDate(item.timestamp)}</td>
                                <td className={styles['leaderboard-cell']}>
                                    {item.username}
                                    {index === 0 && <img src="/images/gold.png" alt="Gold Medal" className={styles.medal} />}
                                    {index === 1 && <img src="/images/silver.png" alt="Silver Medal" className={styles.medal} />}
                                    {index === 2 && <img src="/images/bronze.png" alt="Bronze Medal" className={styles.medal} />}
                                </td>
                                <td className={styles['leaderboard-cell']}>{item.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
