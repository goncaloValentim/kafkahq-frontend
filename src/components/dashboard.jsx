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

class Dashboard extends Component {
    state = {
        clusterId: '',
        selectedTab: 'cluster', //cluster | node | topic | tail | group | acls | schema | connect
        action: ''
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const clusterId = nextProps.match.params.clusterId;
        const selectedTab = nextProps.match.params.tab;
        const action = nextProps.match.params.action;

        return {clusterId: clusterId, selectedTab: selectedTab, action: action};
    }

    renderSelectedTab = (data) => {
        console.log('Render tab');
        const {selectedTab} = this.state;

        switch (selectedTab) {
            case 'cluster':
                return <Cluster data={data}/>;
            case 'node':
                return <Node data={data}/>;
            case 'topic':
                return <TopicList data={data}/>;
            case 'tail':
                return <Tail data={data}/>;
            case 'group':
                return <Group data={data}/>;
            case 'acls':
                return <Acls data={data}/>;
            case 'schema':
                return <Schema data={data}/>;
            case 'connect':
                return <Connect data={data}/>;
            default:
                return <Cluster data={data}/>;
        }
    };

    renderActionTab = () => {
        console.log('Render action');
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
        const {selectedTab, clusterId, action} = this.state;

        return (
            <React.Fragment>
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