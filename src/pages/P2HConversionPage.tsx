import React from 'react';
import { LineChart } from '../components/chartjs/LineChart';
import { StackedMultiBarChart } from '../components/chartjs/StackedMultiBarChart';
import { StackedMultiBarLineChart } from '../components/chartjs/StackedMultiBarLineChart';
import { BarChart } from '../components/chartjs/BarChart';
import { FillterBar } from '../components/FillterBar';
import { scenarioState, simulationState } from '../plugins/ridge';

let stackedMultiBarChartBarLabels = [
  'home_2020',
  'home_2030',
  'commerce_2020',
  'commerce_2030',
];
const stackedMultiBarChartBarLabelMap = {
  home_2020: "가정 '20",
  home_2030: "가정 '30",
  home_2050: "가정 '50",
  commerce_2020: "상업 '20",
  commerce_2030: "상업 '30",
  commerce_2050: "상업 '50",
};
const stackedMultiBarChartLabels = [
  'district_heating',
  'city_gas',
  'oil',
  'coal',
  'electric_heating',
  'others',
];
const stackedMultiBarChartLabelMap = {
  district_heating: '지역난방',
  city_gas: '도시가스',
  oil: '석유',
  coal: '석탄',
  electric_heating: '전력',
  others: '기타',
};
const stackedMultiBarChartOptions = {
  maintainAspectRatio: false,
  // barThickness: 20,
};
const barChartOptions = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  barThickness: 20,
};
const upperChartPositiveData = ['P2H', 'dis_th', 'power_demand_without_p2h'];
const upperChartDataMap = {
  // 'heat_demand':'heat_demand',
  P2H: 'P2H',
  dis_th: '저장열 공급',
  power_demand_without_p2h: '초과생산전력(P2H제외)',
};
const upperChartOptions = {
  xlabels: true,
  legend: 'top',
};
const upperChartLineData = ['heat_demand'];
const lowerChartPositiveData = ['ch_th'];
const lowerChartNegativeData = ['dis_th'];
const lowerChartLineData = ['SOC_th'];
const lowerChartDataMap = {
  ch_th: '열 저장',
  dis_th: '열 방출',
  SOC_th: '열 저장량',
};
const lowerChartOptions = {
  xlabels: false,
  legend: 'bottom',
};
// const summerLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71']
// const summerLabelMap = {'1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '10': '10', '11': '11', '12': '12', '13': '13', '14': '14', '15': '15', '16': '16', '17': '17', '18': '18', '19': '19', '20': '20', '21': '21', '22': '22', '23': '23', '24': '24', '25': '25', '26': '26', '27': '27', '28': '28', '29': '29', '30': '30', '31': '31', '32': '32', '33': '33', '34': '34', '35': '35', '36': '36', '37': '37', '38': '38', '39': '39', '40': '40', '41': '41', '42': '42', '43': '43', '44': '44', '45': '45', '46': '46', '47': '47', '48': '48', '49': '49', '50': '50', '51': '51', '52': '52', '53': '53', '54': '54', '55': '55', '56': '56', '57': '57', '58': '58', '59': '59', '60': '60', '61': '61', '62': '62', '63': '63', '64': '64', '65': '65', '66': '66', '67': '67', '68': '68', '69': '69', '70': '70', '71': '71'}
// const winterLabels = ['5378', '5379', '5380', '5381', '5382', '5383', '5384', '5385', '5386', '5387', '5388', '5389', '5390', '5391', '5392', '5393', '5394', '5395', '5396', '5397', '5398', '5399', '5400', '5401', '5402', '5403', '5404', '5405', '5406', '5407', '5408', '5409', '5410', '5411', '5412', '5413', '5414', '5415', '5416', '5417', '5418', '5419', '5420', '5421', '5422', '5423', '5424', '5425', '5426', '5427', '5428', '5429', '5430', '5431', '5432', '5433', '5434', '5435', '5436', '5437', '5438', '5439', '5440', '5441', '5442', '5443', '5444', '5445', '5446', '5447', '5448', '5449', '5450']
// const winterLabelMap = {'5378': '1', '5379': '2', '5380': '3', '5381': '4', '5382': '5', '5383': '6', '5384': '7', '5385': '8', '5386': '9', '5387': '10', '5388': '11', '5389': '12', '5390': '13', '5391': '14', '5392': '15', '5393': '16', '5394': '17', '5395': '18', '5396': '19', '5397': '20', '5398': '21', '5399': '22', '5400': '23', '5401': '24', '5402': '25', '5403': '26', '5404': '27', '5405': '28', '5406': '29', '5407': '30', '5408': '31', '5409': '32', '5410': '33', '5411': '34', '5412': '35', '5413': '36', '5414': '37', '5415': '38', '5416': '39', '5417': '40', '5418': '41', '5419': '42', '5420': '43', '5421': '44', '5422': '45', '5423': '46', '5424': '47', '5425': '48', '5426': '49', '5427': '50', '5428': '51', '5429': '52', '5430': '53', '5431': '54', '5432': '55', '5433': '56', '5434': '57', '5435': '58', '5436': '59', '5437': '60', '5438': '61', '5439': '62', '5440': '63', '5441': '64', '5442': '65', '5443': '66', '5444': '67', '5445': '68', '5446': '69', '5447': '70', '5448': '71', '5449': '72', '5450': '73'}
const winterLabels = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '60',
  '61',
  '62',
  '63',
  '64',
  '65',
  '66',
  '67',
  '68',
  '69',
  '70',
  '71',
  '72',
];
const winterLabelMap = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '10': '10',
  '11': '11',
  '12': '12',
  '13': '13',
  '14': '14',
  '15': '15',
  '16': '16',
  '17': '17',
  '18': '18',
  '19': '19',
  '20': '20',
  '21': '21',
  '22': '22',
  '23': '23',
  '24': '24',
  '25': '25',
  '26': '26',
  '27': '27',
  '28': '28',
  '29': '29',
  '30': '30',
  '31': '31',
  '32': '32',
  '33': '33',
  '34': '34',
  '35': '35',
  '36': '36',
  '37': '37',
  '38': '38',
  '39': '39',
  '40': '40',
  '41': '41',
  '42': '42',
  '43': '43',
  '44': '44',
  '45': '45',
  '46': '46',
  '47': '47',
  '48': '48',
  '49': '49',
  '50': '50',
  '51': '51',
  '52': '52',
  '53': '53',
  '54': '54',
  '55': '55',
  '56': '56',
  '57': '57',
  '58': '58',
  '59': '59',
  '60': '60',
  '61': '61',
  '62': '62',
  '63': '63',
  '64': '64',
  '65': '65',
  '66': '66',
  '67': '67',
  '68': '68',
  '69': '69',
  '70': '70',
  '71': '71',
  '72': '72',
};
const summerLabels = [
  '5378',
  '5379',
  '5380',
  '5381',
  '5382',
  '5383',
  '5384',
  '5385',
  '5386',
  '5387',
  '5388',
  '5389',
  '5390',
  '5391',
  '5392',
  '5393',
  '5394',
  '5395',
  '5396',
  '5397',
  '5398',
  '5399',
  '5400',
  '5401',
  '5402',
  '5403',
  '5404',
  '5405',
  '5406',
  '5407',
  '5408',
  '5409',
  '5410',
  '5411',
  '5412',
  '5413',
  '5414',
  '5415',
  '5416',
  '5417',
  '5418',
  '5419',
  '5420',
  '5421',
  '5422',
  '5423',
  '5424',
  '5425',
  '5426',
  '5427',
  '5428',
  '5429',
  '5430',
  '5431',
  '5432',
  '5433',
  '5434',
  '5435',
  '5436',
  '5437',
  '5438',
  '5439',
  '5440',
  '5441',
  '5442',
  '5443',
  '5444',
  '5445',
  '5446',
  '5447',
  '5448',
];
const summerLabelMap = {
  '5378': '1',
  '5379': '2',
  '5380': '3',
  '5381': '4',
  '5382': '5',
  '5383': '6',
  '5384': '7',
  '5385': '8',
  '5386': '9',
  '5387': '10',
  '5388': '11',
  '5389': '12',
  '5390': '13',
  '5391': '14',
  '5392': '15',
  '5393': '16',
  '5394': '17',
  '5395': '18',
  '5396': '19',
  '5397': '20',
  '5398': '21',
  '5399': '22',
  '5400': '23',
  '5401': '24',
  '5402': '25',
  '5403': '26',
  '5404': '27',
  '5405': '28',
  '5406': '29',
  '5407': '30',
  '5408': '31',
  '5409': '32',
  '5410': '33',
  '5411': '34',
  '5412': '35',
  '5413': '36',
  '5414': '37',
  '5415': '38',
  '5416': '39',
  '5417': '40',
  '5418': '41',
  '5419': '42',
  '5420': '43',
  '5421': '44',
  '5422': '45',
  '5423': '46',
  '5424': '47',
  '5425': '48',
  '5426': '49',
  '5427': '50',
  '5428': '51',
  '5429': '52',
  '5430': '53',
  '5431': '54',
  '5432': '55',
  '5433': '56',
  '5434': '57',
  '5435': '58',
  '5436': '59',
  '5437': '60',
  '5438': '61',
  '5439': '62',
  '5440': '63',
  '5441': '64',
  '5442': '65',
  '5443': '66',
  '5444': '67',
  '5445': '68',
  '5446': '69',
  '5447': '70',
  '5448': '71',
};

