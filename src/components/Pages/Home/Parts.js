import React from 'react';
import useParts from '../../../hooks/useParts';
import SinglePart from './SinglePart';

const Parts = () => {
    const [parts] = useParts();
    return (
        <section>
            <div>
                {
                    parts.map(part => <SinglePart part={part} />)
                }
            </div>
        </section>
    );
};

export default Parts;