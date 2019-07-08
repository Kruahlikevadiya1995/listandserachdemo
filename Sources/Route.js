import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Screens/Home'
import Detail from './Screens/Detail'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} initial> </Scene>
            <Scene key="detail" component={Detail} > </Scene>
        </Scene>
    </Router>
)
export default Routes