import React from 'react'

function LoadingPage() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <div style={{ "borderTopColor": "transparent" }}
                className="w-20 h-20 border-4 border-blue-400 border-dashed rounded-full animate-spin">
            </div>
            <p className="text-lg mt-4">Loading..</p>
        </div>
    )
}

export default LoadingPage
