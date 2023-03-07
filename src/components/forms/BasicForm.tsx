import { ProForm, ProFormProps } from '@ant-design/pro-components';
import { Button, theme } from 'antd';
import { ReactNode, useState } from 'react';

const BasicForm = <T,>(
  props: Omit<ProFormProps<T>, 'submitter'> & {
    children?: ReactNode | ReactNode[];
    submitText?: string;
  },
) => {
  const { submitText, children, onFinish, ...restProps } = props;
  const { token } = theme.useToken();
  const [loading, setLoading] = useState(false);
  return (
    <ProForm<T>
      submitter={false}
      onFinish={async (v) => {
        try {
          setLoading(true);
          await onFinish?.(v);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          throw err;
        }
      }}
      style={{ paddingInline: token.paddingSM }}
      {...restProps}
    >
      {children}
      <Button
        type="primary"
        style={{
          width: 280,
          marginBottom: token.marginLG,
          left: '50%',
          marginLeft: -140,
        }}
        loading={loading}
        htmlType="submit"
      >
        {submitText ?? '提交'}
      </Button>
    </ProForm>
  );
};

export default BasicForm;
