import React from 'react';
import MainDashHeader from './MainDashHeader';
import TotalFollowers from './TotalFollowers';
import Engagement from './Engagement';
import GrowthRate from './GrowthRate';
import FollowersTrend from './FollowersTrend';
import ActionsChart from './ActionsChart';
import SourcePerformance from './SourcePerformance';
import LatestConversations from './LatestConversations';

const MainDash = () => {
  return (
    <div>
      <MainDashHeader />
      <div style={{ display: 'flex' }}>
        <TotalFollowers />
        <Engagement />
        <GrowthRate />
      </div>
      <div style={{ display: 'flex' }}>
        <FollowersTrend />
        <ActionsChart />
      </div>
      <div style={{ display: 'flex' }}>
        <SourcePerformance />
        <LatestConversations />
      </div>
    </div>
  );
};
export default MainDash;
