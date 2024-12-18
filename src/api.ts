import {OfpApi, SpaceServiceApi, RsdInputProps, RsdButtonProps, AnchorProps, StatusServiceApi, LocalFileServiceApi, InternationalizationServiceApi, MeetingServiceApi, PluginServiceApi, UserServiceApi} from "oflow-interface";
import React, {FunctionComponent} from "react";
import * as SourceBabylonCore from "@babylonjs/core";

export let SpaceService: typeof SpaceServiceApi
export let StatusService: typeof StatusServiceApi
export let LocalFileService: typeof LocalFileServiceApi
export let Internationalization: typeof InternationalizationServiceApi
export let MeetingService: typeof MeetingServiceApi
export let PluginService: typeof PluginServiceApi
export let UserService: typeof UserServiceApi

export let Anchor: FunctionComponent<AnchorProps>

export let RsdButton: FunctionComponent<RsdButtonProps>
export let RsdInput: FunctionComponent<RsdInputProps>

export let rss: { [key: string]: string }

export let SpaceReact: typeof React
// export let useActionState: typeof React.useActionState
export let useCallback: typeof React.useCallback
export let useContext: typeof React.useContext
export let useDebugValue: typeof React.useDebugValue
export let useDeferredValue: typeof React.useDeferredValue
export let useEffect: typeof React.useEffect
export let useId: typeof React.useId
export let useImperativeHandle: typeof React.useImperativeHandle
export let useInsertionEffect: typeof React.useInsertionEffect
export let useLayoutEffect: typeof React.useLayoutEffect
export let useMemo: typeof React.useMemo
// export let useOptimistic: typeof React.useOptimistic
export let useReducer: typeof React.useReducer
export let useRef: typeof React.useRef
export let useState: typeof React.useState
export let useSyncExternalStore: typeof React.useSyncExternalStore
export let useTransition: typeof React.useTransition

export let Babylon: typeof SourceBabylonCore

export function loadApi() {
  const api = (window as any).ofpConnector.ofpApi as OfpApi

  SpaceService = api.services.main.SpaceService
  StatusService = api.services.main.StatusService
  LocalFileService = api.services.main.LocalFileService
  Internationalization = api.services.main.Internationalization
  MeetingService = api.services.main.MeetingService
  PluginService = api.services.main.PluginService
  UserService = api.services.main.UserService

  rss = api.styles.rss

  Anchor = api.components.normal.Anchor

  RsdInput = api.components.rsd.RsdInput
  RsdInput = api.components.rsd.RsdInput

  SpaceReact = api.modules.react as any
  // useActionState = SpaceReact.useActionState
  useCallback = SpaceReact.useCallback
  useContext = SpaceReact.useContext
  useDebugValue = SpaceReact.useDebugValue
  useDeferredValue = SpaceReact.useDeferredValue
  useEffect = SpaceReact.useEffect
  useId = SpaceReact.useId
  useImperativeHandle = SpaceReact.useImperativeHandle
  useInsertionEffect = SpaceReact.useInsertionEffect
  useLayoutEffect = SpaceReact.useLayoutEffect
  useMemo = SpaceReact.useMemo
  // useOptimistic = SpaceReact.useOptimistic
  useReducer = SpaceReact.useReducer
  useRef = SpaceReact.useRef
  useState = SpaceReact.useState
  useSyncExternalStore = SpaceReact.useSyncExternalStore
  useTransition = SpaceReact.useTransition

  Babylon = api.modules.babylon
}
