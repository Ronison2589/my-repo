import React from 'react';

const Historico = () => {
    const operations = [
        { id: 1, operation: 'Add', timestamp: '2026-03-22 16:00:00' },
        { id: 2, operation: 'Subtract', timestamp: '2026-03-22 16:01:00' },
        { id: 3, operation: 'Multiply', timestamp: '2026-03-22 16:02:00' },
        { id: 4, operation: 'Divide', timestamp: '2026-03-22 16:03:00' }
    ];

    return (
        <div>
            <h1>Operation History</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Operation</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {operations.map(op => (
                        <tr key={op.id}>
                            <td>{op.id}</td>
                            <td>{op.operation}</td>
                            <td>{op.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Historico;