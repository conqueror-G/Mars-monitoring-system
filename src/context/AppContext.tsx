import { DiaryStore } from '../stores/DiaryStore'

export class AppContext {
  public readonly diaryStore: DiaryStore

  constructor() {
    this.diaryStore = new DiaryStore()
  }
}
