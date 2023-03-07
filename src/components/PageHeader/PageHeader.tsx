import { RouteContext, MenuDataItem } from '@ant-design/pro-components';
import { Breadcrumb, Button, Space } from 'antd';
import { useContext } from 'react';
import { BreadcrumbItem, CurrentBox, Wrap } from './styled-components';
import { Link } from '@umijs/max';

const PageHeader = () => {
  const context = useContext(RouteContext);
  const matchMenus = context.matchMenus?.concat();
  const isHome = matchMenus?.length === 1 && matchMenus[0].path === '/home';
  const mapBreadcrumb = () => {
    const breadcrumbList = (matchMenus ?? []).reduce((res, curr) => {
      if (!curr.name || res.includes(curr)) return res;
      return res.concat(curr);
    }, [] as MenuDataItem[]);

    if (!isHome) {
      breadcrumbList.unshift({
        path: '/home',
        name: '首页',
      });
    }

    return breadcrumbList.map((i, index) => (
      <BreadcrumbItem
        key={i.path}
        className={index === breadcrumbList.length - 1 ? 'active' : ''}
      >
        {index === breadcrumbList.length - 1 ? (
          i.name
        ) : (
          <Link to={i.path!}>{i.name}</Link>
        )}
      </BreadcrumbItem>
    ));
  };

  return (
    <Wrap>
      <Space size={0}>
        <CurrentBox>当前位置</CurrentBox>
        <Breadcrumb separator="">{mapBreadcrumb()}</Breadcrumb>
      </Space>

      <Space>
        <div>您好！当前账号非VIP用户，请充值</div>
        <Button type="primary">立即购买</Button>
      </Space>
    </Wrap>
  );
};

export default PageHeader;
