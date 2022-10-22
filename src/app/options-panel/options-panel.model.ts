export interface Options {
  optionsName: {typeOfEvent: string[]; placeOfEvent: string[]};
  eventOptionsName: {favourite: string; participation: string[]};
}

export interface AdminOptions extends Options {
  adminOptionsName: string[];
  adminEventOptionsName: string[];
}
