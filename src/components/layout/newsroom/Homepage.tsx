import React from "react";

interface HeadersProps {
    firstRow?: React.ReactNode;
    secondRowBig?: React.ReactNode;
    secondRowSmall1?: React.ReactNode;
    secondRowSmall2?: React.ReactNode;
    thirdRowLeft?: React.ReactNode;
    thirdRowRightTop?: React.ReactNode;
    thirdRowRightBottomLeft?: React.ReactNode;
    thirdRowRightBottomRight?: React.ReactNode;
    fourthRow?: React.ReactNode;
}

export default function NewsroomHomepageLayout({
    firstRow,
    secondRowBig,
    secondRowSmall1,
    secondRowSmall2,
    thirdRowLeft,
    thirdRowRightTop,
    thirdRowRightBottomLeft,
    thirdRowRightBottomRight,
    fourthRow,
}: HeadersProps) {
    return (
        <div className="flex flex-col gap-1 p-1">

            {/* 1st Row: Full width, height 5 */}
            <div className="">
                <div className="w-full text-center">
                    {firstRow || <div className="text-sm sm:text-base">First Row (Full Width)</div>}
                </div>
            </div>

            {/* 2nd Row: 3 blocks - 1st bigger, 2 small squares */}
            <div className="grid grid-cols-[50%_1fr_1fr] gap-2 w-full">
                <div className="flex items-center justify-center border rounded-md min-h-40">
                    <div className="w-full text-center">
                        {secondRowBig || <div className="text-sm sm:text-base">Second Row - Big Block</div>}
                    </div>
                </div>
                <div className="border rounded-md flex items-center justify-center min-h-40">
                    <div className="w-full text-center">
                        {secondRowSmall1 || <div className="text-sm sm:text-base">Small 1</div>}
                    </div>
                </div>
                <div className="border rounded-md flex items-center justify-center min-h-40">
                    <div className="w-full text-center">
                        {secondRowSmall2 || <div className="text-sm sm:text-base">Small 2</div>}
                    </div>
                </div>
            </div>

            {/* 3rd Row: 2 blocks - left full, right divided */}
            <div className="grid grid-cols-[60%_1fr] gap-2 w-full">
                <div className="flex items-center justify-center border rounded-md min-h-40">
                    <div className="w-full text-center">
                        {thirdRowLeft || <div className="text-sm sm:text-base">Third Row - Left Block</div>}
                    </div>
                </div>
                <div className="flex flex-col gap-2 min-h-40">
                    <div className="flex items-center justify-center border rounded-md min-h-20">
                        <div className="w-full text-center">
                            {thirdRowRightTop || <div className="text-sm sm:text-base">Right - Top</div>}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 flex-1">
                        <div className="border rounded-md flex items-center justify-center min-h-20">
                            <div className="w-full text-center">
                                {thirdRowRightBottomLeft || <div className="text-sm sm:text-base">Bottom Left</div>}
                            </div>
                        </div>
                        <div className="border rounded-md flex items-center justify-center min-h-20">
                            <div className="w-full text-center">
                                {thirdRowRightBottomRight || <div className="text-sm sm:text-base">Bottom Right</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th Row: Same as 1st - Full width, height 5 */}
            <div className="border-2 border-red-500 rounded-md h-20 flex items-center justify-center w-full">
                <div className="w-full text-center">
                    {fourthRow || <div className="text-sm sm:text-base">Fourth Row (Full Width)</div>}
                </div>
            </div>

        </div>
    );
}