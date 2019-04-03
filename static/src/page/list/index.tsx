import * as React from "react";
import * as classnames from 'classnames';
//import { Button } from 'antd-mobile';
// import Button from 'antd-mobile/lib/button';
//import Button from 'antd/lib/button';
//import { Button } from 'antd-mobile';
// import * as Button from 'antd/lib/button';
// import Button from 'antd/lib/button';
// import { Button } from 'antd-mobile';
import createHistory from 'history/createBrowserHistory'
import { history } from '../../redux/store/index';
import { Button, Checkbox, Toast } from 'antd-mobile';

import "./index.scss";


export interface ItemProps {
    callback: () => void,
    getList: () => void,
    list: Array<any>,
    punchclock: (id: string) => void,
    punchGoal: any
}
class Home extends React.PureComponent<ItemProps, any>{
    public state: {
        currentId: string,
        goalname: string,
        punchSuccess: boolean
    }
    static getDerivedStateFromProps(props: ItemProps, state: any){
        return {
            punchSuccess: !!props.punchGoal
        }
    }
    constructor(props:ItemProps){
        super(props);
        this.state = {
            currentId: "",
            goalname: "",
            punchSuccess: false
        }
    }

    componentDidMount(){
        this.props.getList();
    }
    addGoal = () => {
        history.push('/add');
    }
    punchclock = (id:string) => (e:any) => {
        this.props.punchclock(id);
    }
    render(){
        const {list, punchGoal} = this.props,
            {currentId, goalname} = this.state;
            
        if(punchGoal){
            const index = list.findIndex(item => {
                return item.id == punchGoal.id;
            })
            list[index] = punchGoal;  
        }
          
        if(this.state.punchSuccess){
            Toast.success('打卡成功');
        }
        return (
            
            <section className="goal-list-container">
                <ul className="goal-list">
                    <li className="goal-list-item">
                        <div className="item-header">
                            <span>已经打卡3次</span>
                            <span className="item-time">从2018年03月04日开始</span>
                        </div>
                        <div className="item-content">
                            
                            <i className={`iconfont icon-devicestatus`}></i>测试
                            <a href="javascript:void(0)" className="goal-add-link">
                                打卡
                            </a>
                        </div>
                    </li>
                    {this.props.list.map(item =>
                        <li className="goal-list-item" key={item.id}>
                            <div className="item-header">
                                <span>已经打卡{item.count || 0}次</span>
                                <span className="item-time">{item.last_timeStr || item.create_timeStr}</span>
                            </div>
                            <div className="item-content">
                                <i className={`iconfont ${item.iconName}`}></i>{item.name}
                                <a href="javascript:void(0)" className="goal-add-link" onClick={this.punchclock(item.id)}>打卡</a>
                            </div>
                        </li>
                    )}
                </ul>
                <div>
                    <Button type="primary" onClick={this.addGoal}>增加新目标</Button>
                </div>
            </section>
        )
    }

    componentDidUpdate(){
        this.setState({
            punchSuccess: false
        })
    }
}

export default Home