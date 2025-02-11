import React from "react";
import {
  RsdInput, RsdMentions, RsdNumber, RsdSelectableButton, RsdSwitch, RsdTitle,
  ScrollBar,
  rss,
  rsbStyles, ThemeProvider, rvGlobalService,
  historyManager
} from "../api";
import styles from './drawer.module.sass'
import { Operate, RvGlobal, ThemeColor } from "oflow-interface";
import {StoredRhineVar, useRhine} from "rhine-var";
import {clsx} from "clsx";

export default function Drawer() {

  const state = rvGlobalService.state as StoredRhineVar<RvGlobal>
  const snap = useRhine<RvGlobal>(state) as Readonly<RvGlobal>

  return <ThemeProvider theme={ThemeColor.GREEN}>
    <div className={clsx(rss.drawer, styles.projectDrawerView)}>
      <ScrollBar className={clsx(rss.main, 'bottom-margin-12')}>
        <div className={clsx(rss.content, styles.content)}>
          <RsdTitle title='Base Information' className={styles.title1}/>
          <RsdInput placeholder='Title' value={snap.information.title} onChange={v => {
            historyManager.check(Operate.GLOBAL_INFORMATION_TITLE)
            state.information.title = v
          }}/>
          <RsdInput placeholder='Description' value={snap.information.description} onChange={v => {
            historyManager.check(Operate.GLOBAL_INFORMATION_DESCRIPTION)
            state.information.description = v
          }} rows={4}/>
          <RsdMentions placeholder='Tags' value={snap.information.tags} onChange={v => {
            historyManager.check(Operate.GLOBAL_INFORMATION_TAGS)
            state.information.tags = v
          }}/>
          {/*<div className={clsx(rss.divider, styles.divider1)}/>*/}
          <RsdTitle title='3D Support' className={styles.title2}/>
          <div className={styles.line}>
            <RsdSelectableButton label='VR Headset' value={snap.support.VR} onChange={v => {
              historyManager.check(Operate.GLOBAL_SUPPORT_VR)
              state.support.VR = v
            }}>
              <div className={rsbStyles.iconHolder} style={{
                right: 2,
                bottom: -19
              }}>
                <svg viewBox="0 0 60 60" className={rsbStyles.scale125}>
                  <path className={rsbStyles.line} d="M54.72,38.83c-1.84,4.33-5.54,7.11-8.94,7.07-7.05-.06-11.62-4.95-16-5.31a2.88,2.88,0,0,0-.48,0c-4.38.36-8.47,5.75-16,5.31-3.8-.21-7.22-2.28-8.94-7.07a17.86,17.86,0,0,1-.82-7.38,1.21,1.21,0,0,1,0-.19,9.83,9.83,0,0,1,.15-1.07s0,0,0,0A10,10,0,0,1,5.1,26.69a10.71,10.71,0,0,1,1-1.31,14.55,14.55,0,0,1,4.36-3.28,24.52,24.52,0,0,1,5.69-2A55.58,55.58,0,0,1,29.54,19a55.58,55.58,0,0,1,13.4,1.07,24.52,24.52,0,0,1,5.69,2A14.55,14.55,0,0,1,53,25.38a10.71,10.71,0,0,1,1,1.31,10,10,0,0,1,1.39,3.47v0a7.9,7.9,0,0,1,.16,1.07c0,.06,0,.13,0,.19A16.26,16.26,0,0,1,54.72,38.83Z"/>
                  <path className={rsbStyles.line} d="M52.27,34.9a10.55,10.55,0,0,1-7.79,5c-5.15.71-10.19-1.88-15.41-1.8-4.73.08-9.23,2.33-13.93,1.91a10.82,10.82,0,0,1-8.26-4.84,7.78,7.78,0,0,1,.39-8.48c2.12-3,6.13-4.65,10.14-5.48a65.83,65.83,0,0,1,15.45-.8,48.63,48.63,0,0,1,10.25,1.14c6.69,1.69,12.45,7.06,9.26,13.2A1.62,1.62,0,0,1,52.27,34.9Z"/>
                </svg>
              </div>
            </RsdSelectableButton>
            <RsdSelectableButton label='AR Device' value={snap.support.AR} onChange={v => {
              historyManager.check(Operate.GLOBAL_SUPPORT_AR)
              state.support.AR = v
            }}>
              <div className={rsbStyles.iconHolder} style={{
                right: 6,
                bottom: -14
              }}>
                <svg viewBox="0 0 60 60" className={rsbStyles.scale125}>
                  <path className={rsbStyles.line} d="M31.87,20a10.3,10.3,0,0,0-10.3,10.3,10.44,10.44,0,0,0,.36,2.76,10.84,10.84,0,0,0,.7,1.8,10.31,10.31,0,0,0,18.48,0,10,10,0,0,0,.69-1.8,10.45,10.45,0,0,0,.37-2.76A10.3,10.3,0,0,0,31.87,20Z"/>
                  <path className={rsbStyles.fill} d="M10.27,39.79,10,39.73c-.31-.08-.44-.33-.31-.56L10.92,37a.65.65,0,0,1,.67-.22l.23.06c.27.07.41.27.31.46L11,39.5A.72.72,0,0,1,10.27,39.79Z"/>
                  <path className={rsbStyles.line} d="M57.05,42.78a2,2,0,0,1-2,2H8.62a2,2,0,0,1-2-2,2.58,2.58,0,0,1,0-.39,2,2,0,0,1,.19-.52l4-7.75a2,2,0,0,1,1.75-1.06h9.29a10,10,0,0,0,.7,1.8,10.31,10.31,0,0,0,18.48,0,10,10,0,0,0,.69-1.8H51a2,2,0,0,1,1.77,1.06l4,7.75a2,2,0,0,1,.19.52A2.58,2.58,0,0,1,57.05,42.78Z"/>
                  <path className={rsbStyles.line} d="M6.64,48.54V42.78a2,2,0,0,0,2,2H55.06a2,2,0,0,0,2-2v5.76"/>
                  <path className={rsbStyles.line} d="M37.52,29.4c-.71-.78-1.52-2-2.17-2.61s-1.83-1.46-2.6-2.17a1.24,1.24,0,0,1,.67-2.07c1-.13,2.59.69,4,2.12s2.25,3,2.12,4A1.24,1.24,0,0,1,37.52,29.4Z"/>
                </svg>
              </div>
            </RsdSelectableButton>
          </div>
          <div className={styles.line}>
            <RsdSelectableButton label='MR Headset' value={snap.support.MR} onChange={v => {
              historyManager.check(Operate.GLOBAL_SUPPORT_MR)
              state.support.MR = v
            }}>
              <div className={rsbStyles.iconHolder} style={{
                right: 5,
                bottom: -20
              }}>
                <svg viewBox="0 0 60 60" className={rsbStyles.scale125}>
                  <g>
                    <path className={rsbStyles.line} d="M55.42,38.9A12.42,12.42,0,0,1,50,44.75a12.71,12.71,0,0,1-15-2.64,7.46,7.46,0,0,0-2.06-2,2.87,2.87,0,0,0-2.67,0,7.57,7.57,0,0,0-2.05,2,12.73,12.73,0,0,1-15,2.64A12.53,12.53,0,0,1,7.85,38.9"/>
                    <path className={rsbStyles.line} d="M7.78,28.53c2-4.46,6.48-7.68,11.15-9.42A36.55,36.55,0,0,1,31.64,17a36.5,36.5,0,0,1,12.7,2.11c4.68,1.74,9.13,5,11.16,9.42"/>
                    <rect className={rsbStyles.line} x="18.41" y="26.78" width="4.41" height="9.56" rx="1.99"/>
                    <rect className={rsbStyles.line} x="28.78" y="26.78" width="4.41" height="9.56" rx="1.99"/>
                    <rect className={rsbStyles.line} x="39.16" y="26.78" width="4.41" height="9.56" rx="1.99"/>
                    <path className={rsbStyles.fill} d="M6.44,28.53H7.85a0,0,0,0,1,0,0V38.9a0,0,0,0,1,0,0H6.44a3.08,3.08,0,0,1-3.08-3.08V31.6A3.08,3.08,0,0,1,6.44,28.53Z"/>
                    <path className={rsbStyles.fill} d="M55.35,28.53h1.57a3.16,3.16,0,0,1,3.16,3.16v4.06a3.16,3.16,0,0,1-3.16,3.16H55.35a0,0,0,0,1,0,0V28.53A0,0,0,0,1,55.35,28.53Z"/>
                  </g>
                </svg>
              </div>
            </RsdSelectableButton>
            <RsdSelectableButton label='HP Magic Box' value={snap.support.HP} onChange={v => {
              historyManager.check(Operate.GLOBAL_SUPPORT_HP)
              state.support.HP = v
            }}>
              <div className={rsbStyles.iconHolder} style={{
                right: -1,
                bottom: -26
              }}>
                <svg viewBox="0 0 60 60" className={rsbStyles.scale125}>
                  <g>
                    <g>
                      <path className={rsbStyles.fill} d="M2.62,13.62,9.76,20,21.05,30.17l2.62,2.35c.24.21.59-.14.35-.36l-7.14-6.41L5.6,15.62,3,13.27c-.24-.22-.6.13-.36.35Z"/>
                      <path className={rsbStyles.fill} d="M56.53,17l-7.45,5.1L37.2,30.24l-2.75,1.89c-.27.18,0,.61.25.43l7.45-5.1L54,19.32l2.74-1.88c.27-.18,0-.62-.25-.43Z"/>
                      <line className={rsbStyles.line} x1="35.87" y1="11.55" x2="29.96" y2="32.34"/>
                      <line className={rsbStyles.line} x1="35.87" y1="11.55" x2="2.8" y2="13.44"/>
                      <path className={rsbStyles.fill} d="M56.73,17l-7-1.91L38.51,12l-2.57-.71c-.31-.08-.45.4-.14.48l7,1.92L54,16.76l2.58.7a.25.25,0,0,0,.14-.48Z"/>
                    </g>
                    <polyline className={rsbStyles.line} points="33.63 32.34 56.66 32.34 56.66 43.27 35.87 47.46"/>
                    <line className={rsbStyles.line} x1="29.01" y1="32.34" x2="33.63" y2="32.34"/>
                    <line className={rsbStyles.line} x1="22.9" y1="32.34" x2="29.01" y2="32.34"/>
                    <polyline className={rsbStyles.line} points="35.87 47.46 2.8 43.27 2.8 32.34 22.9 32.34"/>
                    <line className={rsbStyles.line} x1="35.87" y1="32.29" x2="35.87" y2="47.69"/>
                  </g>
                </svg>
              </div>
            </RsdSelectableButton>
          </div>
          {/*<div className={clsx(rss.divider, styles.divider2)}/>*/}
          <RsdTitle title='Playing Config' className={styles.title3}/>
          <RsdSwitch label='Enable Auto Play' value={snap.playing.auto} onChange={v => {
            historyManager.check(Operate.GLOBAL_PLAYING_AUTO)
            state.playing.auto = v
          }}/>
          <RsdSwitch label='Enable Loop' value={snap.playing.loop} onChange={v => {
            historyManager.check(Operate.GLOBAL_PLAYING_LOOP)
            state.playing.loop = v
          }}/>
          <RsdNumber label='Interval' value={snap.playing.interval} onChange={v => {
            historyManager.check(Operate.GLOBAL_PLAYING_INTERVAL)
            state.playing.interval = v
          }}/>
          <div className={rss.block}/>
        </div>
      </ScrollBar>
    </div>
  </ThemeProvider>
}
