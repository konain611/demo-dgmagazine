import React from "react";

interface HeadersProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  firstRowLeft?: React.ReactNode;
  firstRowRight?: React.ReactNode;
  secondRowFirst?: React.ReactNode;
  secondRowSecond?: React.ReactNode;
  secondRowThirdTop?: React.ReactNode;
  secondRowThirdBottom?: React.ReactNode;
  secondRowFourthTop?: React.ReactNode;
  secondRowFourthBottom?: React.ReactNode;
  thirdRow?: React.ReactNode;
}

export default function HomepageLayout({
  left,
  right,
  firstRowLeft,
  firstRowRight,
  secondRowFirst,
  secondRowSecond,
  secondRowThirdTop,
  secondRowThirdBottom,
  secondRowFourthTop,
  secondRowFourthBottom,
  thirdRow,
}: HeadersProps) {
  return (
    <div className="h-screen flex flex-col gap-1 p-1">

      <div className="flex flex-col md:grid md:grid-cols-[55%_44.5%] gap-2">
        <div className="flex items-center justify-center border rounded-md">
          <div className="w-full text-center">
            {firstRowLeft || left || <div className="text-sm sm:text-base">First Row Left (55%)</div>}
          </div>
        </div>
        <div className="border rounded-md flex items-center justify-center">
          <div className="w-full text-center">
            {firstRowRight || right || <div className="text-sm sm:text-base">Global Cyber Threat Map</div>}
          </div>
        </div>
      </div>


      <div className="flex flex-col md:grid md:grid-cols-4 gap-2 h-auto md:h-[50%]">

        <div className="border rounded-md flex items-center justify-center">
          <div className="w-full text-center">
            {secondRowFirst || <div className="text-sm sm:text-base">Second Row 1</div>}
          </div>
        </div>

        <div className="border rounded-md flex items-center justify-center">
          <div className="w-full text-center">
            {secondRowSecond || <div className="text-sm sm:text-base">Second Row 2</div>}
          </div>
        </div>

        <div className="border rounded-md flex flex-col gap-1 order-3">
          <div className="flex-1 bg-gray-100 rounded flex items-center justify-center p-2 sm:p-3 min-h-15">
            <div className="w-full text-center text-xs sm:text-sm">
              {secondRowThirdTop || <div>Second Row 3 - Top</div>}
            </div>
          </div>
          <div className="flex-1 bg-gray-100 rounded flex items-center justify-center p-2 sm:p-3 min-h-10">
            <div className="w-full text-center text-xs sm:text-sm">
              {secondRowThirdBottom || <div>Second Row 3 - Bottom</div>}
            </div>
          </div>
        </div>



        <div className="flex flex-col gap-1 order-4">

          <div className="p-3 border rounded-md">
            <div className="w-full text-center">
              {secondRowFourthTop || <div>Second Row 4 - Top</div>}
            </div>
          </div>

          <div className="p-3 border rounded-md">
            <div className="w-full text-center">
              {secondRowFourthBottom || <div>Second Row 4 - Bottom</div>}
            </div>
          </div>

        </div>
      </div>

      {/* 3rd Row: Full width */}
      {/* <div className="border-2 border-red-500 rounded-md min-h-15 mt-10 flex items-center justify-center">
        <div className="w-full text-center">
          {thirdRow || <div className="text-sm sm:text-base">Third Row (Full Width)</div>}
        </div>
      </div> */}
    </div>
  );
}