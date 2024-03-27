export default function Video() {

  return (
    <div className="video-wrap">
      <video autoPlay loop muted className="custom-video" poster="">
        <source src="/video/production_ID_3769033.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
