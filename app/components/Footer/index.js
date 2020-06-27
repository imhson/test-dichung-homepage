import React from 'react';
import HeaderLink from '../Header/HeaderLink';
import LogoPic from './logo.png';
import IconPic from '../../images/instagram.png';
import Logo from './Logo';
import Icon from './Icon';
import MailIcon from './mail.png';
import LocationIcon from './location.png';
import Wrapper from './Wrapper';
import ContentBlock from './ContentBlock';
import InfoBlock from './InfoBlock';
import Text from './Text';
function Footer() {
  return (
    <Wrapper>
      <section
        style={{
          flexDirection: 'row',
          display: 'flex',
          flex: 1,
        }}
      >
        <div
          style={{
            marginLeft: 165,
            marginTop: 41,
          }}
        >
          <Logo src={LogoPic} alt="react-boilerplate - Logo" />
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Icon src={IconPic} alt="react-boilerplate - Logo" />
            <Icon src={IconPic} alt="react-boilerplate - Logo" />
            <Icon src={IconPic} alt="react-boilerplate - Logo" />
            <Icon src={IconPic} alt="react-boilerplate - Logo" />
          </div>
        </div>
        <div style={{ marginTop: 41, marginLeft: 85, display: 'flex' }}>
          <ContentBlock
            title="Chương trình"
            content={[
              'Khách hàng tổ chức',
              'Đối tác kinh doanh',
              'Đối tác vận chuyển',
            ]}
          />
          <ContentBlock
            title="Hỗ trợ"
            content={[
              'Hướng dẫn sử dụng',
              'Câu hỏi thường gặp',
              'Cẩm nang đi lại',
            ]}
          />
          <ContentBlock
            title="Chính sách"
            content={[
              'Vận chuyển hành khách',
              'Bảo vệ quyền riêng tư',
              'Sử dụng dịch vụ',
              'Sự cố & khiếu nại',
            ]}
          />
          <div>
            <InfoBlock src={MailIcon} content="admin@dichung.vn" />
            <InfoBlock
              src={LocationIcon}
              content="Tầng 4, 166 Phố Huế, Hà Nội"
            />
            <InfoBlock
              src={LocationIcon}
              content="Tầng 3, 131 Trần Phú, Đà Nẵng"
            />
            <InfoBlock
              src={LocationIcon}
              content="Tầng 7, 145 Điện Biên Phủ, Quận 1, Thành Phố Hồ Chí Minh"
            />
          </div>
        </div>
      </section>
      <section
        style={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          marginBottom: 37,
        }}
      >
        <Text style={{ textAlign: 'center' }}>
          Bản quyền 2019 thuộc về công ty cổ phần Đi Chung
        </Text>
        <HeaderLink style={{ margin: 0, padding: 0 }} to="/">
          <Text style={{ textAlign: 'center' }}>
            Quy định sử dụng | Điều khoản riêng tư
          </Text>
        </HeaderLink>
      </section>
    </Wrapper>
  );
}

export default Footer;
