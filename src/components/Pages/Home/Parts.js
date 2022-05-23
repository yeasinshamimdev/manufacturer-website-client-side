import React from 'react';
import useParts from '../../../hooks/useParts';
import Animation from '../../Shared/Animation';
import SinglePart from './SinglePart';

const Parts = () => {
    const [parts] = useParts();
    return (
        <section className='my-6 px-4 md:mt-6'>
            <h1 className='text-4xl md:text-5xl pb-2 text-center mb-4 font-bold text-cyan-400'>Our Parts</h1>
            {
                parts.length === 0 && <Animation />

            }
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    parts.map(part => <SinglePart part={part} />)
                }
            </div>
        </section>
    );
};

export default Parts;