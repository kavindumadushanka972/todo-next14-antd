import React from 'react';
import { Layout } from 'antd';

/**
 * Renders the Footer component.
 *
 * @return {ReactElement} The rendered Footer component.
 */
const FooterComponent: React.FC = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2023 Created by Kavindu
    </Footer>
  );
};

export default FooterComponent;
