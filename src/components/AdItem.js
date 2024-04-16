import React, { useState, useContext, memo } from 'react';
import { AdsContext } from '../context/AdsContext';
import './AdItem.css'; 

const AdItem = memo(({ ad }) => {
    const { dispatch } = useContext(AdsContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(ad.title);
    const [editDescription, setEditDescription] = useState(ad.description);

    const handleRemove = id => {
        dispatch({ type: 'REMOVE_AD', payload: id });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        dispatch({ type: 'EDIT_AD', payload: { id: ad.id, title: editTitle, description: editDescription } });
        setIsEditing(false);
    };

    return (
        <div className="Ad-item">
            {isEditing ? (
                <div className="ad-edit-form">
                    <div className="title-label"><h4>Заголовок:</h4></div>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <div className="description-label"><h4>Описание:</h4></div>
                    <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Сохранить</button>
                </div>
            ) : (
                <>
                    <div className="title-label"><h4>Заголовок:</h4></div>
                    <p>{ad.title}</p>
                    <div className="description-label"><h4>Описание:</h4></div>
                    <p>{ad.description}</p>
                    <button onClick={() => handleRemove(ad.id)}>Удалить</button>
                    <button onClick={handleEdit}>Редактировать</button>
                </>
            )}
        </div>
    );
});

export default AdItem;
