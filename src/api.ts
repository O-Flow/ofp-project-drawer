import {OfpApi, SpaceServiceApi} from "oflow-interface";

export let SpaceService: typeof SpaceServiceApi;

export function loadApi() {
  const api = window.ofpConnector.ofpApi
  SpaceService = api.services.main.SpaceService;
}
