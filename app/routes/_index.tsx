import type { MetaFunction } from "@remix-run/node";
import GetProfiles from "./chaptor06.getProfiles";
import Foolter from "~/template/foolter";
import AppMenu from "~/template/manu";

export const meta: MetaFunction = () => {
  return [
    { title: "teerawat" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <AppMenu />
      <GetProfiles />
      <Foolter />
    </>
  );
}
