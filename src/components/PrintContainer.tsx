import { ReactNode, RefObject } from "react";
import * as htmlToImage from "html-to-image";
import { Button } from "./Button";

interface PrintContainerProps {
  domEl: RefObject<HTMLDivElement>;
  children: ReactNode;
}
export const PrintContainer = ({ children, domEl }: PrintContainerProps) => {
  const handleCapture = async () => {
    if (domEl.current) {
      const dataUrl = await htmlToImage.toPng(domEl.current);

      const link = document.createElement("a");
      link.download = "html-to-img.png";
      link.href = dataUrl;
      link.click();
    }
  };
  return (
    <>
      <div className="flex flex-col bg-black p-5" ref={domEl}>
        {children}
      </div>
      <div className="w-full flex justify-center">
        <Button onClick={() => handleCapture()} color="bg-blue-600" />
      </div>
    </>
  );
};
