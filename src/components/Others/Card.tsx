import { useState, useContext, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Icon } from "@iconify/react";
import ModalContext from "../../context/modalContext";
import { useUser } from "../../context/UserContext";
import axios, { AxiosResponse } from "axios";

import "react-lazy-load-image-component/src/effects/blur.css";

const Card = (props: any) => {
  const { user }: any = useUser();
  const userObejct = JSON.parse(user === "None" ? "{}" : user);
  const isOwner = props.data.owner === userObejct.email;
  const modalCtx = useContext(ModalContext);
  const [loading, setLoading] = useState(false);
  const [likeImages, setLikeImages] = useState<String[]>([]);
  const [heartCount, setHeartCount] = useState<Number>(0);

  const handleImgModalOpen = () => {
    modalCtx.setVisible(true);
    modalCtx.setData(props.data);
    modalCtx.setIndex(props.index);
    modalCtx.setImgCount(props.count);
  };

  const handleAddHeartMark: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();
    event.stopPropagation();
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/putLikeImages`, {
        email: userObejct.email,
        imageID: props.data.generationID,
      })
      .then((res: AxiosResponse<any, any>) => {
        console.log("Response Data:", res.data);
        updateLibrary();
      });
  };

  const updateLibrary = () => {
    const func = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getLikeImages`,
        { email: userObejct.email, imageID: props.data.generationID }
      );
      if (res.status === 200) {
        var tmp = res.data.images;
        tmp.reverse();
        setLikeImages(tmp);
        setHeartCount(res.data.heartCount);
      } else {
        console.log("Error occurred");
      }
    };
    func();
  };

  useEffect(() => {
    if (likeImages.length > 0) return;
    updateLibrary();
  });

  useEffect(() => {
    setLoading(true);
  }, [props.data.image]);
  return (
    <>
      <div
        className="group relative cursor-pointer w-full h-full block"
        onClick={handleImgModalOpen}
      >
        {loading && (
          <div className="absolute flex w-7 h-7 top-[calc(50%-14px)] left-[calc(50%-14px)] flex-col items-center">
            <img src="/favicon.ico" alt="logo" />
          </div>
        )}

        {props.data.image.endsWith(".mp4") ? (
          <video
            autoPlay
            loop
            disableRemotePlayback
            muted
            className="rounded-md"
            onLoadedData={() => setLoading(false)}
            onError={() => setLoading(false)}
          >
            <source type="video/mp4" src={props.data.image} />
          </video>
        ) : (
          <LazyLoadImage
            src={props.data.image}
            beforeLoad={() => setLoading(true)}
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
            alt="GeneratedImage"
            effect="blur"
            className="rounded-md"
          />
        )}

        {/* Hovered Image Description */}

        <div className="absolute w-full h-full top-0 left-0 hover-ground opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
          <div className="flex flex-row justify-between gap-2">
            <div className="flex flex-row items-center gap-1 overflow-hidden">
              <span className="w-8 h-8 p-3 rounded-full bg-[#1cb578] flex text-center justify-center items-center text-black font-semibold">
                D
              </span>
              <span className="text-ellipsis overflow-hidden text-[12px] ">
                {props.data.owner}
              </span>
            </div>
            <button
              className="flex flex-row items-center rounded-[24px] py-2 px-3 bg-[#63636355] gap-2"
              onClick={handleAddHeartMark}
              disabled={isOwner}
            >
              <span className="">{`${heartCount}`}</span>
              {likeImages.find((val: any) => {
                return val.generationID === props.data.generationID;
              }) ? (
                <Icon
                  icon="tdesign:heart-filled"
                  className="w-6 h-6"
                  color="red"
                />
              ) : (
                <Icon icon="tdesign:heart" className="w-6 h-6" />
              )}
            </button>
          </div>
          <div className="flex flex-col overflow-hidden text-ellipsis text-wrap break-words h-[34px] text-[12px]">
            {props.data.data.prompt}
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Card;
