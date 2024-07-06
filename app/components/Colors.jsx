'use client';
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { blueColor, grayColor, redColor, yellowColor } from '../Redux/Reducer/colorsReducer';

export default function Colors() {
  const value = useSelector((state) => state.colors);
  const dispatch = useDispatch();

  const handleGrayColor = () => {
    dispatch(grayColor({ gray: !value.gray}));
  };

  return (
 
    <div className="flex justify-center items-center">
      <div onClick={handleGrayColor} className="flex justify-center rounded-xl bg-opacity-75 bg-gray-500 w-1/4 mx-1 h-20 md:h-24 items-center duration-700 hover:bg-opacity-100 hover:cursor-pointer hover:z-10  md:hover:w-96 absolute">
          <Image className="mx-1" src="/old-man.png" alt="Example Image" width={60} height={60} />
          <p>MarkUp</p>
        </div>
    </div>
        

  
  );
}
