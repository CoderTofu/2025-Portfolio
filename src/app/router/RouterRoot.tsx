import { FC } from "react";
import Layout from "./layout";
import { Outlet } from "react-router";

const RouterRoot: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default RouterRoot;
