import React from 'react';

const Grafico = () => {
    // Mock data for the chart
    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 500 },
        { name: 'Apr', value: 700 },
    ];

    return (
        <div>
            <h2>Chart Analysis</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}: {item.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default Grafico;