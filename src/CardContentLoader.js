import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = () => (
  <ContentLoader
    height={82}
    width="100%"
    backgroundColor="#6c757d"
    backgroundOpacity="0.2"
  >
    <rect x="80%" y="14" rx="5" ry="5" width="20%" height="14" />
    <rect x="15" y="12" rx="5" ry="5" width="50%" height="21" />
  </ContentLoader>
);

export default CardLoader;
