import { PayType } from '@/constants';
import { Col, Row } from 'antd';
import IconFont from '../IconFont';
import { RadioWrap } from './styled.components';

interface PayTypeRadioProps {
  value?: PayType;
  onChange?: (value?: PayType) => void;
}

const PayTypeRadio = (props: PayTypeRadioProps) => {
  const { value, onChange } = props;
  return (
    <Row justify="space-around">
      <Col>
        <RadioWrap
          onClick={() => {
            onChange?.(PayType.WECHAT);
          }}
          className={value === PayType.WECHAT ? 'active' : undefined}
        >
          <IconFont type="icon-weixinzhifu" />
        </RadioWrap>
      </Col>
      <Col>
        <RadioWrap
          onClick={() => {
            onChange?.(PayType.ALI);
          }}
          className={value === PayType.ALI ? 'active' : undefined}
        >
          <IconFont type="icon-zhifubaozhifu" />
        </RadioWrap>
      </Col>
    </Row>
  );
};

export default PayTypeRadio;
