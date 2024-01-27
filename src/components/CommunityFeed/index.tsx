import { Icon } from "@iconify/react";
import { useUser } from "../../context/UserContext";
import { useEffect, useState } from "react";
import { Image } from "../../utils/types";
import axios from "axios";
import Card from "../Others/Card";

import ModalImgCard from "../Modal/ModalImgCard";
import { ImageList, ImageListItem } from "@mui/material";

const CommunityFeed = () => {
  const { user }: any = useUser();
  const [imageData, setImageData] = useState<Image[]>([]);
  const updateLibrary = () => {
    const func = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getAllImages`
      );
      if (res.status === 200) {
        var tmp = res.data;
        tmp.sort((a: Image, b: Image) => {
          const dateA = new Date(a.created).getTime();
          const dateB = new Date(b.created).getTime();
          return dateB - dateA;
        });
        setImageData(tmp);
      } else {
        console.log("Error occurred");
      }
    };
    func();
  };

  useEffect(() => {
    if (imageData.length > 0) return;
    updateLibrary();
    console.log("User:", user);
  });

  return (
    <>
      <div className="w-full bg-black pt-[29px] flex flex-col">
        <div className="pl-8">
          <span className="font-chakra text-[26px]">Community Feed</span>
        </div>
        <div className="pl-8 pt-8">
          <div className="search-panel w-[376px]">
            <span className="search-icon">
              <Icon icon="ic:round-search" className="w-5 h-5" />
            </span>
            <input
              className="search-input font-chakra"
              placeholder="Search gallery"
            ></input>
            <button className="search-button">Search</button>
          </div>
        </div>

        {/* Images shared with community */}
        <div className="mt-8 border-t border-primary p-3">
          {imageData.length > 0 && (
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-4 py-6 px-4 md:px-8 sm:px-4 justify-start">
              {imageData.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          )}

          {/* <ImageList variant="masonry" cols={4} gap={8}>
            {imageData.map((item, index) => (
              <ImageListItem key={index}>
                <Card data={item} key={index} />
              </ImageListItem>
            ))}
          </ImageList> */}
        </div>
      </div>
      <ModalImgCard onUpdate={updateLibrary} />
    </>
  );
};

export default CommunityFeed;