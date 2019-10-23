import { IPage, IHost, Host } from '@shared/models';

export interface IHostSearchResult extends IPage {
  lists: IHost[];
}

export interface IHostPage extends IPage {
  lists: Host[];
}

