import React from 'react';
import { BarChart } from '../../components/chartjs/BarChart';

export const NDCPage = () => {
  return (
    <div>
      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-xl font-semibold">NDC(Nationally Determined Contribution)</div>
        <div className="text-sm ">
         NDC는 기후변화 파리협정에 따라 당사국이 스스로 결정한 국가 온실가스 감축목표이다. 
          우리나라는 2015년 BAU(Business As Usual, 배출 전망) 대비 37%라는 목표를 최초로
          수립하였다. 몇 차례 변경을 거쳐 작년 발표된 NDC 상향안에서는 '18년 대비 40% 감축이라는
          절대적인 수치로 변경되었고, 목표 자체도 매우 도전적으로 전환되었다. NDC는 2050년 
          탄소중립의 중간 목표라는 의미를 갖고 있으며, 빠른 행동 변화가 요구된다는 측면에서 
          최근 세계 주요국은 NDC 목표를 상향하고 있다.
        </div>
      </div>

      <div className="border p-10 bg-white my-5 mx-4 space-y-2">
        <div className="text-3xl font-semibold text-green-600">NDC</div>
        <div className="grid grid-cols-2 gap-x-10 w-full pt-5">
          <div>
            <div>
              <div className="space-y-3">
              <div className="text-xl font-semibold col-span-2">WHY</div>
              <div className="text-sm text-gray-600 leading-relaxed">
                점차 가속화되는 기후위기의 심각성이 대두되고 있는 현 시점에서 
                기후변화를 완화하기 위한 빠른 대응이 필요하다. 그런 측면에서 단기적인 시점의
                온실가스 감축목표인 NDC는 매우 중요하다. 2050년에 탄소중립이 달성되더라도, 그 전까지
                배출되어 대기중에 누적된 온실가스는 기후변화를 가속화시킬 수 있기 때문이다. </div>
              </div>
              
              <div className="space-y-3">
              <div className="text-xl font-semibold col-span-2">CHECK POINT</div>
              <div className="text-sm text-gray-600 leading-relaxed">
                IPCC(기후변화에 관한 정부간 협의체)의 지구 온도 상승을 1.5도
                이내로 제한하기 위해서는 2030년까지 2010년 대비 45% 이상
                감축해야 한다고 권고했다. 국내 환경단체는 더 강한 기후대응
                노력을 위해서 2018년 대비 50% 이상 감축할 것을 촉구하였다. </div>
              </div>
            </div>
          <div>
            <div className="font-semibold">온실가스 배출량</div>
            <BarChart />
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">35%</div>
              <div>
                「탄소중립기본법」에서 설정된 NDC 최소 기준('18년 比 35% 이상)
              </div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">40%</div>
              <div>
                2030 NDC 상향안(2021년 11월 발표)
              </div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">45%</div>
              <div>
                2030 NDC 상향안 분과 검토의견 중위값 
              </div>
            </div>
            <div className="flex items-center space-x-3 py-3 border-b">
              <div className="text-[#059669] font-bold">50%</div>
              <div>
                2030 NDC 상향안 분과 검토의견 최대값(국민참여분과 의견) 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border p-10 bg-white my-5 mx-4 space-y-5">
        <div className="text-xl font-semibold">Reference</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="text-[#059669] font-bold">1</div>
            <div>
              2030 국가 온실가스 감축목표(NDC) 상향안(2021.10.18, 관계부처 합동)  
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-[#059669] font-bold">2</div>
            <div>
              파리협정 NDC 관련 규정(제4조제2,3,9항, 제13조제7항, 제14조제1,2항) 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
