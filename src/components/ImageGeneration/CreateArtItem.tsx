import { Icon } from "@iconify/react";
import { useState } from "react";
const CreateArtItem = () => {
  const [artType, setArtType] = useState<boolean>(false);

  return (
    <div className="rounded-[15px] border-[1px] border-[#333535] flex flex-row bg-[#1C1B1B] font-kanit max-w-[1057px]">
      <div className="w-1/2 pt-[18px] pl-[20px] pb-[20px] border-r-[1px] pr-[26px] border-[#333535]">
        <div className="flex gap-[21px]">
          <button className="px-[27px] py-[16px] border-[#D903AE] border-[1px] rounded-full">
            <div className="flex gap-[12px]">
              <Icon icon="uiw:picture" className="text-[#D903AE]" />
              <span className="text-[10px] text-[#D903AE] font-[400] leading-[15px]">
                Image Creation
              </span>
            </div>
          </button>
          <button className="px-[27px] py-[16px] border-[#7D7B7B] border-[1px] rounded-full">
            <div className="flex gap-[12px]">
              <Icon icon="bi:play-btn" className="text-[#7D7B7B]" />
              <span className="text-[10px] text-[#7D7B7B] font-[400] leading-[15px]">
                Video Creation
              </span>
            </div>
          </button>
        </div>
        <div className="rounded-[8px] border-[1px] border-[#333535] relative pr-[16px] pt-[13px] pl-[20px] pb-[12px] mt-[12px]">
          <span className="text-[11px] font-[400] leading-[16px] absolute top-[-9px] left-[20px] bg-[#1C1B1B] px-[10px]">
            Select Image
          </span>

          <div className="flex gap-[11px]">
            <div className="border-[1px] border-[#7064E9] rounded-[3px]">
              <img
                src="/assets/img/robot1.svg"
                alt="ModelImage1"
                className="w-[82px] h-[79px] "
              ></img>
            </div>
            <div className="border-[1px] rounded-[3px]">
              <img
                src="/assets/img/robot2.svg"
                alt="ModelImage2"
                className="w-[82px] h-[79px] "
              ></img>
            </div>
            <div className="border-[1px] rounded-[3px]">
              <img
                src="/assets/img/robot3.svg"
                alt="ModelImage3"
                className="w-[82px] h-[79px] "
              ></img>
            </div>
            <div className="border-[1px] rounded-[3px]">
              <img
                src="/assets/img/robot4.svg"
                alt="ModelImage4"
                className="w-[82px] h-[79px] "
              ></img>
            </div>
            <div className="border-[1px] rounded-[3px]">
              <img
                src="/assets/img/robot5.svg"
                alt="ModelImage5"
                className="w-[82px] h-[79px] "
              ></img>
            </div>
          </div>
        </div>
        <div className="rounded-[8px] border-[1px] border-[#333535] relative pt-[17px] pl-[20px] pb-[13px] mt-[12px]">
          <span className="text-[11px] font-[400] leading-[16px] absolute top-[-9px] left-[20px] bg-[#1C1B1B] px-[10px]">
            Your Prompt
          </span>
          <span className="font-[275] text-[9px] leading-[14px] text-[#B9A5A5]">
            A huge blue dragon that splashes the water as it rises from the
            lake, has Bitcoin engraved on its chest, and emits red lasers from
            its eyes. A scene shot instantly with a 4K, high-performance Nikon
            camera.
          </span>
        </div>
        <div className="rounded-[8px] border-[1px] border-[#333535] relative pt-[17px] pl-[20px] pb-[13px] mt-[12px]">
          <span className="text-[11px] font-[400] leading-[16px] absolute top-[-9px] left-[20px] bg-[#1C1B1B] px-[10px]">
            Add Negative Prompt
          </span>
          <span className="font-[300] text-[9px] leading-[14px] text-[#A69D9D]">
            #Blue Dragon , #Blue Dragon , #Blue Dragon , #Blue Dragon ,
          </span>
        </div>
        <div className="rounded-[8px] border-[1px] border-[#333535] relative px-[160px] pb-[18px] mt-[12px] pt-[18px] flex flex-col items-center">
          <span className="text-[11px] font-[400] leading-[16px] absolute top-[-9px] left-[20px] bg-[#1C1B1B] px-[10px]">
            Add Images
          </span>
          <button className="mb-[6px]">
            <Icon
              icon="tdesign:file-add"
              className="text-[#FF37DF] w-[37px] h-[37px]"
            />
          </button>
          <span className="font-[300] text-[9px] leading-[14px] text-[#A69D9D]">
            Select reference image from gallery
          </span>
        </div>
        <div className="relative mt-[5px]">
          <select className="block appearance-none w-full bg-[#333535] text-[#BCBABA] text-[9px] font-[400] py-2 px-4 pr-8 rounded-[5px] leading-tight focus:outline-none focus:bg-[#000000]/50 focus:border-gray-500">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <Icon
              icon="bxs:down-arrow"
              className="text-[#BCBABA] w-[12px] h-[12px]"
            />
          </div>
        </div>
        <button className="w-full rounded-full py-[17px] px-[180px] flex items-center justify-center gap-[9px] gradient-create-art-button mt-[11px]">
          <div>
            <img
              src="/assets/img/createIcon.svg"
              alt="CreateImage"
              className="w-[19px] h-[18px]"
            />
          </div>
          <span className="text-[16px] text-white text-right font-[500]">
            Create Art
          </span>
        </button>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute flex right-[32px] top-[28px] gap-[13px]">
          <button className="group">
            <Icon
              icon="uiw:share"
              width={21}
              className="text-[#C1B6B6] group-hover:text-white"
            />
          </button>
          <button className="group">
            <Icon
              icon="bi:cloud-download"
              width={21}
              className="text-[#C1B6B6] group-hover:text-white"
            />
          </button>
          <button className="group">
            <Icon
              icon="solar:heart-linear"
              width={21}
              className="text-[#C1B6B6] group-hover:text-white"
            />
          </button>
        </div>
        <img
          src="/assets/img/brobot.svg"
          alt="ImageArt"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
export default CreateArtItem;
