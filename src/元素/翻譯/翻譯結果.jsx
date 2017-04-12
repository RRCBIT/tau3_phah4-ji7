import React, { PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 漢字一逝臺羅一逝 from '../顯示/漢字一逝臺羅一逝';
import 漢字 from '../顯示/漢字';
import 臺羅 from '../顯示/臺羅';
import 分詞 from '../顯示/分詞';
import { 後端網址 } from '../../後端網址';
import 顯示 from '../顯示/顯示';

var debug = Debug('tau3:標漢字音標結果');

class 翻譯結果 extends React.Component {
  render () {
    let { 腔口, 正在查詢, 查詢結果 } = this.props;

    return (
        <div className='main'>
          {
            (正在查詢 && <h3>載入中……</h3>)
          }
          <Tabs selectedIndex={0} style={{ opacity: 正在查詢 ? 0.3 : 1 }}>
            <TabList>
              <Tab>漢字+臺羅</Tab>
              <Tab>漢字</Tab>
              <Tab>臺羅</Tab>
              <Tab>分詞</Tab>
            </TabList>
            <TabPanel>
                <漢字一逝臺羅一逝
                  後端網址={this.props.後端網址}
                  腔口={this.props.腔口}
                  查詢結果={查詢結果}/>
            </TabPanel>
            <TabPanel>
              <顯示 選項='漢字' 查詢結果={查詢結果}/>
            </TabPanel>
            <TabPanel>
              <顯示 選項='臺羅閏號調' 查詢結果={查詢結果}/>
            </TabPanel>
            <TabPanel>
              <顯示 選項='分詞' 查詢結果={查詢結果}/>
            </TabPanel>
          </Tabs>
        </div>
      );
  }
}

翻譯結果.propTypes = {
  正在查詢: PropTypes.bool.isRequired,
  查詢結果: PropTypes.shape({

    綜合標音: PropTypes.array.isRequired,
  }).isRequired,
};

export default 翻譯結果;
