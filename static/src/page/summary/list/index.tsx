import * as React from "react";
import * as classnames from 'classnames';


import "./index.scss";


export interface ItemProps {
    callback: () => void,
    getList: () => void,
    list: Array<any>,
    addGoal: (name:string, id: string) => void
}
class SummaryList extends React.PureComponent<ItemProps, any>{
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
            <section className="goal-summary-list-container ">
                <ul className="goal-list">
                    <li className="goal-list-item summary-list-item">
                        <p className="summary-list-item-status">
                            <span className="status-text">坚持1天</span>
                            <span className="status-date">从33开始</span>
                        </p>
                        <p className="summary-list-item-detail">
                            测试summarylist
                            <span className="detail-count">
                                0
                                <br />
                                Times
                            </span>
                        </p>
                        
                    </li>
                </ul>
            </section>
        )
    }
}



export default SummaryList