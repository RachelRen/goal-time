import * as React from "react";
import * as classnames from 'classnames';
//import { Button } from 'antd-mobile';
// import Button from 'antd-mobile/lib/button';
//import Button from 'antd/lib/button';
//import { Button } from 'antd-mobile';
// import * as Button from 'antd/lib/button';
// import Button from 'antd/lib/button';
// import { Button } from 'antd-mobile';
import { Button } from 'antd-mobile';

import "./index.scss";


export interface ItemProps {
    callback: () => void,
    getList: () => void,
    list: Array<any>,
    addGoal: (name:string, id: string) => void
}
class Home extends React.PureComponent<ItemProps, any>{
    public state: {
        currentId: string,
        goalname: string
    }
    constructor(props:ItemProps){
        super(props);
        this.state = {
            currentId: "",
            goalname: ""
        }
    }

    componentDidMount(){
        debugger;
        this.props.getList();
    }
    inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            goalname: e.target.value
        })
    }
    selectItem = (id:string) =>(e:any) => {
        this.setState({
            currentId: id
        })
    }
    addGoal = () => {
        const {goalname, currentId} = this.state;
        this.props.addGoal(goalname, currentId)
    }
    render(){
        const {list} = this.props;
        const {currentId, goalname} = this.state;
        return (
            
            <section className="goal-list-container">
                <ul className="goal-list">
                    <li className="goal-list-item">
                        <div className="item-header">
                            <span>已经打卡3次</span>
                            <span>从2018年03月04日开始</span>
                        </div>
                        <div className="item-content">
                            测试
                            <a href="javascript:void(0)" className="goal-add-link">
                                打卡
                            </a>
                            <Button>Button</Button>
                        </div>
                    </li>
                    {this.props.list.map(item =>
                        <li className="goal-list-item">
                            <div className="item-header">
                                <span>已经打卡次</span>
                                <span></span>
                            </div>
                            <div className="item-content">
                                {item.name}
                                <a href="javascript:void(0)" className="goal-add-link">
                                    打卡
                                </a>
                                <Button>Button</Button>
                            </div>
                        </li>
                    )}
                </ul>
                <div>
                    <Button type="primary" >增加新目标</Button>
                </div>
            </section>
        )
    }
}

//const Home = (props: HomeProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export default Home