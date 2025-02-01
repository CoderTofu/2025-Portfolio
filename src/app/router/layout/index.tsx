import { FC, ReactNode, useEffect, useState } from "react";

import Preloader from "@/common/Preloader/Preloader";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setIsLoading(false);
        clearInterval(intervalId);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <>
      {/* {isLoading && <Preloader />} */}
      {children}
    </>
  );
};

export default Layout;
