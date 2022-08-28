export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface GetPrefecturesResponseData {
  message: string | null;
  result: Prefecture[];
}
