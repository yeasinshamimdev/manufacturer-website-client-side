import React from 'react';
import arryAnswer from '../../../img/array-answer.png';

const Blogs = () => {

    return (
        <div className='md:px-10'>
            <h1 className='text-2xl md:text-4xl text-center my-4'>This is blogs</h1>
            <div className='md:w-3/4 mx-auto'>
                <div className='md:w-3/4 mx-auto'>
                    <div className='p-2'>
                        <h1 className='text-xl font-bold mb-4 text-center'>How will you improve the performance of a React Application?</h1>
                        <div className='border-2 mr-2 md:w-full p-1 rounded mb-2'>
                            <ul className=' mr-2 w-full p-1 rounded mb-2'>
                                <li className='mb-2'>1. Keeping component state local where necessary</li>
                                <li className='mb-2'>2. Memoizing React components to prevent unnecessary re-renders. </li>
                                <li className='mb-2'>3. Lazy loading images in React. </li>
                                <li className='mb-2'>4. Code-splitting in React using dynamic import. </li>
                                <li >5. Windowing or list virtualization in React. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='md:w-3/4 mx-auto'>
                    <div className='p-2'>
                        <h1 className='text-xl font-bold mb-4 text-center'>What are the different ways to manage a state in a React application?</h1>
                        <div className='border-2 mr-2 md:w-full p-1 rounded mb-2'>
                            <ul className=' mr-2 w-full p-1 rounded mb-2'>
                                <li className='mb-2'>1. Using Redux to handle React state.</li>
                                <li className='mb-2'>2.  Using React useState hooks to handle React state.</li>
                                <li className='mb-2'>3. Using Recoil to handle React state.  </li>
                                <li className='mb-2'>4. Using Rematch to handle React state.</li>
                                <li >5. Using Jotai to handle React state.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='md:w-3/4 mx-auto'>
                    <div className='p-2'>
                        <h1 className='text-xl font-bold mb-4 text-center'>How does prototypical inheritance work?</h1>
                        <div className='border-2 mr-2 md:w-full p-1 rounded mb-2'>
                            <p className='p-2 text-justify'>Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>

                        </div>
                    </div>
                </div>

                <div className='md:w-3/4 mx-auto'>
                    <div className='p-2'>
                        <h1 className='text-xl font-bold mb-4 text-center'>What is a unit test? Why should write unit tests?</h1>
                        <div className='border-2 mr-2 md:w-full p-1 rounded mb-2'>
                            <p className='p-2 text-justify'>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application known as the "unit" meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. In object-oriented programming, a unit is often an entire interface, such as a class, or an individual method. By writing tests first for the smallest testable units, then the compound behaviors between those, one can build up comprehensive tests for complex applications.</p>

                        </div>
                    </div>
                </div>
                <div className='md:w-3/4 mx-auto'>
                    <div className='p-2'>
                        <h1 className='text-xl font-bold mb-4 text-center'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                        <div className='border-2 mr-2 md:w-full p-1 rounded mb-2'>
                            <p className='p-2 text-justify'>
                                <img src={arryAnswer} alt="" />
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;