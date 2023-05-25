import Video from "./Video";

export default function VideoList({ videos }) {
  return (
    <div>
      {videos.map(video => (
        <div>
          <Video key={video.title} title={video.title} url={video.url} /> <br />
        </div>
      ))}
    </div>
  )
}
