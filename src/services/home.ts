import { ApiPageResult, PageQueryParams } from '@/services/types';
import { request } from '@umijs/max';

export interface MessageListItem {
  id: number;
  issuerTime: string;
  noticeCategoryName: string;
  readIs: boolean;
  title: string;
}

export function getMessageList(data: PageQueryParams) {
  return request<ApiPageResult<MessageListItem>>('/home/sys/notice/page', {
    data,
    method: 'post',
  });
}
