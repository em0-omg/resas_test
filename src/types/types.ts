export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface GetPrefecturesResponseData {
  message: string | null;
  result: Prefecture[];
}

export interface GetPopulationApiParameters {
  prefCode: number;
  cityCode: number | '-';
  addArea?: string;
  /*
  addArea: 追加エリアコード
  他地域と合算した値を取得する際に使用するパラメータです。 「addArea=都道府県コード_市区町村コード」の形式で指定します。 複数指定する場合は「addArea=1_01100,13_13101」などのように、「,」 で各地域のパラメータを区切ります。 都道府県単位で指定する場合、「addArea=1_,13_」の形式で指定します。 最大10個指定でき、11個以上送られてきた場合はステータスコード400を返します。 「cityCode」で「すべての市区町村」(-)を選択した場合、addAreaで合算されるのは、都道府県単位の数値となります。 また、「cityCode」でいずれかの市区町村(13101など)を選択した場合、addAreaで合算されるのは、市区町村単位の数値となります。
  */
}

export interface GetPopulationResult {
  boundaryYear: number;
  data: {
    label: string;
    data: {
      year: number;
      value: number;
    }[];
  }[];
}

export interface GetPopulationResponseData {
  message: string | null;
  result: GetPopulationResult;
}
