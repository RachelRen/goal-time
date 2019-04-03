import * as React from "react";
import * as classnames from 'classnames';
//import { Button } from 'antd-mobile';
// import Button from 'antd-mobile/lib/button';
//import Button from 'antd/lib/button';
//import { Button } from 'antd-mobile';
import * as Button from 'antd/lib/button';
import { history } from '../../redux/store/index';
import "./index.scss";



export interface ItemProps {
    callback: () => void,
    getList: () => void,
    addedGoal: any,
    list: Array<any>,
    addGoal: (name:string, id: string) => void
}
class AddGoal extends React.PureComponent<ItemProps, any>{
    public state: {
        currentIconId: string,
        goalname: string,
        addedGoal: any
    }
    static getDerivedStateFromProps(props: ItemProps, state: any){
        if(props.addedGoal && props.addedGoal.status == "success"){
            history.push('/');
        }
        return {
            // punchSuccess: !!props.punchGoal,
            addedGoal: props.addedGoal
        }
    }
    constructor(props:ItemProps){
        super(props);
        this.state = {
            currentIconId: "",
            goalname: "",
            addedGoal: {}
        }
    }

    componentDidMount(){
        this.props.getList();
    }
    inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            goalname: e.target.value
        })
    }
    selectItem = (id:string) =>(e:any) => {
        this.setState({
            currentIconId: id
        })
    }
    addGoal = () => {
        const {goalname, currentIconId} = this.state;
        this.props.addGoal(goalname, currentIconId);
    }
    render(){
        const {list} = this.props,
            {currentIconId, goalname} = this.state;

        return (
            
            <section className="additem-container">
                
                <div className="additem-line">
                    <span className="additem-label">
                        <i className="iconfont icon-reading"></i>
                    </span>
                    <input type="text" value={goalname} placeholder="输入目标" onChange={this.inputChange} />
                </div>
                <div className="additem-icons-container">
                    <h2 className="icons-title">选择图标</h2>
                    <div className="additem-icons-list">
                        <ul className="icons-list">
                            
                            {list.map((item, index) => 
                                <li className={classnames({
                                    "icons-item": true,
                                    "icon-item-current": item == currentIconId
                                })} key={index} 
                                onClick={this.selectItem(item)}>
                                    <a className="icons-link" href="javascript:void(0)">
                                        <i className={`iconfont ${item}`}></i>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                
                <div className="additem-btn-container">
                    <a className="additem-btn" onClick={this.addGoal}>
                        确定添加目标
                    </a>
                </div>
                
            </section>
        )
    }
}



export default AddGoal