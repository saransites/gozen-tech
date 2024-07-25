import React from 'react';

export const LoadingComponents = () => {
    return (
        <div className="flex p-4 px-10 justify-center items-center h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
        </div>
    );
};

export const SuccessComponents = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-green-700">This is Success Components</h1>
        </div>
    );
};

export const ErrorComponents = () => {
    return (
        <div>
            <h1 className="text-2xl text-red-800 font-bold">Error Components</h1>
        </div>
    );
};
