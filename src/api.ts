import {OfpApi, SpaceServiceApi} from "oflow-interface";

export let SpaceService: typeof SpaceServiceApi;

export function loadApi(api: OfpApi) {
  SpaceService = api.main.SpaceServiceApi;
}
