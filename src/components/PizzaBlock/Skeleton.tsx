import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="39" y="386" rx="9" ry="9" width="74" height="30" />
    <rect x="169" y="381" rx="14" ry="14" width="101" height="43" />
    <rect x="29" y="252" rx="10" ry="10" width="248" height="17" />
    <rect x="29" y="288" rx="10" ry="10" width="248" height="77" />
    <circle cx="141" cy="122" r="113" />
  </ContentLoader>
);

export default Skeleton;
