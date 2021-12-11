/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import "./assets/css/section5.css";
import topTracks from "./assets/data/topTracks";

export default function Section1() {
  const [topTracksList, setTopTracksList] = useState([]);

  function getMyTopTracks() {
    if (topTracks) {
      setTopTracksList(
        topTracks.items.map((item) =>
          item.external_urls.spotify.replace("https://open.spotify.com", "")
        )
      );
    } else {
      setTopTracksList(null);
    }
  }
  useEffect(() => {
    getMyTopTracks();
  }, []);

  return (
    <section className="section5">
      <h2>I Listen to songs a lottt.</h2>
      <div className="bigCard">
        <div style={{ padding: "1rem" }}>
          <h2>My Top Tracks</h2>
        </div>
        <div className="topTracks">
          {topTracksList &&
            topTracksList.map((item) => (
              <div className="track">
                <iframe
                  src={`https://open.spotify.com/embed${item}?utm_source=generator`}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  title="topTracks"
                  width="300"
                  height="250"
                  frameBorder="0"
                  allowtransparency="true"
                ></iframe>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
