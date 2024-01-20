import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ChartData,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface BarChartProps {
  title?: string;
  labels?: string[];
  simulation?: object;
  labelMap?: { [name: string]: string };
  dataOptions?: object;
  ylabel?: string;
}

const backgroundColor: string[] = [
  '#8dd3c7',
  '#ffffb3',
  '#bebada',
  '#fb8072',
  '#80b1d3',
  '#fdb462',
  '#b3de69',
  '#fccde5',
  '#d9d9d9',
  '#bc80bd',
  '#ccebc5',
  '#ffed6f',
];

export const BarChart: React.FC<BarChartProps> = ({
  title,
  labels,
  simulation,
  labelMap,
  dataOptions,
  ylabel,
}) => {
  const [data, setData] = useState<ChartData<'bar', number[], unknown>>({
    labels: [''],
    datasets: [
      {
        data: [],
      },
    ],
  });

  let options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += Number(context.parsed.y.toFixed(1)).toLocaleString();
            }
            return label;
          },
        },
      },
      legend: {
        // position: 'right' as const,
        display: false,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold',
          lineHeight: 2.0,
        },
      },
    },
    scales: {
      y: {
        afterFit: function(scaleInstance: any) {
          scaleInstance.width = 90; // y축 라벨을 위한 충분한 여백 제공
        },
        max: undefined,
        title: {
          display: true,
          text: ylabel,
        },
      },
    },
    indexAxis: undefined,
    maintainAspectRatio: undefined,
  };

  if (simulation) {
    // Deep copy data and clear datasets
    let newData: ChartData<'bar', number[], unknown> = JSON.parse(
      JSON.stringify(data)
    );
    newData.datasets.length = 0;

    let newLabels: string[] = [];
    let newDatasetData: number[] = [];

    // Default Values
    let barThickness = 50;

    if (dataOptions) {
      Object.entries(dataOptions).forEach(([key, value], index) => {
        if (key === 'barThickness') barThickness = value;

        if (key === 'max') options.scales.y.max = value;

        if (key === 'indexAxis') options.indexAxis = value;

        if (key === 'maintainAspectRatio') options.maintainAspectRatio = value;
      });
    }

    if (labels) {
      for (const label of labels) {
        if (simulation.hasOwnProperty(label)) {
          type _keyType = keyof typeof simulation;
          const _key = label as _keyType;
          newDatasetData.push(simulation[_key]);

          let newLabel = label;

          if (labelMap) newLabel = labelMap[label as string];

          newLabels.push(newLabel);
        }
      }
    } else {
      Object.entries(simulation).forEach(([key, value], index) => {
        if (key !== 'total') {
          let label = key;

          if (labelMap) label = labelMap[key as string];

          newLabels.push(label);
          newDatasetData.push(value);
        }
      });
    }

    newData.labels = newLabels;
    newData.datasets.push({
      data: newDatasetData,
      barThickness: barThickness,
      borderWidth: 1,
      backgroundColor: backgroundColor,
    });

    if (JSON.stringify(newData.datasets) !== JSON.stringify(data.datasets)) {
      setData(newData);
    }
  }

  return (
    <div className="w-full h-full">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};
