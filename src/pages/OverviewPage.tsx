import React from 'react';
import { BarChart } from '../components/chartjs/BarChart';
import { StackedMultiBarChart } from '../components/chartjs/StackedMultiBarChart';
import { FillterBar } from '../components/FillterBar';
import { simulationState } from '../plugins/ridge';

// Energy Demand Graph Configuration
const energyDemandBarLabels = ['industry', 'building', 'transportation'];
const energyDemandBarLabelMap = {
  industry: '산업',
  building: '건물',
  transportation: '수송',
};
const energyDemandLabels = [
  'coal',
  'oil',
  'LNG',
  'electricity',
  'heat',
  'hydrogen',
  'other',
];
const energyDemandLabelMap = {
  coal: '석탄',
  oil: '석유',
  LNG: 'LNG',
  electricity: 'electricity',
  heat: 'heat',
  hydrogen: '수소',
  other: '기타',
};
const energyDemandChartOptions = {
  max: 1400,
};

// Emission Graph Configuration
const emissionLabelMap = {
  em_power: '전환',
  em_ind: '산업',
  building: '건물',
  em_tr: '수송',
};
const emissionChartOptions = {
  max: 220000000,
};

export const OverviewPage = () => {
  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-cols-2 gap-10">
          <StackedMultiBarChart
            title="최종에너지 소비"
            labels={energyDemandLabels}
            barLabels={energyDemandBarLabels}
            simulation={simulationState.useSelector(
              (state) => state?.energy_demand
            )}
            labelMap={energyDemandLabelMap}
            barLabelMap={energyDemandBarLabelMap}
            dataOptions={energyDemandChartOptions}
            ylabel="TWh"
          />
          <BarChart
            title="온실가스 배출량"
            simulation={simulationState.useSelector(
              (state) => state?.emissions
            )}
            labelMap={emissionLabelMap}
            dataOptions={emissionChartOptions}
            ylabel="톤CO2eq"
          />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};
