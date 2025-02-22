import 'react-app-polyfill/ie11';
import * as React from 'react';
// import {createRoot} from "react-dom/client";
import * as ReactDOM from 'react-dom';
import GoCaptcha from '../.';
// import GoCaptcha from '../src';
import {useEffect, useRef, useState} from "react";
// @ts-ignore
import {ClickRef} from "../dist/components/Click";
// @ts-ignore
import {SlideRef} from "../dist/components/Slide";
// @ts-ignore
import {SlideRegionRef} from "../src/components/SlideRegion";
// @ts-ignore
import {RotateRef} from "../src/components/Rotate";
import { clickImage, clickImage2, clickThumb, rotateImage, rotateThumb, slideImage, slideThumbImage } from './index.data';

const App = () => {
 
  const [clickData, setClickData] = useState({
    image: clickImage,
    thumb: clickThumb,
  })

  const [clickConfig, setClickConfig] = useState({
    width: 300,
    height: 220,
  })

  const clickRef = useRef<ClickRef>(null);
  useEffect(() => {
    // setTimeout(() => {
    //   setClickConfig({...clickConfig, width: 500, height: 500})
    // }, 2000)

    setTimeout(() => {
      // clickRef.current?.reset()
      // clickRef.current?.clear()
      // clickRef.current?.refresh()
      // clickRef.current?.close()
    }, 3000)

  }, [])

  /////////////////////////////////////////////////

  const [slideData, setSlideData] = useState({
    thumbX: 20,
    thumbY: 20,
    thumbWidth: 80,
    thumbHeight: 80,
    image: slideImage,
    thumb: slideThumbImage,
  })

  const [slideConfig, setSlideConfig] = useState({
    width: 300,
    height: 220,
    scope: true,
  })

  const slideRef = useRef<SlideRef>(null);
  useEffect(() => {
    // setTimeout(() => {
    //   setSlideConfig({...slideConfig, width: 500, height: 500})
    // }, 2000)

    setTimeout(() => {
      // slideRef.current?.reset()
      // slideRef.current?.clear()
      // slideRef.current?.refresh()
      // slideRef.current?.close()
    }, 3000)

  }, [])


  ////////////////////////////////////

  const [slideRegionData, setSlideRegionData] = useState({
    thumbX: 20,
    thumbY: 20,
    thumbWidth: 80,
    thumbHeight: 80,
    image: slideImage,
    thumb: slideThumbImage,
  })

  const [slideRegionConfig, setSlideRegionConfig] = useState({
    width: 300,
    height: 220,
    scope: true,
  })

  const slideRegionRef = useRef<SlideRegionRef>(null);
  useEffect(() => {
    // setTimeout(() => {
    //   setSlideRegionConfig({...slideRegionConfig, width: 500, height: 500})
    // }, 2000)

    setTimeout(() => {
      // slideRegionRef.current?.reset()
      // slideRegionRef.current?.clear()
      // slideRegionRef.current?.refresh()
      // slideRegionRef.current?.close()
    }, 3000)

  }, [])

  ///////////////////////////////////

  const [rotateData, setRotateData] = useState({
    image: rotateImage,
    thumb: rotateThumb,
    thumbSize: 195
  })

  const [rotateConfig, setRotateConfig] = useState({
    width: 300,
    height: 220,
    scope: true,
  })

  const rotateRef = useRef<RotateRef>(null);
  useEffect(() => {
    // setTimeout(() => {
    //   setRotateConfig({...rotateConfig, width: 500, height: 500})
    // }, 2000)

    setTimeout(() => {
      // rotateRef.current?.reset()
      // rotateRef.current?.clear()
      // rotateRef.current?.refresh()
      // rotateRef.current?.close()
    }, 3000)

  }, [])


  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <br />
      <GoCaptcha.Click
        data={clickData}
        events={{
          click(x: number, y: number): void {
            console.log("click >>>>>>>", x, y)
          },
          confirm(dots: any, reset: Function): void {
            console.log("dots >>>>>>>", dots)

            setTimeout(() => {
              reset()
            }, 100)
          },
          refresh(): void {
            console.log("refresh >>>>>>>")
            setClickData({...clickData, image: clickImage2})
          },
          close(): void {
            console.log("close >>>>>>>")
          }
        }}
        config={clickConfig}
        ref={clickRef}
      />
      <br />
      <GoCaptcha.Slide
        data={slideData}
        events={{
          move(x: number, y: number): void {
            console.log("move >>>>>>>", x, y)
          },
          confirm(point: any, reset: Function): void {
            console.log("point >>>>>>>", point)

            setTimeout(() => {
              reset()
            }, 100)
          },
          refresh(): void {
            console.log("refresh >>>>>>>")
            setSlideData({...slideData, thumbX: 40, thumbY: 60, image: clickImage2})
          },
          close(): void {
            console.log("close >>>>>>>")
          }
        }}
        config={slideConfig}
        ref={slideRef}
      />
      <br />
      <GoCaptcha.SlideRegion
        data={slideRegionData}
        events={{
          move(x: number, y: number): void {
            console.log("move >>>>>>>", x, y)
          },
          confirm(point: any, clear: Function): void {
            console.log("point >>>>>>>", point)

            setTimeout(() => {
              clear()
            }, 100)
          },
          refresh(): void {
            console.log("refresh >>>>>>>")
            setSlideRegionData({...slideRegionData, thumbX: 40, thumbY: 60, image: clickImage2})
          },
          close(): void {
            console.log("close >>>>>>>")
          }
        }}
        config={slideRegionConfig}
        ref={slideRegionRef}
      />
      <br />
      <GoCaptcha.Rotate
        data={rotateData}
        events={{
          rotate(angle: number): void {
            console.log("rotate >>>>>>>", angle)
          },
          refresh(): void {
            console.log("refresh >>>>>>>")
            setRotateData({...rotateData, image: clickImage2})
          },
          close(): void {
            console.log("close >>>>>>>")
          },
          confirm(point: any, reset: Function): void {
            console.log("point >>>>>>>", point)

            setTimeout(() => {
              reset()
            }, 100)
          }
        }}
        config={rotateConfig}
        ref={rotateRef}
      />
      <br />
      <GoCaptcha.Button />
      <br />
      <br />
    </div>
  );
};

const rootElement: any = document.getElementById('root');
// const root = createRoot(rootElement);
// root.render(<App/>);
ReactDOM.render(<App />, rootElement);