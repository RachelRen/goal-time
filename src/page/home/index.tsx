import * as React from "react";
import * as classnames from 'classnames';
//import { Button } from 'antd-mobile';
// import Button from 'antd-mobile/lib/button';
//import Button from 'antd/lib/button';
//import { Button } from 'antd-mobile';
import * as Button from 'antd/lib/button';
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
            
            <section className="additem-container">
                
                <div className="additem-line">
                    <span className="additem-label">
                        <i className="iconfont icon-reading"></i>
                    </span>
                    <input type="text" value={goalname} placeholder="输入目标" onChange={this.inputChange} />
                </div>
                <div className="additem-icons-container">
                    <h2 className="icons-title">选择图标</h2>
                    <ul className="icons-list">
                        
                        {list.map(item => 
                            <li className={classnames({
                                "icons-item": true,
                                "icon-item-current": item.id == currentId
                            })} key={item.id} 
                            onClick={this.selectItem(item.id)}>
                                <a className="icons-link" href="javascript:void(0)">
                                    <i className={`iconfont ${item.type}`}></i>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                <a className="additem-btn" onClick={this.addGoal}>
                    <i className="iconfont icon-bt_duigou_B"></i>
                </a>
            </section>
        )
    }
}



export default Home