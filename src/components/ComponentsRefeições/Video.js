import React from "react";

function Video({strYoutube}) {
  const link = strYoutube.split(/v=/i);
  console.log(strYoutube, link);
    return (
        <iframe data-testid="video" width="748" height="421" src={ `https://www.youtube.com/embed/${link[1]}` } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    );
}

export default Video;