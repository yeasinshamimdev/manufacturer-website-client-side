import React from 'react';
import { faDollarSign, faFlag, faPeopleGroup, faStar, faTools, faTvAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bgImg from '../../../img/footer.png';

const BusinessSummary = () => {
    return (
        <section className='mt-20 bg-cover px-4' style={{ backgroundImage: `url(${bgImg})` }}>
            <h1 className='text-2xl md:text-4xl font-bold text-center text-cyan-400'>MILLIONS BUSINESS TRUST US</h1>
            <h5 className='uppercase text-center text-sm md:text-md font-semibold mt-2'>Try to understand users expectation</h5>
            <div className='md:px-10 grid grid-cols-1 gap-6 mx-auto md:flex md:justify-between md:align-middle my-16'>
                <div className='mx-auto'>
                    <FontAwesomeIcon className='text-7xl text-cyan-400 ml-2 text-center' icon={faPeopleGroup}></FontAwesomeIcon>
                    <div>
                        <h1 className='font-mono text-6xl text-left mt-4'>100+</h1>
                        <h1 className='text-cyan-400 text-xl text-center'>Customers</h1>
                    </div>
                </div>
                <div className='mx-auto'>
                    <FontAwesomeIcon className='text-7xl text-cyan-400 ml-8 text-center' icon={faDollarSign}></FontAwesomeIcon>
                    <div>
                        <h1 className='font-mono text-6xl text-left mt-4'>120M+</h1>
                        <h1 className='text-cyan-400 text-xl text-center'>Annual Revenue</h1>
                    </div>
                </div>
                <div className='mx-auto'>
                    <FontAwesomeIcon className='text-7xl text-cyan-400 ml-2 text-center' icon={faStar}></FontAwesomeIcon>
                    <div>
                        <h1 className='font-mono text-6xl text-left mt-4'>33K+</h1>
                        <h1 className='text-cyan-400 text-xl text-center'> Reviews</h1>
                    </div>
                </div>
                <div className='mx-auto '>
                    <FontAwesomeIcon className='text-7xl text-cyan-400 ml-2 text-center' icon={faTools}></FontAwesomeIcon>
                    <div>
                        <h1 className='font-mono text-6xl text-left mt-4'>50+</h1>
                        <h1 className='text-cyan-400 text-xl text-center'>Parts</h1>
                    </div>
                </div>
            </div>
            <div className='shadow-2xl bg-white py-6 px-4 md:mx-24 mt-8 mb-6 rounded block md:flex justify-between'>
                <div className='flex-1'>
                    <h1 className='text-cyan-400 text-2xl font-bold mb-2'>Have you any question about us or get a product request ?</h1>
                    <p className='font-semibold'>Don't hesitate to contact us</p>
                </div>
                <div className='flex-1 flex flex-col md:flex-row mt-6 md:ml-20'>
                    <button className='btn btn-primary text-white mb-2'>Request For Quote</button>
                    <button className='btn ml-4'>Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;