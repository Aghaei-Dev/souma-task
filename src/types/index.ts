export type PostsType = {
  brief: string
  contentAttachmentId: null | number
  contentTypeId: number
  contentTypeTitle: string
  fileContent: string
  id: number
  isActive: boolean
  publishDate: string
  sourceTypeId: number
  sourceTypeTitle: string
  sourceUrl: null | string
  tages: { tagId: number; title: string }[]
  title: string
  visitCount: number
}[]
