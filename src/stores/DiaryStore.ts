import { makeAutoObservable } from 'mobx'

export class DiaryStore {
  constructor() {
    makeAutoObservable(this)
  }
}
