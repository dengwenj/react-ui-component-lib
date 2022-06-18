import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProLayout, SettingDrawer } from '@ant-design/pro-components';
import { Avatar, Button, Descriptions, Result, Space, Statistic } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps'
import { useNavigate, Outlet } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()

  const [pathname, setPathname] = useState('/');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        menuItemRender={(item: any, dom: any) => (
          <a
            onClick={() => {
              console.log(item)
              navigate(item.path, { replace: true })
              setPathname(item.path || '/')
            }}
          >
            {dom}
          </a>
        )}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default Layout
