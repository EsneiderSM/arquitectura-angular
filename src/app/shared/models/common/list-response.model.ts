import { InfoModel } from './info.model';

export class ListResponseModel<T> {
    public info: InfoModel;
    public results: T[];
}
