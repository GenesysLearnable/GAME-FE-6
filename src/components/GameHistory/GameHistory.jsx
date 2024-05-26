// src/components/GameHistory.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './GameHistory.module.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faShareAlt, faHome } from '@fortawesome/free-solid-svg-icons'; // Importing the icons

const GameHistory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [history, setHistory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGameHistory = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_API_URL);
                setHistory(response.data);
            } catch (error) {
                // setError('Error fetching game history');
                // console.error('Error fetching game history:', error);
            }
        };

        fetchGameHistory();
    }, []);

    const filteredHistory = history.filter(item => {
        const searchStr = searchTerm.toLowerCase();
        return Object.values(item).some(value =>
            value.toString().toLowerCase().includes(searchStr)
        );
    });

    return (
        <div className={styles.gameHistoryWrapper}>
            <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.navigation}>
                    <Link to="/" aria-label="Go Back">
                        <span className={styles.backBracket}>&lt;</span>
                    </Link>
                    <Link to="/" aria-label="Go to Home">
                        <span className={styles.home}>Home</span>
                    </Link>
                </div>
                <h2 className={styles.title}>Game History</h2>
            </div>
            <div className={styles.searchBox}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search Game History"
                />
            </div>
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.tableWrapper}>
                <table className={styles.gameTable}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredHistory.map((item, index) => (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.username}</td>
                                <td>{item.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.actionButtons}>
                <span className={styles.export}>
                    <FontAwesomeIcon icon={faSave} /> {/* Export Icon */}
                    Export
                </span>
                <span className={styles.share}>
                    <FontAwesomeIcon icon={faShareAlt} /> {/* Share Icon */}
                    Share
                </span>
            </div>
            </div>
        </div>
    );
};

export default GameHistory;
