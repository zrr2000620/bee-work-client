import { Space } from 'antd';
import CardTitle from '../CardTitle';
import { StudyItem, StydyItemText } from './styled.components';
import { Link } from '@umijs/max';
import { ScrollArea } from '..';
import { CSSProperties } from 'react';

interface StudyListProps {
  justifyContent?: CSSProperties['justifyContent'];
}

const StudyList = (props: StudyListProps) => {
  const { justifyContent } = props;
  return (
    <>
      <CardTitle
        icon="icon-xuexi"
        title="学习帮助"
        style={{ marginBottom: 24 }}
      />
      <ScrollArea>
        <Space size={[40, 40]} wrap style={{ justifyContent }}>
          <StudyItem>
            <Link to="/">
              <img src="" />
            </Link>
            <StydyItemText ellipsis={{ rows: 2 }}>
              <Link to="/">口子查学习教程视频口子查学习教程视频口子查学</Link>
            </StydyItemText>
          </StudyItem>
          <StudyItem>
            <Link to="/">
              <img src="" />
            </Link>
            <StydyItemText ellipsis={{ rows: 2 }}>
              <Link to="/">口子查学习教程视频口子查学习教程视频口子查学</Link>
            </StydyItemText>
          </StudyItem>
          <StudyItem>
            <Link to="/">
              <img src="" />
            </Link>
            <StydyItemText ellipsis={{ rows: 2 }}>
              <Link to="/">口子查学习教程视频口子查学习教程视频口子查学</Link>
            </StydyItemText>
          </StudyItem>
          <StudyItem>
            <Link to="/">
              <img src="" />
            </Link>
            <StydyItemText ellipsis={{ rows: 2 }}>
              <Link to="/">口子查学习教程视频口子查学习教程视频口子查学</Link>
            </StydyItemText>
          </StudyItem>
        </Space>
      </ScrollArea>
    </>
  );
};

export default StudyList;
