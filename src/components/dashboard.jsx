import React, {Component} from 'react';
import Sidebar from "./common/sidebar";
import Cluster from "./tabs/cluster";
import Tail from "./tabs/tail";
import Node from "./tabs/node";
import Group from "./tabs/group";
import Acls from "./tabs/acls";
import Connect from "./tabs/connect";
import Schema from "./tabs/schema";
import TopicList from "./tabs/topic/topicList";
import TopicCreate from "./tabs/topic/topicCreate";
import SuccessToast from "./common/toast/successToast";

class Dashboard extends Component {
    state = {
        clusterId: '',
        selectedTab: 'cluster', //cluster | node | topic | tail | group | acls | schema | connect
        action: '',
        showSuccessToast: false,
        successToastMessage: '',
        successToastTimeout: 10000, // in ms
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const clusterId = nextProps.match.params.clusterId;
        const selectedTab = nextProps.match.params.tab;
        const action = nextProps.match.params.action;
        const {showSuccessToast, successToastMessage} = nextProps.location;

        return {
            clusterId: clusterId,
            selectedTab: selectedTab,
            action: action,
            showSuccessToast: showSuccessToast,
            successToastMessage: successToastMessage
        };
    }

    componentDidMount() {
        this.checkToasts();
    }

    componentWillUnmount() {
        clearTimeout(this.interval);
    }

    checkToasts = () => {
        const {clusterId} = this.state;

        if (this.state.showSuccessToast) {
            this.interval = setTimeout(() => {
                this.props.history.push({
                    pathname: `/${clusterId}/topic`,
                    showSuccessToast: false,
                    successToastMessage: ''
                });
            }, this.state.successToastTimeout);
        }
    };

    renderSelectedTab = (data) => {
        const {selectedTab} = this.state;

        this.checkToasts();

        switch (selectedTab) {
            case 'cluster':
                return <Cluster data={data} history={this.props.history}/>;
            case 'node':
                return <Node data={data} history={this.props.history}/>;
            case 'topic':
                return <TopicList data={data} history={this.props.history}/>;
            case 'tail':
                return <Tail data={data} history={this.props.history}/>;
            case 'group':
                return <Group data={data} history={this.props.history}/>;
            case 'acls':
                return <Acls data={data} history={this.props.history}/>;
            case 'schema':
                return <Schema data={data} history={this.props.history}/>;
            case 'connect':
                return <Connect data={data} history={this.props.history}/>;
            default:
                return <Cluster data={data} history={this.props.history}/>;
        }
    };

    renderActionTab = () => {
        const {clusterId, selectedTab, action} = this.state;

        // eslint-disable-next-line default-case
        switch (selectedTab) {
            case 'topic':
                // eslint-disable-next-line default-case
                switch (action) {
                    case 'create':
                        return <TopicCreate clusterId={clusterId}/>;
                }
            case 'node':
                break;
            case 'tail':
                break;
            case 'group':
                break;
            case 'acls':
                break;
            case 'schema':
                break;
            case 'connect':
                break;
        }
    };

    render() {
        const {selectedTab, clusterId, action, showSuccessToast, successToastMessage} = this.state;

        return (
            <React.Fragment>
                <SuccessToast show={showSuccessToast} message={successToastMessage}/>
                <Sidebar
                    selectedTab={selectedTab}
                    clusterId={clusterId}
                />
                {action !== undefined ? this.renderActionTab() : this.renderSelectedTab({clusterId})}
            </React.Fragment>
        );
    }
}

export default Dashboard;