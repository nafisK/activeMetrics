import React, { useState } from 'react'
import VideoList from './VideoList'

const upperVideos = [
    {
        title: 'How to: Barbell Bench Press',
        url: 'https://www.youtube.com/embed/rT7DgCr-3pg',
    },
    {
        title: 'How to: Dumbell Incline Press',
        url: 'https://youtube.com/embed/hChjZQhX1Ls',
    },
    {
        title: 'The Perfect Push Up',
        url: 'https://www.youtube.com/embed/IODxDxX7oi4',
    },
    {
        title: 'The Perfect Pull Up',
        url: 'https://www.youtube.com/embed/eGo4IYlbE5g',
    },
    {
        title: 'How to: Dumbell Shoulder Press',
        url: 'https://www.youtube.com/embed/qEwKCR5JCog',
    },
]

const lowerVideos = [
    {
        title: 'How to PROPERLY Deadlift for Growth',
        url: 'https://youtube.com/embed/XxWcirHIwVo',
    },
    {
        title: 'How to: Seated Leg Press',
        url: 'https://youtube.com/embed/IZxyjW7MPJQ',
    },
    {
        title: 'How to PROPERLY Squat for Growth',
        url: 'https://youtube.com/embed/gcNh17Ckjgg',
    },
    {
        title: 'Lunges for Beginners',
        url: 'https://youtube.com/embed/ugW5I-a5A-Q',
    },
    {
        title: 'Calf Raises: How to Perform Them Correctly',
        url: 'https://youtube.com/embed/ommnfVcLWxQ',
    },
]
const cardioVideos = [
    {
        title: 'How to Properly Use the Stairmaster',
        url: 'https://youtube.com/embed/xSB39wbMz4w',
    },
    {
        title: 'The 5 Rules of Fat Loss Cardio',
        url: 'https://youtube.com/embed/VNgfAzTO3xU',
    },
    {
        title: 'How to STOP Cardio From Killing Your Gains',
        url: 'https://youtube.com/embed/sK6vDY66w0U',
    },
    {
        title: 'The Best Science-Based Cardio Routine',
        url: 'https://youtube.com/embed/uBVREI0eJPI',
    },
    {
        title: 'How to Increase My Endurance and Stamina',
        url: 'https://youtube.com/embed/suUdp5OG7gs',
    },
]

const videoCollection = {
    upper: upperVideos,
    lower: lowerVideos,
    cardio: cardioVideos,
}

const VideoLibrary = () => {
    const [selectedButton, setSelectedButton] = useState('upper')
    const handleButtonClick = buttonId => {
        setSelectedButton(buttonId)
    }

    return (
        <div className='w-7/12 video-library'>
            <div className='flex justify-around mt-6 mb-6 vid-library-btns'>
                <button
                    className={`${
                        selectedButton === 'upper'
                            ? 'border-4 border-cyan-600'
                            : ''
                    } px-4 py-2 text-white rounded-md w-32 h-32 rotate-45 bg-cyan-500`}
                    onClick={() => handleButtonClick('upper')}
                >
                    <div className='-rotate-45 btn-text'>Upper</div>
                </button>
                <button
                    className={`${
                        selectedButton === 'lower'
                            ? 'border-4 border-cyan-600'
                            : ''
                    } px-4 py-2 text-white rounded-md w-32 h-32 rotate-45 bg-cyan-500`}
                    onClick={() => handleButtonClick('lower')}
                >
                    <div className='-rotate-45 btn-text'>Lower</div>
                </button>
                <button
                    className={`${
                        selectedButton === 'cardio'
                            ? 'border-4 border-cyan-600'
                            : ''
                    } px-4 py-2 text-white rounded-md w-32 h-32 rotate-45 bg-cyan-500`}
                    onClick={() => handleButtonClick('cardio')}
                >
                    <div className='-rotate-45 btn-text'>Cardio</div>
                </button>
            </div>
            <br />
            <VideoList
                key={selectedButton}
                videos={videoCollection[selectedButton]}
            />
        </div>
    )
}

export default VideoLibrary
