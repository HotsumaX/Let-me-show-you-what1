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
      <TotalFollowers />
      <Engagement />
      <GrowthRate />
      <FollowersTrend />
      <ActionsChart />
      <SourcePerformance />
      <LatestConversations />
    </div>
  );
};
export default MainDash;
