import React from 'react';
import { LineChart } from '../../components/chartjs/LineChart';

export const PowerPage = () => {
  return (
    <div>
      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-xl font-semibold">발전부문</div>
        <div className="text-sm ">
          발전부문은 우리가 일상생활에서 사용하는 전력과 열을 공급하는 에너지 시스템이라고 
          설명할 수 있다. 현재 시스템에서는 많은 양의 화석연료가 사용되고 있으며, 이는 발전부문이 
          가장 많은 온실가스를 배출하게 만들고 있다. 우리가 에너지 사용을 아무리 줄이더라도 생산과정에서 
          온실가스 배출이 발생한다면 탄소중립을 달성할 수 없을 것이다. 따라서, 발전부문의 탄소중립을 위해
          가장 중요한 것은 화석연료에 대한 의존도를 점차 낮추고 궁극적으로 사용하지 않는 것이다. 
          이와 같은 배경에서 우리나라를 포함한 전 세계적으로 재생에너지 활용이 급격하게 증가하고 있다. </div>
      </div>

      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-3xl font-semibold text-green-600">재생에너지 확대</div>
        <div className="grid grid-cols-2 gap-x-10 w-full pt-5">
          <div>
            <div>
              <div className="space-y-3">
              <div className="text-xl font-semibold col-span-2">WHY</div>
              <div className="text-sm text-gray-600 leading-relaxed">
                전력 사용은 온실가스가 발생하지 않기 때문에 깨끗한 에너지원으로 인식되고 있다. 
                하지만 현재 화석연료 기반의 전력 시스템에서는 생산단계에서 많은 온실가스 배출을
                수반한다. 전력이 전적으로 청정한 에너지가 되기 위해서는 생산단계에서도 온실가스
                배출이 발생해서는 않되며, 결국 재생에너지를 통해 전력이 생산되어야 한다. 
                재생에너지를 통한 전력생산은 온실가스 감축 뿐만아니라 에너지 안보에도 기여할 수 있다.
                우리나라는 대부분의 에너지를 해외 수입에 의존하고 있는 상황으로 글로벌 유가 변동에
                매우 취약하다. 따라서, 재생에너지 보급 확대를 통해 외부 의존성을 낮추고 자립도를
                강화할 수 있다. </div>
              </div>
              
              <div className="space-y-3">
              <div className="text-xl font-semibold col-span-2">CHECK POINT</div>
              <div className="text-sm text-gray-600 leading-relaxed">
                이 같은 기후위기 대응의 당위성에도 불구하고 아직까지는 재생에너지로의 급진적 전환에 
                몇 가지 어려운 점이 있다. 기존의 전력 생산기술보다 비용이 높고, 자연조건에 의존하는
                특성에 따라 전력 생산이 불안정하다. 또한, 대표적인 재생에너지인 풍력과 태양광은
                많은 토지를 필요로 한다. 
                하지만 전 세계적인 재생에너지 보급 확대에 따라 보급 비용이 급격하게 감소하고 있으며,
                기술 개발을 통한 효율 증가는 동일한 토지를 활용하여 더 많은 전력생산을 할 수 있도록
                발전하고 있다. 또한, 재생에너지의 변동성을 보완하기 위한 기술 개발도 점차 가속화되고
                있다. 대표적인 기술인 섹터커플링은 남는 전력을 열 및 수소 등으로 전환하여 사용할 수
                있도록 한다. </div>
              </div>
            </div>

          <div>
            <div className="font-semibold">재생에너지 생산 패턴</div>        
            <LineChart />
            </div>
          </div>
        </div>
      </div>

      <div className="border p-10 bg-white my-5 mx-4 space-y-5">
        <div className="text-xl font-semibold">Reference</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="text-[#059669] font-bold">Reference 1</div>
            <div>
              2020 신재생에너지 백서(2020, 한국에너지공단) 
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-[#059669] font-bold">Reference 2</div>
            <div>
              2050년 한국 탈탄소 시나리오: 섹터커플링의 역할(2020, 녹색에너지전략연구소) 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
