import { Button, List } from 'antd';
import { CardTitle, ScrollArea } from '..';
import { MessageLink } from './styled.components';
import { useInfiniteScroll } from 'ahooks';
import { getMessageList, MessageListItem } from '@/services/home';
import { useRef } from 'react';

interface Data {
  list: MessageListItem[];
  total?: number;
  num?: number;
}

const MessageList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { loading, data, loadingMore, loadMore, noMore } = useInfiniteScroll(
    async (data?: Data) => {
      const {
        data: { list, total },
      } = await getMessageList({
        data: {},
        page: {
          num: data?.num ?? 1,
          size: 10,
        },
      });

      return {
        list,
        total,
        num: data?.num ? data.num + 1 : 2,
      };
    },
    {
      target: scrollRef,
      isNoMore: (data) => !data || data.list.length >= data.total,
    },
  );
  return (
    <>
      <CardTitle icon="icon-xitong" title="系统消息" />
      <ScrollArea ref={scrollRef}>
        <List
          dataSource={data?.list}
          loadMore={
            <div style={{ textAlign: 'center' }}>
              {noMore &&
                data?.list.length !== 0 &&
                !loadingMore &&
                !loadingMore && <div>没有更多了</div>}
              {loadingMore && <div>加载中...</div>}
              {!noMore && !loadingMore && (
                <Button onClick={() => loadMore()}>点击加载更多</Button>
              )}
            </div>
          }
          loading={loading}
          renderItem={(item) => (
            <List.Item>
              <MessageLink
                to={`/message/${item.id}`}
                className={item.readIs ? '' : 'unread'}
              >
                {item.title}
              </MessageLink>
            </List.Item>
          )}
          rowKey="id"
          split={false}
        />
      </ScrollArea>
    </>
  );
};

export default MessageList;
