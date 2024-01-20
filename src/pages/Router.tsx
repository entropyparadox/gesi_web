import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AuthRoute } from '../components/AuthRoute';
import { LoginPage } from './LoginPage';
// import { HomePage } from './HomePage';
import { MyPage } from './MyPage';
import { SignupPage } from './SignupPage';
import { TopNavBar } from '../components/TopNavBar';
import { OverviewPage } from './OverviewPage';
import { BottomBar } from '../components/BottomBar';
import { EnergySystemPage } from './EnergySystemPage';
import { P2XPage } from './P2XPage';
import { P2XBalancingPage } from './P2XBalancingPage';
import { P2HConversionPage } from './P2HConversionPage';
import { P2GConversionPage } from './P2GConversionPage';
import { SummaryPage } from './SummaryPage';
import { NDCPage } from './info/NDCPage';
import { PowerPage } from './info/PowerPage';
import { IndustryPage } from './info/IndustryPage';
import { BuildingPage } from './info/BuildingPage';
import { TransportPage } from './info/TransportPage';
import 'intro.js/introjs.css';
import { Steps, Hints } from 'intro.js-react';

const steps = [
  {
    element: '.menu',
    intro: '항목별 주요 결과 표시',
  },
  {
    element: '.scenario',
    intro: '시나리오 목표년도 및 단기 감축 목표 결정',
  },
  {
    element: '.options',
    intro: '부문별 주요 감축수단의 감축 강도 결정',
  },
  {
    element: '.create',
    intro: '결정된 시나리오 결과 생성',
  },
];

export const Router = () => {
  const [stepsEnabled, setStepsEnabled] = useState(true);
  return (
    <div className="min-h-screen flex flex-col flex-1">
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={0}
        onExit={(e) => console.log(e)}
      />
      <main className="relative flex-1 flex flex-col bg-gray-50">
        <TopNavBar />
        <div className="max-w-screen-2xl mx-auto flex-1 w-full">
          <Switch>
            <Route path="/info/transport" component={TransportPage} />
            <Route path="/info/building" component={BuildingPage} />
            <Route path="/info/industry" component={IndustryPage} />
            <Route path="/info/power" component={PowerPage} />
            <Route path="/info/ndc" component={NDCPage} />
            <Route path="/summary" component={SummaryPage} />
            <Route path="/conversion/p2g" component={P2GConversionPage} />
            <Route path="/conversion/p2h" component={P2HConversionPage} />
            <Route path="/balancing/p2x" component={P2XBalancingPage} />
            <Route path="/p2x" component={P2XPage} />
            <Route path="/energy" component={EnergySystemPage} />
            <Route path="/overview" component={OverviewPage} />
            <AuthRoute path="/signup" component={SignupPage} guestOnly />
            <AuthRoute path="/login" component={LoginPage} guestOnly />
            <AuthRoute path="/mypage" component={MyPage} />
            <Route path="/" component={OverviewPage} exact />
            {/* <Route path="/">
              <Redirect to="/overview" />
            </Route> */}
          </Switch>
        </div>
        <BottomBar />
      </main>
    </div>
  );
};
