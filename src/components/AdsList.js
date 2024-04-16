import React, { useContext, memo } from 'react';
import { AdsContext } from '../context/AdsContext';
import AdItem from './AdItem';

const AdsList = () => {
    const { ads } = useContext(AdsContext);

    return (
        <div className="Ad-list">
            {ads.map(ad => (
                <AdItem
                    key={ad.id}
                    ad={ad}
                />
            ))}
        </div>
    );
};

export default memo(AdsList);
