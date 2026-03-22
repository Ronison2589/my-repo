import React, { useState } from 'react';

const Configuracoes = () => {
    const [settings, setSettings] = useState({
        option1: '',
        option2: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings({...settings, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send settings to server)
        console.log('Settings submitted:', settings);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Option 1:
                <input type="text" name="option1" value={settings.option1} onChange={handleChange} />
            </label>
            <br />
            <label>
                Option 2:
                <input type="text" name="option2" value={settings.option2} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Save Settings</button>
        </form>
    );
};

export default Configuracoes;