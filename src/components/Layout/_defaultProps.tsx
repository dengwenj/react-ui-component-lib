import { AntDesignOutlined } from '@ant-design/icons'

const defaultProps = {
  route: {
    path: '/',
    routes: [
      {
        path: '/dwj1',
        name: '欢迎',
        icon: <AntDesignOutlined />
      },
      {
        path: '/dwj2',
        name: '管理页',
        icon: <AntDesignOutlined />,
        routes: [
          {
            path: '/dwj3',
            name: '一级页面',
            icon: <AntDesignOutlined />,
          },
          {
            path: '/dwj4',
            name: '二级页面',
            icon: <AntDesignOutlined />,
          },
          {
            path: '/dwj5',
            name: '三级页面',
            icon: <AntDesignOutlined />,
          },
        ],
      },
      {
        name: '列表页',
        path: '/dwj6',
        icon: <AntDesignOutlined />,
        routes: [
          {
            path: '/dwj7',
            name: '一级列表页面',
            icon: <AntDesignOutlined />,
            routes: [
              {
                path: '/dwj8',
                name: '一一级列表页面',
                icon: <AntDesignOutlined />,
              },
              {
                path: '/dwj9',
                name: '一二级列表页面',
                icon: <AntDesignOutlined />,
              },
              {
                path: '/dwj10',
                name: '一三级列表页面',
                icon: <AntDesignOutlined />,
              },
            ],
          },
          {
            path: '/dwj11',
            name: '二级列表页面',
            icon: <AntDesignOutlined />,
          },
          {
            path: '/dwj12',
            name: '三级列表页面',
            icon: <AntDesignOutlined />,
          },
        ],
      },
      {
        path: '/dwj',
        name: 'Ant Design 官网外链',
        icon: <AntDesignOutlined />,
      },
    ],
  },
  // location: {
  //   pathname: '/',
  // },
}
export default defaultProps
