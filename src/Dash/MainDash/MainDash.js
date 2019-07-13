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
      <div
        style={{
          display: 'flex',
          width: 900,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TotalFollowers />
        <Engagement />
        <GrowthRate />
      </div>
      <div
        style={{
          display: 'flex',
          width: 900,
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 350,
        }}
      >
        <FollowersTrend />
        <ActionsChart />
      </div>
      <div
        style={{
          display: 'flex',
          width: 585,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SourcePerformance />
        <LatestConversations />
      </div>
    </div>
  );
};
export default MainDash;
