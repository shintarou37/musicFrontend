export interface MusicObj {
  "ID": number,
  "Name": string,
  "Artist": string,
  "Reason": string,
  "Mst_situationName": string,
  "UserName": string,
}
export interface MusicObjEdit {
  "ID": number,
  "Name": string,
  "Artist": string,
  "Reason": string,
  "Mst_situationName": string,
  "UserName": string,
  "Mst_situationID": string
}

export interface SituationObj {
  "ID": number,
  "CreatedAt": string,
  "UpdatedAt": string,
  "DeletedAt": null,
  "Name": string,
  "Musics": null
}

export interface IsNew {
  "isNew": boolean
  "setIsNew": Function
}

export interface searchArg {
  Mst_situation: SituationObj[]
  search: string
  setSearch: Function
}

export interface registerArg {
  situations: React.ReactNode
  name: string
  artist: string
  reason: string
  setSituation: Function
  setName: Function
  setArtist: Function
  setReason: Function
  sendRegister: any
  setIsNew: Function
  situation: string
  setErrMessage: Function
  search: string
}

export interface listArg {
  music: MusicObj[]
}
export interface detailListArg {
  data: MusicObj
  createdAt: string
  updatedAt: string
}
export interface editForm {
  Mst_situation: SituationObj[]
  Music: MusicObjEdit
}
export interface editArg {
  data: editForm
  setisEdit: Function
  setErrMessage: Function
}
