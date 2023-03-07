import { Col, ColProps, Row } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { PageHeader } from '@/components/PageHeader';
import { ReactNode } from 'react';
import { ScrollCard, ScrollCardProps } from '@/components/card';
import { Outlet } from '@umijs/max';

type CommonContainerProps = ScrollCardProps;

interface BasicContainerProps extends CommonContainerProps {
  colProps?: ColProps;
}

const _Container = (props: { children?: ReactNode }) => {
  return <>{props.children}</>;
};

const BasicContainer = (props: BasicContainerProps) => {
  const { colProps, ...scrollCardProps } = props;
  return (
    <Col {...colProps}>
      <ScrollCard {...scrollCardProps} />
    </Col>
  );
};

const LeftContainer = (props: CommonContainerProps) => {
  return (
    <BasicContainer
      colProps={{
        flex: '1 0 0%',
        style: {
          width: 0,
        },
      }}
      {...props}
    />
  );
};

const RightContainer = (props: CommonContainerProps) => {
  return (
    <BasicContainer
      colProps={{
        flex: '408px',
        style: { overflow: 'hidden' },
      }}
      {...props}
    />
  );
};

const ExtraContainer = (props: CommonContainerProps) => {
  return (
    <BasicContainer
      colProps={{
        span: 24,
      }}
      {...props}
    />
  );
};

const CommonLayout = () => {
  return (
    <PageContainer pageHeaderRender={() => <PageHeader />}>
      <Row gutter={[12, 12]}>
        <Outlet />
      </Row>
    </PageContainer>
  );
};

export const Container: typeof _Container & {
  Left: typeof LeftContainer;
  Right: typeof RightContainer;
  Extra: typeof ExtraContainer;
} = _Container as any;

Container.Left = LeftContainer;
Container.Right = RightContainer;
Container.Extra = ExtraContainer;

export default CommonLayout;
