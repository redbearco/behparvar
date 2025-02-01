interface VideoProps {
    src: string;
    type: string;
    width?: number;
    height?: number;
  }
  
  const VideoPlayer: React.FC<VideoProps> = ({ src, type, width = 640, height = 360 }) => {
    return (
      <video controls width={width} height={height}>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    );
  };
  
  export default VideoPlayer;
  