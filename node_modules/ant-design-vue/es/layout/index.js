import _extends from "@babel/runtime/helpers/esm/extends";
import Layout, { Header, Footer, Content } from './layout';
import Sider from './Sider';
/* istanbul ignore next */
export var LayoutHeader = Header;
export var LayoutFooter = Footer;
export var LayoutSider = Sider;
export var LayoutContent = Content;
export default _extends(Layout, {
  Header: Header,
  Footer: Footer,
  Content: Content,
  Sider: Sider,
  install: function install(app) {
    app.component(Layout.name, Layout);
    app.component(Header.name, Header);
    app.component(Footer.name, Footer);
    app.component(Sider.name, Sider);
    app.component(Content.name, Content);
    return app;
  }
});