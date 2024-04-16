import React, { useState, useContext } from 'react';
import { AdsContext } from '../context/AdsContext';

const AddAdForm = () => {
    const { dispatch } = useContext(AdsContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addAd = () => {
        if (title && description) {
            const newAd = {
                id: Math.random().toString(36).substring(7), // Генерация случайного ID
                title,
                description
            };
            dispatch({ type: 'ADD_AD', payload: newAd });
            setTitle('');
            setDescription('');
        }
    };

    return (
        <div className="form">
            <input
                type="text"
                placeholder="Заголовок объявления"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={addAd}>Добавить объявление</button>
        </div>
    );
};

export default AddAdForm;