const labelMap = {
  fuel: 'fossil',
  heat: 'heat',
  elec: 'electricity',
};

export const P2HConversionPage = () => {
  let home_target = 'home_2030';
  let commerce_target = 'commerce_2030';
  if (scenarioState.useSelector((state) => state.target) === true) {
    home_target = 'home_2050';
    commerce_target = 'commerce_2050';
  }
  stackedMultiBarChartBarLabels = [
    'home_2020',
    home_target,
    'commerce_2020',
    commerce_target,
  ];

  return (
    <div>
      <div className="border p-5 bg-white my-5 mx-4">
        <div className="grid grid-rows-2 grid-flow-col grid-cols-2 gap-2">
          <div className="row-span-2">
            <StackedMultiBarChart
              title="건물 부분 에너지 소비"
              labels={stackedMultiBarChartLabels}
              barLabels={stackedMultiBarChartBarLabels}
              simulation={simulationState.useSelector(
                (state) => state?.P2H_consumption_change
              )}
              labelMap={stackedMultiBarChartLabelMap}
              barLabelMap={stackedMultiBarChartBarLabelMap}
              dataOptions={stackedMultiBarChartOptions}
              ylabel="TWh"
            />
          </div>
          <BarChart
            title="열 생산 방식"
            simulation={simulationState.useSelector((state) => state?.P2H.F2H)}
            dataOptions={barChartOptions}
            ylabel="F2H (MWh)"
            labelMap={labelMap}
          />
          <BarChart
            title=""
            simulation={simulationState.useSelector((state) => state?.P2H.P2H)}
            dataOptions={barChartOptions}
            ylabel="P2H (MWh)"
            labelMap={labelMap}
          />
        </div>
        <div className="grid grid-rows-2 grid-flow-col grid-cols-2 gap-2">
          <StackedMultiBarLineChart
            title="여름"
            labels={summerLabels}
            positiveBarData={upperChartPositiveData}
            lineData={upperChartLineData}
            simulation={simulationState.useSelector((state) => state?.rep_h)}
            labelMap={summerLabelMap}
            dataMap={upperChartDataMap}
            dataOptions={upperChartOptions}
            ylabel="MWh"
          />
          <StackedMultiBarLineChart
            labels={summerLabels}
            positiveBarData={lowerChartPositiveData}
            negativeBarData={lowerChartNegativeData}
            lineData={lowerChartLineData}
            simulation={simulationState.useSelector((state) => state?.rep_h)}
            labelMap={summerLabelMap}
            dataMap={lowerChartDataMap}
            dataOptions={lowerChartOptions}
            ylabel="MWh"
          />
          <StackedMultiBarLineChart
            title="겨울"
            labels={winterLabels}
            positiveBarData={upperChartPositiveData}
            lineData={upperChartLineData}
            simulation={simulationState.useSelector((state) => state?.rep_h)}
            labelMap={winterLabelMap}
            dataMap={upperChartDataMap}
            dataOptions={upperChartOptions}
            ylabel="MWh"
          />
          <StackedMultiBarLineChart
            labels={winterLabels}
            positiveBarData={lowerChartPositiveData}
            negativeBarData={lowerChartNegativeData}
            lineData={lowerChartLineData}
            simulation={simulationState.useSelector((state) => state?.rep_h)}
            labelMap={winterLabelMap}
            dataMap={lowerChartDataMap}
            dataOptions={lowerChartOptions}
            ylabel="MWh"
          />
        </div>
      </div>
      <FillterBar />
    </div>
  );
};
