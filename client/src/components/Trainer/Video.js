import React from 'react'

const Video = ({ title, url }) => {
  return (
    <div>
      <div className="video-title text-white text-3xl font-semibold mt-2">{title}</div>
      <iframe src={url} className='w-full h-96'
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </div>
  )
}

export default Video



