interface SearchInfoData {
    searchTime: number
    formattedSearchTime: string
    totalResults: string
    formattedTotalResults: string
}

interface ResultData {
    kind: string
    title: string
    htmlTitle: string
    link: string
    displayLink: string
    snippet: string
    htmlSnippet: string
    cacheId: string
    htmlFormattedUrl: string
    formattedUrl: string
}

interface SearchDataResponse {
    kind: string
    url: {
    type: string
    template: string
  }
    queries: { request: [ [Object] ], nextPage: [ [Object] ] }
    context: { title: 'goo-nextjs14' }
    searchInformation?: SearchInfoData
    items: ResultData[]
}

interface ImageData {
    contextLink: string
    height: number
    width: number
    byteSize: number
    thumbnailLink: string,
    thumbnailHeight: number,
    thumbnailWidth: number
}

interface ResultImageData extends ResultData {
    mime: string
    fileFormat: string
    image: ImageData
}

interface SearchImageDataResponse extends SearchDataResponse {
   items: ResultImageData[]
}

export type { SearchInfoData, ResultData, SearchDataResponse, ImageData, ResultImageData, SearchImageDataResponse }