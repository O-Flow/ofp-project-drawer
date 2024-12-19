import {OfpApi, SpaceServiceApi} from "oflow-interface";

export let SpaceService: typeof SpaceServiceApi;

export function loadApi() {
  const api = (window as any).ofpConnector.ofpApi
  SpaceService = api.services.main.SpaceService;
}
