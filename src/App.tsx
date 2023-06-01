import "./App.css";
import React from "react";
import { Video } from "./components/Video/Video";
import { EBook } from "./components/EBook/EBook";
import {SimpleCard} from "./components/Card/SimpleCard";

export default function App() {

  return (
    <>
      <SimpleCard name={''} cover={''} score={0}></SimpleCard>
      {/* <Video></Video>
      <EBook></EBook> */}
    </>
  );
}
