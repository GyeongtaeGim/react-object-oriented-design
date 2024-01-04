import DataClient, { DataDecorator } from './data';

@DataDecorator('/comment')
export default class Comment extends DataClient {
  id: number;
  postId: number;
  content: string;
}
