import React from 'react';

const Animation = () => {
    return (
        <div className='md:flex md:px-1'>
            <div className="border border-blue-300 md:mr-4 mb-4 shadow rounded-md p-4 w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-20 w-10"></div>
                    <div className="flex-1 space-y-6 py-1 h-32">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-blue-300 mb-4 md:mr-4 shadow rounded-md p-4 w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-20 w-10"></div>
                    <div className="flex-1 space-y-6 py-1 h-32">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-blue-300 mb-4 shadow md:mr-4 rounded-md p-4 w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-20 w-10"></div>
                    <div className="flex-1 space-y-6 py-1 h-32">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Animation;