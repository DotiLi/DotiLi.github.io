import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Home() {

  return(
    <div className="containter" id="box">
      <p>Life is full of joy</p>
      <div className="html">
        <p>HTML Guide</p>
        <a href="https://developer.mozilla.org/zh-CN/docs/Web"><span>Web 开发技术索引</span></a>
        <a href="https://html.spec.whatwg.org/multipage/"><span>HTML Living Standard</span></a>
      </div>
      <div className="css">
        <p>CSS Guide</p>
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference"><span>CSS参考索引</span></a>
        <a href="https://www.sass.hk/guide/"><span>sass/scss中文文档</span></a>
        <a href="https://sass-lang.com/guide"><span>sass/scss英文文档</span></a>
        <a href="https://caniuse.com/"><span>Caniuse</span></a>
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"><span>A Complete Guide to Flexbox</span></a>
        <a href="https://www.w3cplus.com/CSS3"><span>CSS3的一些技巧</span></a>
      </div>
      <div className="javascript">
        <p>JavaScript Guide</p>
        <a href="http://nodejs.cn/api/"><span>Nodejs中文文档</span></a>
        <a href="https://nodejs.org/dist/latest-v12.x/docs/api/"><span>Nodejs英文文档</span></a>
        <a href="https://wangdoc.com/javascript/"><span>JavaScript 教程</span></a>
        <a href="https://es6.ruanyifeng.com/"><span>ES6入门教程</span></a>
        <a href="https://standardjs.com/"><span>JavaScript Standard Style</span></a>
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript"><span>速揽回顾JavaScript</span></a>
      </div>
      <div className="react">
        <p>React Guide</p>
        <a href="https://zh-hans.reactjs.org/docs/getting-started.html"><span>React文档</span></a>
        <a href="https://material-ui.com/zh/getting-started/installation/"><span>Material-ui文档</span></a>
        <a href="https://reactrouter.com/web/example/basic"><span>React-Router文档</span></a>
        <a href="https://www.taniarascia.com/getting-started-with-react/"><span>React Tutorial: An Overview and Walkthrough</span></a>
        <a href="https://react-hook-form.com/zh/get-started/"><span>react-hook-from</span></a>
        <a href="https://react-select.com/props"><span>react-select</span></a>
        <a href="https://ant.design/components/overview-cn/"><span>antd</span></a>
      </div>
      <div className="faq">
        <p>FAQ Guide</p>
        <a href="https://zhuanlan.zhihu.com/p/113216415"><span>写React Hooks前必读</span></a>
        <a href="https://zhuanlan.zhihu.com/p/158672754"><span>我写CSS的常用套路(附demo的效果实现与源码</span></a>
        <a href="https://blog.csdn.net/lucky373125/article/details/80471525?utm_source=app"><span>Swagger从入门到精通</span></a>
        <a href="https://zhuanlan.zhihu.com/p/33374547"><span>柯里化和箭头函数 + React Redux</span></a>
        <a href="https://mp.weixin.qq.com/s/ebFTfZjfyo3SWhYJdC-q-A"><span>Chrome DevTools 面板全攻略</span></a>
        <a href="https://mp.weixin.qq.com/s/Gqfm9X0vrCidc6UQ1hwasA"><span>还分不清 Cookie、Session、Token、JWT？</span></a>
        <a href="https://www.cnblogs.com/tzyy/p/5193811.html"><span>npm package.json属性详解</span></a>
        <a href="https://www.sitepoint.com/node-js-interview-questions/"><span>sitepoint</span></a>
        <a href="https://mp.weixin.qq.com/s/ne6s4PNhnqHDo1PietsJWw"><span>Docker 从入门到实践</span></a>
        <a href="https://www.juejin.im/post/6874968805542461453"><span>webpack 基础配置到性能提升</span></a>
      </div>
      <div className="palette">
        <p>Palette 调色板</p>
        <a href="https://flatuicolors.com/"><span>Palettes</span></a>
        <a href="https://www.materialpalette.com/"><span>material design palette</span></a>
      </div>
      <div className="other">
        <p>Other Guide</p>
        <a href="https://www.w3school.com.cn/media/media_mimeref.asp"><span>MIME手册</span></a>
        <a href="https://www.docschina.org/"><span>印记中文官网</span></a>
        <a href="https://www.iconfont.cn/"><span>阿里巴巴矢量图标</span></a>
        <a href="https://picsum.photos/"><span>一个可以获得随机图片的网站</span></a>
        <a href="https://www.liaoxuefeng.com/"><span>廖雪峰官网</span></a>
        <a href="https://cn.vuejs.org/v2/guide/syntax.html"><span>Vuejs中文文档</span></a>
        <a href="https://www.sequelize.com.cn/"><span>sequelize中文文档</span></a>
      </div>
      <div>
        <p>Good Tools</p>
        <a href="https://the-x.cn/"><span>各种加密解密工具</span></a>
      </div>
      <div><Link to='/blogs'><span>More...</span></Link></div>
    </div>
  );
}

export default Home;