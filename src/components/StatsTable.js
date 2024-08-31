import React, { useState, useEffect } from 'react';

const StatsTable = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8765');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setStats(data);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Flow and Port Statistics</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Datapath</th>
            <th>Port</th>
            <th>Rx Packets</th>
            <th>Rx Bytes</th>
            <th>Rx Errors</th>
            <th>Tx Packets</th>
            <th>Tx Bytes</th>
            <th>Tx Errors</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat, index) => (
            <tr key={index}>
              <td>{stat.datapath}</td>
              <td>{stat.port}</td>
              <td>{stat.rx_pkts}</td>
              <td>{stat.rx_bytes}</td>
              <td>{stat.rx_error}</td>
              <td>{stat.tx_pkts}</td>
              <td>{stat.tx_bytes}</td>
              <td>{stat.tx_error}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
