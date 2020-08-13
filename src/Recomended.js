import React from "react";
import "./Recomended.css";
import VideoCard from "./VideoCard.js";
import ResponsivePlayer from "./VideoPlayer";

function Recomended({
  selectedvideo,
  setSelectedvideo,
  recomended_selected,
  setRecomended_selected,
  darkmode,
  clicked
}) {
  return (
    <div
      className={`videos ${clicked === true && "videos_clicked"} ${
        darkmode === true && "darkmode"
      }`}
    >
      <h2>Recommended</h2>
      <div className="video_player">
        {recomended_selected === true && (
          <ResponsivePlayer selectedvideo={selectedvideo} />
        )}
      </div>
      <div className="recommended_content">
        <VideoCard
          setRecomended_selected={setRecomended_selected}
          setSelectedvideo={setSelectedvideo}
          videoId="gRyPjRrjS34"
          darkmode={darkmode}
          image="https://vignette.wikia.nocookie.net/pewdiepie/images/e/e5/Maxresdefault.jpg/revision/latest/scale-to-width-down/340?cb=20190107233635"
          Title="A Funny Montage"
          ChannelName="PewDiePie"
          Text="7 Years ago . 87M views"
          Channelimage="https://yt3.ggpht.com/-rJq9gk1QIis/AAAAAAAAAAI/AAAAAAAAAAA/Kx4wkvKOfxY/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
        />
        <VideoCard
          setRecomended_selected={setRecomended_selected}
          setSelectedvideo={setSelectedvideo}
          videoId="77XmRDtOL7c"
          darkmode={darkmode}
          image="https://i.ytimg.com/vi/77XmRDtOL7c/mqdefault.jpg"
          Title="5 uses for cloud functions | Get to know cloud Firestore"
          ChannelName="Firebase"
          Text="3 days ago . 6.6K views"
          Channelimage="https://yt3.ggpht.com/a/AATXAJy6miqWZBH_MHS3hyOTL5fg_SmYxu5bzt1myibk6w=s176-c-k-c0x00ffffff-no-rj-mo"
        />
        <VideoCard
          setRecomended_selected={setRecomended_selected}
          setSelectedvideo={setSelectedvideo}
          videoId="OFHAIpw2oZI"
          darkmode={darkmode}
          image="https://i.ytimg.com/vi/OFHAIpw2oZI/mqdefault.jpg"
          Title="React vs Vanilla Javascript | Learn React for beginers Part 1"
          ChannelName="Dev Ed"
          Text="2 days ago . 14K views"
          Channelimage="https://yt3.ggpht.com/a/AATXAJzj9Wp5NIzuIcB3DhQ5jgunW5b98DCWGeSv2TZptQ=s176-c-k-c0x00ffffff-no-rj-mo"
        />
        <VideoCard
          setRecomended_selected={setRecomended_selected}
          setSelectedvideo={setSelectedvideo}
          videoId="ynDyv6LDRTM"
          darkmode={darkmode}
          image="https://i.ytimg.com/vi/ynDyv6LDRTM/mqdefault.jpg"
          Title="BUILD REAL MUSCLE AT HOME (NO GYM NEEDED)"
          ChannelName="Simeon Panda"
          Text="1 year ago . 5.8M views"
          Channelimage="https://yt3.ggpht.com/a/AATXAJyOHCIHjnzvghOK9FkfFU2xchaFo9978vfeFju25g=s176-c-k-c0x00ffffff-no-rj-mo"
        />
        <VideoCard
          setRecomended_selected={setRecomended_selected}
          setSelectedvideo={setSelectedvideo}
          videoId="cBqNa28PC8k"
          darkmode={darkmode}
          image="https://i.ytimg.com/vi/cBqNa28PC8k/mqdefault.jpg"
          Title="Tech Talks #1205 - COVID 19 vaccine, 5g Phone under 10k, Apple A14, Note 20 mystic blue"
          ChannelName="Tecnical Guruji"
          Text="1 month ago . 87M views"
          Channelimage="https://yt3.ggpht.com/-_ugo2kisZDQ/AAAAAAAAAAI/AAAAAAAAAAA/B1h15AngyW8/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
        />
        <VideoCard
          setRecomended_selected={setRecomended_selected}
          setSelectedvideo={setSelectedvideo}
          videoId="Ml9v3wHLuWI"
          darkmode={darkmode}
          image="https://i.ytimg.com/vi/Ml9v3wHLuWI/mqdefault.jpg"
          Title="Will Smith tries Online dating"
          ChannelName="Will smith"
          Text="2 years ago . 6.6K views"
          Channelimage="https://yt3.ggpht.com/-gUSim0HgTog/AAAAAAAAAAI/AAAAAAAAAAA/bZti__TIPcQ/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
        />
        <VideoCard
          setRecomended_selected={setRecomended_selected}
          setSelectedvideo={setSelectedvideo}
          videoId="0ADQauuOJto"
          darkmode={darkmode}
          image="https://i.ytimg.com/vi/0ADQauuOJto/mqdefault.jpg"
          Title="Impossible Ping Pong trick shots"
          ChannelName="Dude Perfect"
          Text="1 month ago . 14K views"
          Channelimage="https://yt3.ggpht.com/-256o76I3YUo/AAAAAAAAAAI/AAAAAAAAAAA/cESWDt8qKyc/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
        />
        <VideoCard
          setRecomended_selected={setRecomended_selected}
          setSelectedvideo={setSelectedvideo}
          videoId="7zwBeUOCXJU"
          darkmode={darkmode}
          image="https://i.ytimg.com/vi/7zwBeUOCXJU/mqdefault.jpg"
          Title="28 amazingly sweet Dessert Ideas For The Whole Family"
          ChannelName="%-Minute Crafts"
          Text="1 month ago . 5.8M views"
          Channelimage="https://yt3.ggpht.com/-xIpCEoEWz-U/AAAAAAAAAAI/AAAAAAAAAAA/583J6o-KtGc/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
        />
      </div>
    </div>
  );
}

export default Recomended;
