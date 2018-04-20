import React from 'react';
import {
    Image,

} from 'react-native';

import TrendingPage from '../page/TrendingPage';
import MyPage from '../page/MyPage';
import PopularPage from '../page/PopularPage';
import FavoritePage from '../page/FavoritePage';

/*

    --- 路由配置 ---

   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。

     title - 可以作为头部标题 headerTitle ，或者Tab标题 tabBarLabel
     header - 自定义的头部组件，使用该属性后系统的头部组件会消失
     headerTitle - 头部的标题，即页面的标题
     headerBackTitle - 返回标题，默认为 title
     headerTruncatedBackTitle - 返回标题不能显示时（比如返回标题太长了）显示此标题，默认为 “Back”
     headerRight - 头部右边组件
     headerLeft - 头部左边组件
     headerStyle - 头部组件的样式
     headerTitleStyle - 头部标题的样式
     headerBackTitleStyle - 头部返回标题的样式
     headerTintColor - 头部颜色
     headerPressColorAndroid - Android 5.0 以上MD风格的波纹颜色
     gesturesEnabled - 否能侧滑返回， iOS 默认 true ， Android 默认 false

*/

const RouteConfigs = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: ({navigation}) => ({
            title: '热门',
            headerStyle:{backgroundColor:'#2196F3'},
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/images/ic_polular.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),

        })
    },
    TrendingTab: {
        screen: TrendingPage,
        navigationOptions: ({navigation}) => ({
            title: '趋势',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/images/ic_trending.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
            gesturesEnabled: true
        })
    },
    FavoriteTab: {
        screen: FavoritePage,
        navigationOptions: ({navigation}) => ({
            title: '收藏',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/images/ic_favorite.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
            gesturesEnabled: true
        })
    },
    MyTab: {
        screen: MyPage,
        navigationOptions: ({navigation}) => ({
            title: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../../res/images/ic_my.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
            gesturesEnabled: true
        })
    }
};

export default RouteConfigs;